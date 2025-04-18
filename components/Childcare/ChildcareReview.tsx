// TestimonialSection.jsx
import React from "react";

const ChildcareReview = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Simplify administrative tasks with all-in-one software
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
          <div className="text-6xl text-blue-400 font-serif ">"</div>
          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
            Flowysis keeps my day running smoothly. You know what is
            happening at your center every single day. It keeps things seamless
            so you have more time to focus on the things you want to focus on.
          </p>

          <div className="mt-8">
            <h3 className="font-bold text-lg text-gray-800">Alyssa D.</h3>
            <p className="text-gray-600">
            Executive Director of McNeilly Center for Children in Nashville, TN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildcareReview;
