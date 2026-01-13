'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * Custom 404 Page
 * Professional error page that maintains brand consistency
 */

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-primary-900 opacity-20">404</h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 -mt-8 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
