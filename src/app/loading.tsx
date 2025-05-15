export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-500 h-12 w-12 mb-4 mx-auto animate-spin"></div>
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
