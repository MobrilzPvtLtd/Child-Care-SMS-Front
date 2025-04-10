import React from "react";
import { FaCheckCircle } from 'react-icons/fa';
import Image from "next/image";

const Banner2 = () => {
  return (
    <div className="bg-[#5D6BE0] relative mx-auto max-w-7xl rounded-3xl p-6 sm:p-10 text-white overflow-hidden mb-4">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-6 h-6 bg-pink-500 rounded-full rotate-45"></div>
        <div className="absolute top-4 right-4 w-6 h-6 bg-red-400 rounded-sm rotate-45"></div>
        <div className="absolute bottom-4 right-10 w-6 h-6 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-4 left-8 w-6 h-6 bg-cyan-400 rounded-sm rotate-12"></div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-300 rotate-45"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Faster, easier tax prep for you and your families
          </h2>
          <p className="mb-6">
            Tax season doesn’t need to be stressful! Brightwheel can help you:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-white mt-1 w-5 h-5" />
              Enable families to easily access their tax statements on their own
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-white mt-1 w-5 h-5" />
              Get your local, state, and federal taxes filed automatically with payroll
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-white mt-1 w-5 h-5" />
              Gather essential reports on revenue, billing transactions and more—all in one place
            </li>
          </ul>
          <button className="mt-6 bg-[#FF5A5F] hover:bg-red-500 transition text-white px-5 py-2 rounded-md">
            Get a Demo
          </button>
        </div>

        {/* Right Content - Simulated UI Cards */}
        <div className="relative flex flex-col gap-6 items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-xs p-4 text-black relative">
            <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-br-md">
              PDF
            </span>
            <h3 className="font-bold text-lg">Parent tax summary</h3>
            <p className="text-sm">Student: Erica Rollins</p>
            <p className="text-sm mt-1">Total Payments <strong>$8,325</strong></p>
            <div className="mt-4 border rounded-md p-2 text-center text-indigo-600 font-medium text-sm">
              Download your summary
            </div>
          </div>

          {/* <div className="bg-white rounded-xl shadow-lg w-full max-w-xs p-4 text-black">
            <h4 className="font-semibold text-base mb-2">Review and submit</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 w-4 h-4" />
                State, Local, Federal taxes filed
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 w-4 h-4" />
                Employee W-2's generated
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p>Total payroll <strong>$27,551.11</strong></p>
              <p>Debit amount <strong>$24,131.60</strong></p>
              <p>Employee pay date <strong>Dec 31</strong></p>
            </div>
            <button className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 transition text-white py-2 rounded-md">
              Submit payroll
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
