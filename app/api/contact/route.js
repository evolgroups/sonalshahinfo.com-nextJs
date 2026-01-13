import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

// Edge Runtime for Cloudflare Pages
export const runtime = 'edge';

async function verifyTurnstile(token, secretKey) {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    }
  );

  const data = await response.json();
  return data.success;
}

async function sendEmail({ name, email, company, message }, apiKey, contactEmail) {
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: 'Sonal Shah Website',
        email: 'noreply@sonalshahinfo.com',
      },
      to: [
        {
          email: contactEmail,
          name: 'Sonal Shah',
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `New Contact Form Submission from ${name}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d0f5b; border-bottom: 2px solid #0d0f5b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #0d0f5b;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #0d0f5b;">Message:</h3>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 8px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
          <p style="color: #888; font-size: 12px;">
            This email was sent from the contact form on sonalshahinfo.com
          </p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to send email');
  }

  return response.json();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message, turnstileToken } = body;

    // Get environment variables from Cloudflare context
    const { env } = getRequestContext();
    const TURNSTILE_SECRET_KEY = env.TURNSTILE_SECRET_KEY;
    const SENDINBLUE_API_KEY = env.SENDINBLUE_API_KEY;
    const CONTACT_EMAIL = env.CONTACT_EMAIL;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Please complete the security verification' },
        { status: 400 }
      );
    }

    const isValidToken = await verifyTurnstile(
      turnstileToken,
      TURNSTILE_SECRET_KEY
    );

    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Send email
    await sendEmail(
      { name, email, company, message },
      SENDINBLUE_API_KEY,
      CONTACT_EMAIL
    );

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        debug: error.message,
        stack: error.stack 
      },
      { status: 500 }
    );
  }
}
