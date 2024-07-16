import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return  <div className="container mx-auto p-4 text-center">
  <h1 className="text-3xl font-bold mb-4">Welcome to Next.js Demo</h1>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
   
    <Link href="/blogs">
      <i className="block p-4 border border-gray-300 rounded hover:bg-red-500 text-black">
        <h2 className="text-lg font-semibold text-white ">Blogs</h2>
        <p className="mt-2 text-sm text-white">Explore our blog posts</p>
      </i>
    </Link>
    

    <Link href="/users">
      <i className="block p-4 border border-gray-300 rounded hover:bg-green-500 text-black">
        <h2 className="text-lg font-semibold text-white">Users</h2>
        <p className="mt-2 text-sm text-white">View user profiles</p>
      </i>
    </Link>
    
  
    <Link href="/tasks">
      <i className="block p-4 border border-gray-300 rounded hover:bg-blue-500 text-black">
        <h2 className="text-lg font-semibold text-white">Tasks</h2>
        <p className="mt-2 text-sm text-white">Manage your tasks</p>
      </i>
    </Link>
  </div>
</div>;
}
