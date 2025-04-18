// pages/index.tsx
import React from "react";
import Link from "next/link";
import Header2 from "../common/Header/header2";

export default function Banner() {
  return (
    <div className="min-h-screen bg-[#5524ae]">
      {/* <Head>
        <title>Flowysis - #1 Childcare Management Software</title>
        <meta name="description" content="Easy-to-use tools to simplify your day" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header2 />

      <main className="container mx-auto max-w-7xl px-4 py-12 md:py-12 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column - Text and Buttons */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-white text-lg font-medium mb-3">
                #1 childcare management software
              </h2>
              <h1 className="text-white text-4xl md:text-5xl leading-13 tracking-wide  font-bold mb-8">
              Teaching made easier. Learning made better.
              </h1>
              <p className="text-white text-xl mb-6">
              Experience Curriculum is a complete, easy-to-implement curriculum system with daily lesson plans and materials for each child delivered to your door, plus full digital integration with brightwheel.
              </p>
 
              
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
