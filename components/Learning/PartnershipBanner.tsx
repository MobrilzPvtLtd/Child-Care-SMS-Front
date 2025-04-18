// PartnershipBanner.jsx
import Image from "next/image";
import React from "react";

const PartnershipBanner = () => {
  return (
    <div className="relative bg-pink-50 my-20 py-12 px-4 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-4 left-12">
        <div className="w-12 h-12 bg-purple-600 rounded-full transform rotate-45"></div>
      </div>
      <div className="absolute top-8 right-24">
        <div className="w-8 h-8 bg-cyan-400 rounded-full transform rotate-12"></div>
      </div>
      <div className="absolute bottom-16 left-36">
        <div className="w-10 h-10 bg-blue-400 rounded-full transform -rotate-12 skew-x-6"></div>
      </div>
      <div className="absolute right-16 top-20">
        <div className="w-14 h-14 bg-red-400 rounded-full transform -rotate-45"></div>
      </div>
      <div className="absolute right-20 bottom-8">
        <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Logo Partnership */}
      <div className="flex justify-center items-center space-x-2 mb-8">
        <Image
          src="/images/logo/logo.png"
          alt="Brightwheel Logo"
          width={200}
          height={40}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#811986] rounded-lg p-8 text-white flex flex-col md:flex-row gap-12">
          {/* Left side images */}
          <div className="w-full md:w-1/2 py-10 relative">
            <div className="relative z-10">
              <img
                src="/images/learn-img.jpeg"
                alt="Brightwheel Logo"
                className="rounded-lg shadow-lg object-cover w-full h-64 md:h-96"
                
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We believe in high quality early education for every child
            </h2>

            <p className="text-white/90 mb-6">
              Experience Curriculum is now in brightwheel! Support child
              development with expert-designed lesson plans and high-quality,
              hands-on learning materials for baby, toddler, and preschool
              programs.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p>Over 30 years of experience</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p>Aligned with all 50 states' early learning standards</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p>Research and evidence-based</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p>Aligned with NAEYC, Common Core, Head Start</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBanner;
