"use client";

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Something Went Wrong</h1>
        <p className="text-gray-400 mb-6">An unexpected error occurred. Please try again later.</p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
