// components/FlowysisBanner.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "../common/Header/header2";
import { IoPlayCircleOutline } from "react-icons/io5";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[96] md:h-fit overflow-hidden bg-gray-200">
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
        <Header2 />

        {/* Hero content */}
        <div className="mt-12 md:mt-24 max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            All-in-one childcare app
          </h1>
          <p className="mt-4 md:mt-6 text-xl md:text-2xl text-white">
            The #1 childcare software to help you save time, get paid faster,
            and deepen staff and family engagement.
          </p>
          <div className="mt-6 md:my-12 text-xl flex gap-8">
            <Link
              href="/invite"
              className="inline-flex items-center justify-center px-6 py-3  text-white font-medium rounded-md hover:border-2 hover:border-teal-600 transition-colors"
            >
              <IoPlayCircleOutline className="text-4xl mr-2" /> Watch the video
            </Link>
            <Link
              href="/invite"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
