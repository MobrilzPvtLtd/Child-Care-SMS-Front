// components/HeroBanner.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Banner from '../home/Banner';
import Header2 from '../common/Header/header2';

const HeroBanner: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Banner with Background Image */}
      <Header2/>
      <div className="relative w-full h-96 bg-amber-50">
        {/* Background Image (using a placeholder since we can't load external images) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner-pg.jpg"
            alt="Children coloring with pencils"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Your child's day, in real time
            </h1>
            <p className="text-white text-lg mb-8">
              Easy and intuitive school communication.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md transition-colors">
              Invite your school
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-8">
            <li>
              <Link 
                href="#invite"
                className="inline-block py-4 px-2 text-indigo-700 border-b-2 border-indigo-700 font-medium text-sm"
              >
                Invite your School
              </Link>
            </li>
            <li>
              <Link 
                href="#features"
                className="inline-block py-4 px-2 text-gray-600 hover:text-indigo-700 font-medium text-sm"
              >
                Features for Parents
              </Link>
            </li>
            <li>
              <Link 
                href="#home"
                className="inline-block py-4 px-2 text-gray-600 hover:text-indigo-700 font-medium text-sm"
              >
                Using at Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeroBanner;