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
  const [activeTab, setActiveTab] = useState<string>("staffschedules");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "staffschedules", label: "Staff schedules" },
    { id: "staffcheck", label: "Staff check-in" },
    { id: "timecards", label: "Timecards" }, 
    { id: "staffmessaging", label: "Admin-staff messaging " },
  ];

  const tabContent: TabContentCollection = {
    staffschedules: {
      title: "Streamline staff schedules",
      features: [
        "Simplify shift scheduling, vacation requests, and substitutions with our user-friendly platform",
        "Seamlessly toggle between day and week views, making it easy to assess your center's scheduling needs",
        "Easily schedule and track absences for both students and staff, helping to maintain ratio compliance",
        "Modify schedules quickly, with options to edit or delete either single instances or entire schedules",
      ],

      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    staffcheck: {
      title: "Manage staff attendance",
      features: [
        "Streamline staff check-ins using kiosk, attendance mode, or QR codes",
        "Maintain accurate payroll hours and room ratios",
        "Prevent common check-in errors with our automated check-out feature",
        "Choose to enable or disable staff check-ins from any device, giving you added control over attendance tracking", 
      ], 
      image: "/children.jpg",
    },
    timecards: {
      title: "Track employee hours accurately",
      features: [
        "Easily create and manage employee timecards from the web or mobile platform",
        "Review, edit, and approve all staff timecards in one place",
        "Send staff hours directly to Gusto with our seamless payroll integration",
        "Use dynamic filters to quickly locate and edit any staff timecard",
        "Track paid and unpaid time off for all staff"
      ],

      image: "/children.jpg",
    }, 
    staffmessaging: {
      title: "Communicate staff schedules clearly",
      features: [
        "Message staff about schedule changes in real-time, ensuring everyone stays informed and organized",
        "Tailor schedules for individual staff members or groups",
        "Instantly record staff absences due to PTO or sick leave, enabling transparent communication and planning for adequate coverage",
        "View schedule reports to gain valuable insights into staffing needs and attendance gaps",
      ], 
      image: "/children.jpg",
    },
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Explore these key billing and payment features
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
