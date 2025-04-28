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
  const [activeTab, setActiveTab] = useState<string>("SigninAndout");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "SigninAndout", label: "Sign-in and out " },
    { id: "attendancereports", label: "Attendance reports " },
    { id: "compliance", label: "Compliance" },
  ];

  const tabContent: TabContentCollection = {
    SigninAndout: {
      title: "Make sign-in and out as easy as 1-2-3",
      features: [
        "Quick scan check-in: Replace paper sign-in sheets with digital quick scan check-in and check-out for students and staff.",
        "Monitor attendance: Keep track of students during the day, moving them to different rooms or marking them as absent.",
        "Correct attendance records: Easily check and update current and historical attendance sheets to make sure they’re accurate.",
      ],

      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    attendancereports: {
      title: "Easily access attendance reports",
      features: [
        "Get a daily summary: Enable staff to easily pull an attendance report based on classroom and a child’s status.",
        "Pull reports quickly: Easily customize and access attendance reports that meet licensing requirements or your business needs.",
        "Keep records updated: Make sure attendance data is accurate, even if an attendance action is forgotten or missed.",
      ],

      image: "/children.jpg",
    },
    compliance: {
      title: "Seamlessly stay in compliance with room ratios and capacity",
      features: [
        "Easily access FTE reports: Pull full-time equivalent reports based on scheduled attendance to maximize enrollment capacity.",
        "Automatically calculate ratios: Get push notifications when you exceed maximum ratio to stay in compliance.",
        "Ensure smooth operation: Keep track of how many students are in each room in real-time to ensure proper staffing.",
      ],

      image: "/children.jpg",
    },
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Explore these key check-in and attendance tracking features
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
