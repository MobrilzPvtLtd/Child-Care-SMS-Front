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
  const [activeTab, setActiveTab] = useState<string>("activityreports");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "activityreports", label: "Activity reports" },
    { id: "studentactivityfeed", label: "Student activity feed" },
    { id: "Adminparentmessaging", label: "Admin-parent messaging" },
    { id: "Parentstaffmessaging", label: "Parent-staff messaging" },
    { id: "newsletters", label: "Newsletters" },
  ];

  const tabContent: TabContentCollection = {
    activityreports: {
      title: "Log activities quickly and easily",
      features: [
        "Choose from multiple activity types including food, nap, potty, meds, or health check",
        "Record actions for one, some, or all children when logging an activity",
        "Send activity reports to families at any time",
        "Customize what information is shared with families or kept internal for your records",
      ],

      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    studentactivityfeed: {
      title: "Keep families updated on their child’s day",
      features: [
        "Monitor students’ daily activities, updates, and learning milestones through the real-time feed available in the app and on the web",
        "Streamline communication with families by scheduling daily feed reports directly from the app",
        "Customize and filter the student's activity feed by date or activity type",
      ],

      image: "/children.jpg",
    },
    Adminparentmessaging: {
      title: "Improve communication with families",
      features: [
        "Craft messages with options to send to individual families, or whole program rooms, ensuring the right message gets to the right audiences",
        "Enhance your message with attachments like photos, videos, or pdf documents",
        "Review and filter all messages sent for easy tracking and management, with options to sort messages by unread or most recent",
      ],

      image: "/children.jpg",
    },
    Parentstaffmessaging: {
      title: "Enhance teacher-family relationships",
      features: [
        "Connect with every designated contact for each child, keeping them informed and engaged with their child’s learning",
        "Encourage two-way communication with specific message threads between teachers, administrators, and families",
        "Easily add attachments to your messages with the click of an icon",
        "Order and filter your messages for a streamlined communication experience",
      ],

      image: "/children.jpg",
    },
    newsletters: {
      title: "Create impactful newsletters fast",
      features: [
        "Customize your newsletters with photos and up to 30 different sections to engage your families",
        "Save draft newsletters and review later",
        "Duplicate previously sent newsletters to save time or to send to different recipients with minor edits",
        "View all your sent newsletters in the Message center or directly in message threads for easy tracking",
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
