import React from "react";
import { FaBookOpen } from 'react-icons/fa';

const resources = [
  {
    image: "/plan3.png",
    tags: ["Business", "Blog post"],
    title: "A 2024 Tax Guide for Childcare Providers",
    description:
      "Everything a childcare center needs to prepare for 2024 tax season.",
    cta: "Read Now",
  },
  {
    image: "/plan3.png",
    tags: ["Business", "Guide"],
    title:
      "Electronic Billing: Back-to-School Resources for Childcare Providers",
    description:
      "Efficient electronic billing and financial management is essential for the sustainability of any childcare business, and having the right resources can make a significant difference.",
    cta: "Read Now",
  },
  {
    image: "/plan3.png",
    tags: ["Flowysis", "Webinar"],
    title:
      "How to Manage Your Tuition Process with Ease: Intro to brightwheel Billing",
    description:
      "Learn how brightwheel billing can streamline your tuition process – no more spending long hours on billing.",
    cta: "Watch Now",
  },
];

export default function TrendingContent() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trending content
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Discover our most popular resources that are saving early education
          providers time and stress.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {resources.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white shadow-md hover:shadow-lg transition p-6 flex flex-col"
          >
            <img
              src={item.image}
              alt="resource thumbnail"
              className="rounded-xl h-48 object-cover w-full mb-4"
            />
            <div className="flex flex-wrap gap-2 mb-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 flex-1">{item.description}</p>
            <button className="mt-4 inline-flex items-center gap-2 text-indigo-700 font-medium border border-indigo-200 px-4 py-2 rounded-md hover:bg-indigo-50">
              {item.cta} <FaBookOpen className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
