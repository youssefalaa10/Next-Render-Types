import { signIn, signOut, useSession } from 'next-auth/react';
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto p-4 text-center">
      {!session && (
        <div className="flex justify-center items-center h-screen">
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => signIn('github')}
          >
            Sign in with GitHub
          </button>
        </div>
      )}

      {session && (
        <div className="mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to Next.js Demo</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link href="/blogs">
              <i className="block p-4 border border-gray-300 rounded hover:bg-red-500 text-black dark:text-white">
                <h2 className="text-lg font-semibold">Blogs</h2>
                <p className="mt-2 text-sm">Explore our blog posts</p>
              </i>
            </Link>

            <Link href="/users">
              <i className="block p-4 border border-gray-300 rounded hover:bg-green-500 text-black dark:text-white">
                <h2 className="text-lg font-semibold">Users</h2>
                <p className="mt-2 text-sm">View users profiles</p>
              </i>
            </Link>

            <Link href="/tasks">
              <i className="block p-4 border border-gray-300 rounded hover:bg-blue-500 text-black dark:text-white">
                <h2 className="text-lg font-semibold">Tasks</h2>
                <p className="mt-2 text-sm">Manage your tasks</p>
              </i>
            </Link>

            <div className="mt-4 flex justify-center items-center">
              <button
                className=" p-4 border border-gray-300 rounded hover:bg-red-500 text-black dark:text-white"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
