// components/ParentForm.tsx
import React from 'react';

const ParentForm: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Angled background */}
      <div className="absolute inset-0 bg-gray-300 transform -skew-y-2 origin-top-left scale-110 z-0"></div>
      
      {/* Content container */}
      <div className="relative z-10 py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Form header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              Invite your preschool or child care
            </h1>
            <p className="text-white text-sm md:text-base">
              If your center is not yet using Flowysis, we'll get in touch
            </p>
          </div>
          
          {/* Form */}
          <form className="space-y-4 shadow-lg bg-white p-6 rounded-lg">
            {/* Row 1 - Two inputs side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your child's center's name*" 
                className="w-full px-4 py-2 rounded-md text-gray-700"
                required
              />
              <input 
                type="text" 
                placeholder="Center Director's name*" 
                className="w-full px-4 py-2 rounded-md text-gray-700"
                required
              />
            </div>
            
            {/* Row 2 - Two inputs side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="email" 
                placeholder="The center's email*" 
                className="w-full px-4 py-2 rounded-md text-gray-700"
                required
              />
              <input 
                type="tel" 
                placeholder="The center's phone number*" 
                className="w-full px-4 py-2 rounded-md text-gray-700"
                required
              />
            </div>
            
            {/* Row 3 - Two dropdowns side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select 
                className="w-full px-4 py-2 rounded-md text-gray-700 appearance-none bg-white"
                required
              >
                <option value="" disabled selected>Number of students enrolled*</option>
                <option value="1-20">1-20</option>
                <option value="21-50">21-50</option>
                <option value="51-100">51-100</option>
                <option value="100+">100+</option>
              </select>
              <select 
                className="w-full px-4 py-2 rounded-md text-gray-700 appearance-none bg-white"
              >
                <option value="" disabled selected>Other</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            
            {/* Row 4 - Full width email input */}
            <div>
              <input 
                type="email" 
                placeholder="Your email*" 
                className="w-full px-4 py-2 rounded-md text-gray-700"
                required
              />
            </div>
            
            {/* Submit button */}
            <div className="flex justify-center mt-6">
              <button 
                type="submit" 
                className="px-8 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParentForm;