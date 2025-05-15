import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(`https://api.github.com/users/${id}`);

  if (res.status !== 200) {
    notFound();
  }

  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6 relative">
      <Link
        href="/"
        className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ← Home
      </Link>

      <div className="max-w-md mx-auto mt-20 bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <Image
          src={data.avatar_url}
          alt={data.name || data.login}
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold">{data.name || data.login}</h1>
        <p className="text-gray-400 mb-2">@{data.login}</p>
        <p className="text-lg">
          Followers:{" "}
          <span className="font-semibold text-blue-400">{data.followers}</span>{" "}
          | Following:{" "}
          <span className="font-semibold text-blue-400">{data.following}</span>
        </p>
      </div>
    </div>
  );
}
