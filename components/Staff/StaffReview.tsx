// TestimonialSection.jsx
import React from "react";

const StaffReview = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Your go-to for smart childcare staff schedules
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
            Revising the schedule takes less than 5 minutes and everyone is
            aware of what is going on, which makes for a seamless operation.
          </p>

          <div className="mt-8">
            <h3 className="font-bold text-lg text-gray-800">Alyssa D.</h3>
            <p className="text-gray-600">
              Executive Director of McNeilly Center for Children in Nashville,
              TN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffReview;
