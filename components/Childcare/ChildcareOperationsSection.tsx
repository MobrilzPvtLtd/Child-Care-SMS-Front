// ChildcareOperationsSection.jsx
import React from 'react';

const ChildcareOperationsSection = () => {
  return (
    <div className="bg-gray-200 mt-20 pt-6 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="w-full md:w-3/5">
            <p className="text-sm font-medium text-gray-800 mb-2">
              Early education resources
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Optimize your childcare center operations
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Practical tips to refresh your practices and optimize your operations:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-2 w-2 mt-1 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-2 text-gray-700">
                  Discover how to achieve your program goals with confidence
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-2 w-2 mt-1 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-2 text-gray-700">
                  Access top tips for stress-free childcare billing
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-2 w-2 mt-1 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-2 text-gray-700">
                  Learn how brightwheel can save you time and money by streamlining your operations
                </span>
              </li>
            </ul>
          </div>
          
          {/* Image and CTA */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative p-10">
              <img 
                src="/images/learn-img.jpeg" 
                alt="Childcare center operations template" 
                className="rounded-lg shadow-lg "
              />
            </div>
            
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-md transition-colors w-full md:w-auto text-center">
              Download template now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildcareOperationsSection;