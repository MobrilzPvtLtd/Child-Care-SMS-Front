// FamilyEngagementSection.jsx
import React from 'react';

const Template = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Text content */}
          <div className="w-full md:w-1/2">
            <p className="text-sm font-medium text-gray-800 mb-2">Early education resources</p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Promote family engagement at your center
            </h2>
            
            <p className="text-lg font-medium text-gray-800 mb-6">
              Build strong relationships with families in your program:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-2 w-2 mt-1 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-2 text-gray-700">
                  Send effective updates about everything from student activities to changing tuition rates
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-2 w-2 mt-1 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-2 text-gray-700">
                  Write newsletters that help families feel connected to your center
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-2 w-2 mt-1 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-2 text-gray-700">
                  Turn difficult conversations with parents into positive ones
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-2 w-2 mt-1 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-2 text-gray-700">
                  Use Flowysis to manage family relationships with confidence and ease
                </span>
              </li>
            </ul>
            
            
          </div>
          
          {/* Images */}
          <div className="w-full md:w-1/2 md:py-16 flex flex-col justify-center items-center relative">
 
              {/* First booklet image */}
              <div className=" ">
                <img 
                  src="banner-img.jpg" 
                  alt="Parent Communication Toolkit cover" 
                  className="w-48 md:w-76 shadow-lg rounded-md"
                />
              </div> 
              <div className="mt-10">
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Download free toolkit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;