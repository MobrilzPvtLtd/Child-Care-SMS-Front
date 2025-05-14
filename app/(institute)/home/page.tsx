"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Star } from "lucide-react";

function page() {
  const [currentDate] = useState(
    new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "numeric",
      day: "numeric",
      year: "numeric",
    })
  );
  const [currentDateTime] = useState(
    new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "numeric",
      day: "numeric",
      year: "numeric",
    })
  );
  return (
    <>
      <div className="  rounded-md border-1 ">
        {/* Left Section */}
        <div className="flex  items-center   bg-gray-100 px-2 py-4">
          <h1 className="text-xl font-bold text-black px-4 ">
            See the full value of flowysis
          </h1>
        </div>

        <div className="flex items-center justify-between p-8 ">
          <div className="">
            <Image
              src="/group.png"
              alt="Person 2"
              width={380}
              height={120}
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              Welcome, Kunal
            </h2>
            <p className="text-gray-600   py-6 text-justify">
              Tour the easiest all-in-one childcare app and see the full value
              of <br /> brightwheel in action with a free, personalized product
              tour.
            </p>
            <div className="flex space-x-3">
              <button className="bg-[#5463D6] text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Schedule a free demo
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                Explore our features
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-6 p-4">
        {/* Left Column */}
        <div className="w-[40%] bg-white rounded-lg shadow-sm p-6 flex flex-col gap-6">
          {/* Billing Section */}
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-6">
              <span className="font-bold">B</span>illing
            </h2>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-teal-50 p-4 rounded-full">
                <div className="text-teal-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                </div>
              </div>

              <h3 className="text-lg font-medium">
                Get paid on time, every time
              </h3>
              <p className="text-gray-600 text-sm">
                Set up your school's billing in 3 easy steps.
              </p>

              <button className="mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
                Set up billing
              </button>
            </div>
          </div>

          {/* Upcoming Birthdays Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Upcoming birthdays</h3>
            </div>

            <div className="border-t pt-4">
              <p className="text-gray-600">No upcoming birthdays</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[60%] ">
          <div className="">
           
            <div className="max-w-4xl mx-auto ">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <h2 className="text-xl font-bold text-gray-800">
                      Today's Logged Activities
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-600 text-sm">
                    as of {currentDateTime}
                  </div>
                </div>

                {/* Total Activities Card */}
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <div className="text-5xl font-bold text-gray-800">0</div>
                  <div className="text-gray-500 mt-1">
                    Total Activities Today
                  </div>
                </div>

                {/* Room1 Section */}
                <div className="border-b pb-6 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-6 flex flex-col items-center justify-center w-24 h-24">
                      <div className="text-3xl font-bold text-gray-800">0</div>
                      <div className="text-gray-500 text-sm">Activities</div>
                    </div>
                    <div className="ml-6 mt-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Room1
                      </h3>
                      <p className="text-gray-600 mt-1">
                        No students are checked in to log activities
                      </p>
                    </div>
                  </div>
                </div>

                {/* Demo Room Section */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-6 flex flex-col items-center justify-center w-24 h-24">
                      <div className="text-3xl font-bold text-gray-800">0</div>
                      <div className="text-gray-500 text-sm">Activities</div>
                    </div>
                    <div className="ml-6 mt-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Demo Room
                      </h3>
                      <div className="flex items-center mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-red-500">No students</p>
                        <p className="text-gray-600 ml-1">
                          have activities logged
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Remind Staff
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
     
  );
}

export default page;
