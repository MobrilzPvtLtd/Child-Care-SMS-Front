// BrightSupport.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const BrightSupport = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-24 " ref={sectionRef}>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-pink-500 mb-2">#1</h2>
          <p className="text-gray-700">Rated all-in-one childcare solution</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-orange-400 mb-2">
            {isVisible && <CountUp start={0} end={20} duration={3} />}hrs
          </h2>
          <p className="text-gray-700">
            Saved each month on administrative tasks
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-purple-500 mb-2">
            {isVisible && <CountUp start={0} end={95} duration={3} />}%
          </h2>
          <p className="text-gray-700">Customer satisfaction</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-teal-500 mb-2">
            {isVisible && (
              <CountUp start={0} end={99.9} duration={3} decimals={1} />
            )}
            %{" "}
          </h2>
          <p className="text-gray-700">
            Uptime and 24x7 monitoring
            <br />
            (we don't crash)
          </p>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white rounded-lg shadow-md ">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 pr-0 lg:pr-8 p-10">
            <div className="text-purple-600 font-semibold mb-1">
              Flowysis support
            </div>
            <div className="h-1 w-32 bg-purple-600 mb-6"></div>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Partnering for your success.
            </h2>

            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <div className="text-purple-600 mr-2 mt-1">•</div>
                <p>Live chat support for you and your program</p>
              </li>
              <li className="flex items-start">
                <div className="text-purple-600 mr-2 mt-1">•</div>
                <p>Customized onboarding and seamless account set-up</p>
              </li>
              <li className="flex items-start">
                <div className="text-purple-600 mr-2 mt-1">•</div>
                <p>
                  Dedicated account specialists that understand your program and
                  your needs
                </p>
              </li>
              <li className="flex items-start">
                <div className="text-purple-600 mr-2 mt-1">•</div>
                <p>
                  24/7 access to free resources: Chatbot, Help Center articles,
                  YouTube tutorials, and social communities
                </p>
              </li>
            </ul>

            <button className=" text-purple-600 font-medium">
              Learn more
            </button>
          </div>

          <div className="lg:w-1/2  ">
            <img
              src="/support.jpg"
              alt="Customer support specialist with headset"
              className=" rounded-b-lg md:rounded-e-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrightSupport;
