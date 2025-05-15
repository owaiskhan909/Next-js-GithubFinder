"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const formHandler = (e: any) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    router.push(`/profile/${username}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <form
        onSubmit={formHandler}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md flex items-center gap-4"
      >
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub username"
          className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
}
