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
            <li>
              <Link href="/dashboard">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
