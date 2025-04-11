"use client";
import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  title: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Pam M.",
    title: "Owner and Executive Director in Denver, CO",
    text: `We were the first ones to use Flowysis in our town. Now, every other center has adopted it as their software. It is an amazing all-in-one tool… Worth every penny!`,
    image: "/mba.jpg",
  },
  {
    name: "Melissa & Logan",
    title: "Owners of Happy Feet Academy in Ellensburg, WA",
    text: `Flowysis’s customer service is phenomenal. I receive quick answers, and I always tell people to write in to Support. They are so informative.`,
    image: "/tech.jpg",
  },
  {
    name: "Alyssa D.",
    title:
      "Executive Director at McNeilly Center for Children in Nashville, TN",
    text: `My staff love attending Flowysis’s webinars. They’re able to use the system to its full potential. I think we are using every single feature on the platform.`,
    image: "/ceo.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const visibleTestimonials = testimonials
    .slice(current, current + 3)
    .concat(
      testimonials.slice(0, Math.max(0, current + 3 - testimonials.length))
    );

  return (
    <section className="bg-gray-100 py-12 text-center mb-4">
      <h2 className="text-4xl font-semibold my-2 tracking-wide">
        What educators are saying
      </h2>
      <p className="text-base text-gray-600 mb-10">
        Read more testimonials in{" "}
        <a href="#" className="text-indigo-600 underline">
          customer stories
        </a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center h-full"
          >
            <FaQuoteLeft className="text-indigo-600 text-xl mb-4" />
            <p className="text-base text-slate-600 font-medium mb-4 text-center flex-grow">
              {testimonial.text}
            </p>
            <div className="mt-auto text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500 my-3 mx-auto"
              />
              <p className="text-base font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-base text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={prevSlide}
          className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-3"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-3"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
