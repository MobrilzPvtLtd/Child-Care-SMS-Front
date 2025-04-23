"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header2() {
  return (
    <header className="pt-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1 md:py-2">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Link href="/">
            <Image
              src="/images/logo/whitelogo.png"
              alt="Flowysis Logo"
              width={200}
              height={40}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <div className="hidden md:flex space-x-8 font-medium text-white text-xl mt-1">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <Link href="/solutions" className="flex items-center">
                Solutions
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-600 group-hover:w-full"></span>
              </Link>
              <div className="absolute z-10 hidden group-hover:block w-64 mt-1 bg-white rounded-lg shadow-lg transform opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
                <div className="p-4 space-y-3">
                  <Link
                    href="/overview"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Preschools & Children Care
                  </Link>
                  <Link
                    href="/centers"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Centers
                  </Link>
                  <Link
                    href="/schools"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Schools
                  </Link>
                  <Link
                    href="/parent"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Parents
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <Link href="/resource" className="flex items-center">
                Resources
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-600 group-hover:w-full"></span>
              </Link>
              <div className="absolute z-10 hidden group-hover:block w-64 mt-1 bg-white rounded-lg shadow-lg transform opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
                <div className="p-4 space-y-3">
                  <Link
                    href="/resource"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Early education and childcare resources
                  </Link>
                  <Link
                    href="/#"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    School
                  </Link>
                  <Link
                    href="/customer"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Customer Stories
                  </Link>
                  <Link
                    href="/help"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/tool-templates"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Childcare template & Tool
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="relative group">
              Pricing
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-600 group-hover:w-full"></span>
            </Link>
            <Link href="/login" className="relative group">
              Log In
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-600 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="hidden md:block bg-red-500 text-white px-2 md:px-4 py-1.5 rounded-md shadow-md hover:bg-red-600 transition"
            >
              Get a demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
