import Image from "next/image";
import Link from "next/link";

export default function Header1() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
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
        <nav className="flex space-x-6">
          <div className="hidden md:flex space-x-8 font-medium text-black/90 text-xl mt-1">
            <Link href="/home" className="relative group">
              Solutions
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-600 group-hover:w-full"></span>
            </Link>
            <Link href="resource" className="relative group">
              Resources
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-600 group-hover:w-full"></span>
            </Link>
            <Link href="/pricing" className="relative group">
              Pricing
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-600 group-hover:w-full"></span>
            </Link>
            <Link href="/login" className="relative group">
              Log In
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-600 group-hover:w-full"></span>
            </Link>
          </div>
          <Link
            href="#"
            className="bg-red-500 text-white px-4 py-1.5 rounded-md shadow-md hover:bg-red-600 transition"
          >
            Get a demo
          </Link>
        </nav>

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden flex items-center">
          <button className="text-blue-600">☰</button>
        </div>
      </div>
    </header>
  );
}
