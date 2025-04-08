// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="min-h-screen bg-blue-500">
      {/* <Head>
        <title>Brightwheel - #1 Childcare Management Software</title>
        <meta name="description" content="Easy-to-use tools to simplify your day" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="container mx-auto max-w-5xl px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column - Text and Buttons */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-md mx-auto lg:mx-0">
              <h2 className="text-white text-lg font-medium mb-3">#1 childcare management software</h2>
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                Easy-to-use tools to <span className="underline decoration-4 decoration-indigo-400">simplify your day</span>
              </h1>
              <p className="text-white text-xl mb-6">First, tell us about yourself.</p>
              
              {/* Role Selection Buttons */}
              <div className="space-y-4">
                <button className="flex items-center justify-between w-full bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-2 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">I'm an <span className="font-bold">admin</span> or <span className="font-bold">director</span></span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>

                <button className="flex items-center justify-between w-full bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center">
                    <div className="bg-indigo-500 p-2 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">I'm a <span className="font-bold">staff member</span></span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>

                <button className="flex items-center justify-between w-full bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center">
                    <div className="bg-purple-500 p-2 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">I'm a <span className="font-bold">parent</span> or <span className="font-bold">guardian</span></span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Join School Link */}
              <div className="mt-8 text-white">
                <span>Already use brightwheel? </span>
                <Link href="/join" className="font-bold underline hover:text-indigo-200 transition-colors">
                  Join your school
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - App Screenshots */}
          {/* <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px]">
            
              <div className="absolute z-10 w-4/5 right-0 top-0">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-lg font-bold">Billing</div>
                      <div></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>Open Invoices</div>
                        <div className="text-gray-500">0%</div>
                      </div>
                      <div className="bg-teal-500 h-2 w-full rounded"></div>
                      <div className="pt-4">Payments</div>
                    </div>
                    <div className="absolute top-8 right-8 bg-white border border-gray-200 shadow-md rounded-md p-2 flex items-center">
                      <div className="w-4 h-4 bg-teal-500 rounded-full mr-2"></div>
                      <span className="text-xs">All invoices paid!</span>
                    </div>
                  </div>
                </div>
              </div>

          
              <div className="absolute z-20 w-1/3 left-8 md:left-16 top-32">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="bg-indigo-500 p-2 text-white font-medium text-center">
                    Messages
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                     
                      <div className="flex justify-end">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="flex">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="flex">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
              <div className="absolute z-0 top-20 right-16 w-2/3">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="bg-indigo-500 p-2 text-white font-medium">
                    Check in to Bluebird Preschool
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-4">
                    
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
                        <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                          Check in
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}