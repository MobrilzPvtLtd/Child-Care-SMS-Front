"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

interface TabData {
  id: string;
  label: string;
  link?: string;
}

interface TestimonialData {
  title: string;
  text: string;
  image: string;
}

interface TabContentData {
  title: string;
  content?: string;
  features?: string[];
  testimonial?: TestimonialData;
  image: string;
}

interface TabContentCollection {
  [key: string]: TabContentData;
}

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview"); // Default active tab
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "overview", label: "Overview" },
    { id: "experiencecurriculum", label: "Experience Curriculum" },
    { id: "monthlykits", label: "Monthly kits" },
    { id: "assessments", label: "Assessments" },
    { id: "familysharing", label: "Family Sharing" },
  ];

  const tabContent: TabContentCollection = {
    overview: {
      title: "Your complete education companion",
      features: [
        "Access Experience Curriculum right from the Flowysis app",
        "Receive a monthly delivery of learning supplies",
        "Easily match the lessons in the app to the materials in the monthly curriculum kits",
      ],

      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    experiencecurriculum: {
      title: "Engaging learning experiences",
      features: [
        "Incorporates 35 research-based skills into playful games and discovery projects",
        "Flexible lesson plans for baby, toddler, and preschool age groups",
        "Easily match the lessons in the app to the materials in the monthly curriculum kits",
      ],

      image: "/children.jpg",
    },
    monthlykits: {
      title: "Engaging learning experiences",
      features: [
        "Incorporates 35 research-based skills into playful games and discovery projects",
        "Flexible lesson plans for baby, toddler, and preschool age groups",
        "Daily learning activities integrate social emotional, physical, cognitive learning and more",
      ],

      image: "/children.jpg",
    },
    assessments: {
      title: "Easy observations and progress tracking",
      features: [
        "Daily embedded assessment to monitor each child’s growth",
        "Assessments are designed for ages 0-5 years old",
        "Easily view and export a report summary of a child’s developmental benchmarks",
      ],

      image: "/children.jpg",
    },
    familysharing: {
      title: "Your complete education companion",
      features: [
        "Capture and share learning progress with photos in the Flowysis app",
        "Use preloaded notes for faster observation tracking and sharing",
        "Add observations to the customized daily reports that are emailed to families who opt-in", 
      ],

      image: "/children.jpg",
    },
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Build quality connections with families and staff
        </h1>
      </div>

      {/* Redesigned Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area with animation */}
      <div className="mt-8 transition-all duration-500 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-2 border-gray-100 rounded-xl shadow-lg">
          <div className="space-y-6 pb-28 p-10">
            <h2 className="text-2xl font-bold text-gray-800">
              {tabContent[activeTab].title}
            </h2>
            <ul className="space-y-3">
              {tabContent[activeTab].features?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-500">
                    <div className="w-2 h-2 mt-2.5 bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="ml-1 text-lg text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            {tabContent[activeTab].testimonial && (
              <div className="flex items-start gap-4 p-5 bg-white border border-blue-100 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <img
                    src={
                      tabContent[activeTab].testimonial?.image ||
                      "/api/placeholder/80/80"
                    }
                    alt="Testimonial author"
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium text-slate-600">
                    "{tabContent[activeTab].testimonial?.text}"
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-slate-500">
                      {tabContent[activeTab].testimonial?.title}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center border-s bg-gray-100 rounded-e-lg overflow-hidden p-2">
            <img
              src={tabContent[activeTab].image}
              alt="Tab visual"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
