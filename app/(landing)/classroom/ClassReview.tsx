// TestimonialSection.jsx
import React from "react";

const ClassReview = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Manage your preschool classroom with ease
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
            Flowysis helps me manage every aspect of our program from signing
            in and out to billing to maintaining relationships with families. I
            love that it’s all in one system and centralized.
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

export default ClassReview;
