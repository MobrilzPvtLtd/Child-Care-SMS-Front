"use client";
import { useState } from "react";
import { FaSchool, FaHome, FaUserFriends, FaCheckCircle } from "react-icons/fa";

const options = [
  {
    id: 1,
    label: "I want brightwheel for my center",
    icon: <FaSchool className="text-4xl text-[#4C5FD5]" />,
  },
  {
    id: 2,
    label: "My center already uses brightwheel",
    icon: <FaHome className="text-4xl text-[#4C5FD5]" />,
  },
  {
    id: 3,
    label: "I am a parent or guardian",
    icon: <FaUserFriends className="text-4xl text-[#4C5FD5]" />,
  },
];

export default function PricingBanner() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-[#5661D8] min-h-screen flex flex-col items-center justify-center px-4 py-12 text-white">
      <h1 className="text-5xl sm:text-4xl font-bold text-center max-w-2xl">
        Discover the #1 rated platform for early education  with our
        <span className="relative inline-block mx-2">
          <span className="text-white font-bold">best pricing</span>
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400 rounded-full" />
        </span>
        ever.
      </h1>

      <div className="bg-white text-black rounded-2xl shadow-lg mt-10 max-w-4xl w-full p-6 md:p-10">
        <h2 className="text-xl font-semibold text-center">
          We’ll need some info to customize your pricing.
        </h2>

        {/* Step indicator */}
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`h-1 w-8 rounded-full ${
                  step === 1 ? "bg-[#4C5FD5]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">1 of 5</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {options.map((option) => (
            <div
              key={option.id}
              className={`border rounded-xl p-6 flex flex-col items-center cursor-pointer transition hover:shadow-lg relative ${
                selected === option.id ? "border-[#4C5FD5] bg-[#F5F7FF]" : "border-gray-200"
              }`}
              onClick={() => setSelected(option.id)}
            >
              <div className="mb-4">
                {option.icon}
              </div>
              <p className="text-center font-medium text-sm sm:text-base">
                {option.label}
              </p>
              {selected === option.id && (
                <FaCheckCircle className="absolute top-2 right-2 text-[#4C5FD5]" size={20} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-[#FD5A5A] hover:bg-[#f74878] text-white font-semibold px-8 py-3 rounded-xl text-lg">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
