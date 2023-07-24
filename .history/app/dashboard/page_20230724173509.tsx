import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex flex-column justify-between items-center">
            <div className="text-white text-xl font-bold">
              <Link href="/">My Logo</Link>
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
