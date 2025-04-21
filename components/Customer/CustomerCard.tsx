"use client";

import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    name: "Multi-site owner",
    message:
      "Multi-site owner loves the security and efficiency of brightwheel",
    location: "Shelton, CT",
    size: "350 children",
    image: "/images/common/person1.jpg",
  },
  {
    name: "Nonprofit director",
    message:
      "Nonprofit director believes brightwheel is well worth the investment",
    location: "Nashville, TN",
    size: "200 children",
    image: "/images/common/person2.jpg",
  },
  {
    name: "Seabrook Director",
    message:
      "Why brightwheel is a necessity for this preschool with 55 families",
    location: "Seabrook, TX",
    size: "75 children",
    image: "/images/common/person3.jpg",
  },
  {
    name: "Nonprofit director",
    message:
      "Nonprofit director believes brightwheel is well worth the investment",
    location: "Nashville, TN",
    size: "200 children",
    image: "/images/common/person2.jpg",
  },
  {
    name: "Seabrook Director",
    message:
      "Why brightwheel is a necessity for this preschool with 55 families",
    location: "Seabrook, TX",
    size: "75 children",
    image: "/images/common/person3.jpg",
  },
];

const CustomerCard = () => {
  return (
    <>
      <section className="py-20 px-6 md:px-12 bg-white text-center">
        {/* Filter Controls */}
        <div className=" flex flex-wrap justify-center gap-4 mb-12">
          <input
            type="text"
            placeholder="Search by Location"
            className="px-5 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 f transition w-60"
          />
          <input
            type="text"
            placeholder="Search by Program Size"
            className="px-5 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 f transition w-60"
          />
          <input
            type="text"
            placeholder="Search by Feature"
            className="px-5 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 f transition w-60"
          />
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col transition hover:shadow-2xl"
            >
              <div className="relative w-full h-72">
                <Image
                  src={t.image}
                  alt={t.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow">
                  <Play size={20} className="text-indigo-600" />
                </div>
              </div>

              <div className="p-6 text-left">
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                    {t.location}
                  </span>
                  <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                    {t.size}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t.message}
                </h3>

                <a
                  href="#"
                  className="text-indigo-600 font-medium text-sm flex items-center gap-1 mt-4 hover:underline"
                >
                  Read more <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8faff] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="flex-shrink-0 rounded-xl overflow-hidden w-full md:w-1/2">
            <img
              src="/images/common/person2.jpg" // Replace with your image path
              alt="Cally Boyers"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="text-left md:w-1/2">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              “Flowysis has been so easy to roll out. We started with parent
              communication and ended with billing. It has been a tremendous
              blessing to our school."
            </p>

            <div className="text-sm text-gray-800 font-semibold">
              Cally Boyers
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Assistant Director at MBCC Journey in Birmingham, AL
            </div>

            <a
              href="#"
              className="text-indigo-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              Read More →
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-white text-center">
        {/* Filter Controls */}
      

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials?.slice(0,3).map((t, index) => (
            <div
              key={index }
              className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col transition hover:shadow-2xl"
             >
              <div className="relative w-full h-72">
                <Image
                  src={t.image}
                  alt={t.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow">
                  <Play size={20} className="text-indigo-600" />
                </div>
              </div>

              <div className="p-6 text-left">
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                    {t.location}
                  </span>
                  <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                    {t.size}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t.message}
                </h3>

                <a
                  href="#"
                  className="text-indigo-600 font-medium text-sm flex items-center gap-1 mt-4 hover:underline"
                >
                  Read more <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomerCard;
