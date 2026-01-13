/**
 * Loading component
 * Displays while page is loading for better UX
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary-900/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-900 rounded-full animate-spin" />
        </div>
        
        {/* Loading text */}
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
