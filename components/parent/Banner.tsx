// components/BrightwheelBanner.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BrightwheelBanner: React.FC = () => {
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
                  alt="Brightwheel" 
                  width={180} 
                  height={40} 
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/solutions" className="text-white hover:text-gray-200 font-medium">
              Solutions
            </Link>
            <Link href="/resources" className="text-white hover:text-gray-200 font-medium">
              Resources
            </Link>
            <Link href="/pricing" className="text-white hover:text-gray-200 font-medium">
              Pricing
            </Link>
            <Link href="/login" className="text-white hover:text-gray-200 font-medium">
              Log In
            </Link>
            <Link href="/demo" className="inline-flex items-center justify-center px-5 py-2 border border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-800 transition-colors">
              Get a demo
            </Link>
          </nav>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
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

export default BrightwheelBanner;