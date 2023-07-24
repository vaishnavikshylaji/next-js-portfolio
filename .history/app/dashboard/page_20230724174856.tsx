import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link href="/">NextJS</Link>
          </div>
          <ul className="flex space-x-4">
            <li className="text-white p-1 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
              <Link href="/dashboard">Home</Link>
            </li>

            <li className="text-white p-1 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
              <Link href="/about">About</Link>
            </li>
            <li className="text-white p-1 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
