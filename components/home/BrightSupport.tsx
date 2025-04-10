// BrightSupport.tsx
import React from 'react';

const BrightSupport = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-pink-500 mb-2">#1</h2>
          <p className="text-gray-700">Rated all-in-one childcare solution</p>
        </div>
        
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-orange-400 mb-2">20hrs</h2>
          <p className="text-gray-700">Saved each month on administrative tasks</p>
        </div>
        
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-purple-500 mb-2">95%</h2>
          <p className="text-gray-700">Customer satisfaction</p>
        </div>
        
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-teal-500 mb-2">99.9%</h2>
          <p className="text-gray-700">Uptime and 24x7 monitoring<br />(we don't crash)</p>
        </div>
      </div>
      
      {/* Support Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 pr-0 lg:pr-8">
            <div className="text-purple-600 font-semibold mb-2">Brightwheel support</div>
            <div className="h-1 w-32 bg-purple-600 mb-6"></div>
            
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Partnering for your success.</h2>
            
            <ul className="space-y-4">
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
                <p>Dedicated account specialists that understand your program and your needs</p>
              </li>
              <li className="flex items-start">
                <div className="text-purple-600 mr-2 mt-1">•</div>
                <p>24/7 access to free resources: Chatbot, Help Center articles, YouTube tutorials, and social communities</p>
              </li>
            </ul>
            
            <button className="mt-6 text-purple-600 font-medium">Learn more</button>
          </div>
          
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img 
              src="/support.jpg" 
              alt="Customer support specialist with headset" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrightSupport;