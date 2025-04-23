// components/FlowysisBanner.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FlowysisBanner: React.FC = () => {
  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-200">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400/40 to-gray-300/40">
        <Image
          src="/banner-pg.jpg" 
          alt="Children drawing with colored pencils"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <header className="flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image 
                  src="/images/logo/whitelogo.png" 
                  alt="Flowysis" 
                  width={180} 
                  height={40} 
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            </Link>
          </div>
          
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
                    href="/solutions/childcare"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Preschools & Children Care
                  </Link>
                  <Link
                    href="/solutions/preschool"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Centers
                  </Link>
                  <Link
                    href="/solutions/daycare"
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
                    href="/resource/blog"
                    className="block text-gray-700 hover:text-blue-500 text-base"
                  >
                    Early education and childcare resources
                  </Link>
                  <Link
                    href="/resource/webinars"
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
          
          {/* <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
        </header>
        
        {/* Hero content */}
        <div className="mt-12 md:mt-24 max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your child's day, in real time
          </h1>
          <p className="mt-4 md:mt-6 text-xl md:text-2xl text-white">
            Easy and intuitive school communication.
          </p>
          <div className="mt-6 md:mt-8">
            <Link href="/invite" className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors">
              Invite your school
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowysisBanner;