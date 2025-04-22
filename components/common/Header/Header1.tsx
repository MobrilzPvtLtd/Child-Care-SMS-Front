"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header1() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Only apply scroll logic if not on /login, /pricing, or /signup routes
    if (!["/login", "/signup"].includes(pathname)) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 35) {
          setIsHeaderVisible(true);
        } else {
          setIsHeaderVisible(false);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY, pathname]);

  return (
    <header
      className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-900 ${
        ["/login", "/signup"].includes(pathname)
          ? "opacity-100 translate-y-0"
          : isHeaderVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full h-0 overflow-hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1 md:py-2">
        {/* Logo */}
        <div className="flex items-center cursor-pointer py-2">
          <Link href="/">
            <Image
              src="/images/logo/logo.png"
              alt="Brightwheel Logo"
              width={200}
              height={40}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <div className="hidden md:flex space-x-8 font-medium text-black/90 text-xl mt-1">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <Link href="/solutions" className="flex items-center">
                Solutions
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-600 group-hover:w-full"></span>
              </Link>
              <div className="absolute z-10 hidden group-hover:block w-64 mt-1 bg-white rounded-lg shadow-lg transform opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
                <div className="p-4 space-y-3">
                  <Link
                    href="/solutions/childcare"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    Preschools & Children Care
                  </Link>
                  <Link
                    href="/solutions/preschool"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    Centers
                  </Link>
                  <Link
                    href="/solutions/daycare"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    Schools
                  </Link>
                  <Link
                    href="/solutions/afterschool"
                    className="block text-blue-500 hover:text-blue-700 text-base"
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
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-600 group-hover:w-full"></span>
              </Link>
              <div className="absolute z-10 hidden group-hover:block w-64 mt-1 bg-white rounded-lg shadow-lg transform opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
                <div className="p-4 space-y-3">
                  <Link
                    href="/resource/blog"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    Early education and childcare resources
                  </Link>
                  <Link
                    href="/resource/webinars"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    School
                  </Link>
                  <Link
                    href="/resource/guides"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    Customer Stories
                  </Link>
                  <Link
                    href="/resource/case-studies"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/resource/tools"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    Childcare template & Tool
                  </Link>
                  <Link
                    href="/resource/blog"
                    className="block text-blue-500 hover:text-blue-700 text-base"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="relative group">
              Pricing
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-600 group-hover:w-full"></span>
            </Link>
            <Link href="/login" className="relative group">
              Log In
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-600 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="hidden md:block bg-red-500 text-white px-2 md:px-4 py-1.5 rounded-md shadow-md hover:bg-red-600 transition"
            >
              Get a demo
            </Link>
            <div className="md:hidden flex items-center">
              <GiHamburgerMenu
                className="text-black text-xl font-bold cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 z-40 md:hidden">
          <div className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg z-50 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <IoClose
                className="text-2xl cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>

            {/* Links */}
            <ul className="flex flex-col items-center py-4 flex-grow space-y-6">
              <li>
                <Link
                  href="/solutions"
                  className="block text-gray-700 hover:text-blue-600 text-lg"
                  onClick={toggleSidebar}
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/resource"
                  className="block text-gray-700 hover:text-blue-600 text-lg"
                  onClick={toggleSidebar}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block text-gray-700 hover:text-blue-600 text-lg"
                  onClick={toggleSidebar}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block text-gray-700 hover:text-blue-600 text-lg"
                  onClick={toggleSidebar}
                >
                  Log In
                </Link>
              </li>
            </ul>

            {/* Get a Demo Button */}
            <div className="p-4 flex justify-center items-center">
              <Link
                href="#"
                className="block w-56 text-center bg-red-500 text-white py-2 rounded-md shadow-md hover:bg-red-600 transition"
                onClick={toggleSidebar}
              >
                Get a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}