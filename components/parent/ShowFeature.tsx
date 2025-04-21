import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define interface for menu items
interface MenuItem {
  id: 'invite' | 'features' | 'home';
  label: string;
  href: string;
}

// Define props interface with proper typing
interface PreschoolInviteProps {
  activeItem?: 'invite' | 'features' | 'home';
}

const MENU_ITEMS: MenuItem[] = [
  { id: 'invite', label: 'Invite your School', href: '/#invite' },
  { id: 'features', label: 'Features for Parents', href: '/#features' },
  { id: 'home', label: 'Using at Home', href: '/#home' },
];

// Feature item interface for type safety
interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
  icon: React.ReactNode;
}

const ShowFeature: React.FC<PreschoolInviteProps> = ({ activeItem = 'invite' }) => {
  // Features data extracted for better maintainability
  const features: FeatureItem[] = [
    {
      id: 'photos',
      title: 'Photos',
      description: 'Watch your child\'s day unfold with snapshots delivered to your mobile device.',
      iconColor: 'text-pink-600',
      bgColor: 'bg-pink-200',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'connected',
      title: 'Stay connected',
      description: 'Stay in touch with your teacher and strengthen school learning with activities at home.',
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-200',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 'checkin',
      title: 'Digital check-in',
      description: 'Easy digital check-in with personal passcodes. Add approved adults to pick up your child, and see when your child is checked in or out.',
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-200',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      id: 'billing',
      title: 'Simplified billing',
      description: 'Set it and forget it with automated payments. Plus, easily access digital invoices, receipts, and year-end tax statements.',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-200',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 'community',
      title: 'Your child\'s community',
      description: 'Invite grandparents, nannies, and friends - with control over what they can do and see on brightwheel.',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-200',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Extracted Feature component for better readability
  const Feature: React.FC<FeatureItem> = ({ title, description, iconColor, bgColor, icon }) => (
    <div className="flex items-start mb-6">
      <div className={`${bgColor} ${iconColor} p-2 rounded-full mr-4`}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <> 
      <nav className="w-full bg-gray-100 border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:justify-center space-x-2 sm:space-x-8 md:space-x-12 overflow-x-auto">
            {MENU_ITEMS.map((item) => (
              <Link  
                key={item.id} 
                href={item.href}
                className={`whitespace-nowrap py-4 px-1 text-sm sm:text-base font-medium border-b-2 ${
                  activeItem === item.id 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Navigation Menu */}

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl text-indigo-600 font-medium mb-4">
          Invite your preschool or child care
        </h1>
        <p className="text-gray-600 mx-auto max-w-2xl mb-6">
          Interested in real-time photos, easy messaging, and online payments? Click below to send a quick invitation! (Looking for a preschool?{' '}
          <Link href="#" className="text-indigo-600 hover:underline">
            Search and compare options near you
          </Link>
          .)
        </p>
        <button 
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          aria-label="Invite your school"
        >z
          Invite your school
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Features List */}
        <div className="lg:w-1/2">
          <h2 className="text-xl font-medium mb-4">Daily updates</h2>
          <p className="text-gray-600 mb-8">Real-time feed of activities throughout the day.</p>

          {/* Feature Items */}
          {features.map(feature => (
            <Feature 
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              bgColor={feature.bgColor}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* App Preview Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative w-80 h-96">
            <Image 
              src="/Child-feed.png" 
              alt="Preschool app mobile interface showing child activity feed"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShowFeature;