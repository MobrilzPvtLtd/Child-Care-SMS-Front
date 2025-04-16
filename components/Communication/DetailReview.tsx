// TestimonialSection.jsx
import React from 'react';

const DetailReview = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
        The best childcare communication app
      </h1>
      
      <div className="flex flex-col md:flex-row items-center gap-8 te rounded-lg overflow-hidden">
        {/* Image container */}
        <div className="w-full md:w-1/2">
          <img 
            src="/mba.jpg" 
            alt="Childcare professional testimonial" 
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        
        {/* Testimonial content */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="text-6xl text-blue-400 font-serif mb-4">"</div>
          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
            Parent communication has drastically improved thanks to brightwheel. We've seen better 
            communication both from teachers to parents and parents to teachers, which has been 
            so nice to see.
          </p>
          
          <div className="mt-8">
            <h3 className="font-bold text-lg text-gray-800">Cally B.</h3>
            <p className="text-gray-600">Assistant Director of MBCC Journey in Birmingham, AL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReview;