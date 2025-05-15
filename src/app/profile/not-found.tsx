export default function Something() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Username Not Found</h1>
        <p className="text-gray-400 mb-6">We couldn’t find a GitHub profile with that username.</p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}
