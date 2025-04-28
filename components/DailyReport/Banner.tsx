// pages/index.tsx
import React from "react";
import Link from "next/link";
import Header2 from "../common/Header/header2";

export default function Banner() {
  return (
    <div className="min-h-screen bg-[#5463d6]">
      <Header2 />

      <main className="container mx-auto max-w-7xl px-4 py-12 md:py-12 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column - Text and Buttons */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-white text-lg font-medium mb-3">
                #1 childcare check-in app
              </h2>
              <h1 className="text-white text-4xl md:text-5xl font-bold">
              Easy daily reports for quality connections
              </h1>
              <p className="text-white text-lg my-8 ">
                 Record activities, share photos or videos, and send daily reports, all in Flowysis.
              </p>
              <p className="text-white text-xl mb-6">
                First, tell us about yourself.
              </p>

              {/* Role Selection Buttons */}
              <div className="space-y-4">
                <button className="flex items-center justify-between w-full bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center">
                    <div className="bg-[#5463d6] p-2 rounded-md mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">
                      I'm an <span className="font-bold">admin</span> or{" "}
                      <span className="font-bold">director</span>
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button className="flex items-center justify-between w-full bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center">
                    <div className="bg-indigo-500 p-2 rounded-md mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">
                      I'm a <span className="font-bold">staff member</span>
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button className="flex items-center justify-between w-full bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center">
                    <div className="bg-purple-500 p-2 rounded-md mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">
                      I'm a <span className="font-bold">parent</span> or{" "}
                      <span className="font-bold">guardian</span>
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - App Screenshots */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src="/banner-img.jpg" // Replace this with your actual image path
                alt="Dashboard Illustration"
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
