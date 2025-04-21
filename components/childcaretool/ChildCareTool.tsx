// pages/childcare-templates.tsx
import React from 'react';
import Link from 'next/link';
import ToolCard from './ToolCard';
import Image from 'next/image';
import Footer from '../common/Footer/Footer';

// Menu item types
interface MenuItem {
  id: 'child development' | 'Hiring + developing staff' | 'Engaging with families' | 'Running your business' ;
  label: string;
  href: string;
}

interface PreschoolInviteProps {
  activeItem?: 'child development' | 'Hiring + developing staff' | 'Engaging with families' | 'Running your business' ;
}

const MENU_ITEMS: MenuItem[] = [
  { id: 'child development', label: 'child development', href: '#' },
  { id: 'Hiring + developing staff', label: 'Hiring + developing staff', href: '#' },
  { id: 'Engaging with families', label: 'Engaging with families', href: '#' },
  { id: 'Running your business', label: 'Running your business', href: '#' },
];

const ChildcareTemplates: React.FC<PreschoolInviteProps> = ({ activeItem = 'child development' }) => {
  return (
    <>
      <div className="">
        {/* Header */}
        <header
      className={` pt-3 bg-indigo-500 text-white`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1 md:py-2 ">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Link href="/">
            <Image
              src="/images/logo/whitelogo.png"
              alt="Brightwheel Logo"
              width={200}
              height={40}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <div className="hidden md:flex space-x-8 font-medium text-white text-xl mt-1">
            <Link href="/solutions" className="relative group">
              Solutions
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-600 group-hover:w-full"></span>
            </Link>
            <Link href="/resource" className="relative group">
              Resources
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-600 group-hover:w-full"></span>
            </Link>
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

        {/* Navigation Tabs */}
       

        {/* Hero Section */}
        <main>
          <section className="bg-indigo-500 text-white py-16 md:py-20 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Childcare Templates & Tools</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Download our free childcare templates and other resources to simplify your everyday tasks or build knowledge. Find everything you need to streamline your childcare operations.
              </p>
            </div>
          </section>

          {/* Template Cards Placeholder */}
          <section className=" bg-white">
            <div className="container mx-auto px-4">
              {/* Add your template cards here */}
            </div>
          </section>
        </main>
      </div>

      <nav className="w-full bg-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-2 sm:space-x-8 md:space-x-12 overflow-x-auto">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`whitespace-nowrap py-4 px-1 text-sm sm:text-base font-medium border-b-2 transition-colors duration-200 ${
                    activeItem === item.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <ToolCard/>
        <Footer/>
    </>
  );
};

export default ChildcareTemplates;
