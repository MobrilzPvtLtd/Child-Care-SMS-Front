

import Image from 'next/image';
import Link from 'next/link';

export default function Header1() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/images/logo/logo copy.svg" // Replace with your actual logo path
          alt="Brightwheel Logo"
          width={200}
          height={40}
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/home" className="text-blue-600 text-lg ">
          Solutions
        </Link>
        <Link href="resource" className="text-blue-600 text-lg ">
          Resources
        </Link>
        <Link href="/pricing" className="text-blue-600 text-lg ">
          Pricing
        </Link>
        <Link href="#" className="text-blue-600 text-lg ">
          Log In
        </Link>
      </nav>

      {/* CTA Button */}
      <Link
        href="#"
        className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition"
      >
        Get a demo
      </Link>

      {/* Mobile Menu (Optional) */}
      <div className="md:hidden flex items-center">
        <button className="text-blue-600">☰</button>
      </div>
    </header>
  );
}
