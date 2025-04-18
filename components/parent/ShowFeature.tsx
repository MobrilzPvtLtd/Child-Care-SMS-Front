// components/PreschoolInvite.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShowFeature: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl text-indigo-600 font-medium mb-4">
          Invite your preschool or child care
        </h1>
        <p className="text-gray-600 mb-6">
          Interested in real-time photos, easy messaging, and online payments? Click below to send a quick invitation! (Looking for a preschool?{' '}
          <Link href="#" className="text-indigo-600 hover:underline">
            Search and compare options near you
          </Link>
          .)
        </p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
          Invite your school
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Features List */}
        <div className="lg:w-1/2">
          <h2 className="text-lg font-medium mb-2">Daily updates</h2>
          <p className="text-gray-600 mb-6">Real-time feed of activities throughout the day.</p>

          {/* Photos Feature */}
          <div className="flex items-start mb-6">
            <div className="bg-pink-200 text-pink-600 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-1">Photos</h3>
              <p className="text-gray-600 text-sm">Watch your child's day unfold with snapshots delivered to your mobile device.</p>
            </div>
          </div>

          {/* Stay Connected Feature */}
          <div className="flex items-start mb-6">
            <div className="bg-orange-200 text-orange-600 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-1">Stay connected</h3>
              <p className="text-gray-600 text-sm">Stay in touch with your teacher and strengthen school learning with activities at home.</p>
            </div>
          </div>

          {/* Digital Check-in Feature */}
          <div className="flex items-start mb-6">
            <div className="bg-yellow-200 text-yellow-600 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-1">Digital check-in</h3>
              <p className="text-gray-600 text-sm">Easy digital check-in with personal passcodes. Add approved adults to pick up your child, and see when your child is checked in or out.</p>
            </div>
          </div>

          {/* Simplified Billing Feature */}
          <div className="flex items-start mb-6">
            <div className="bg-blue-200 text-blue-600 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-1">Simplified billing</h3>
              <p className="text-gray-600 text-sm">Set it and forget it with automated payments. Plus, easily access digital invoices, receipts, and year-end tax statements.</p>
            </div>
          </div>

          {/* Community Feature */}
          <div className="flex items-start">
            <div className="bg-green-200 text-green-600 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-1">Your child's community</h3>
              <p className="text-gray-600 text-sm">Invite grandparents, nannies, and friends - with control over what they can do and see on brightwheel.</p>
            </div>
          </div>
        </div>

        {/* App Preview Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-80 h-96">
            <Image 
              src="/Child-feed.png" 
              alt="Mobile app screenshot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFeature;