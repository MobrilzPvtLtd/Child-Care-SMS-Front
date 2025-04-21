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
  const [activeTab, setActiveTab] = useState<string>("roommanagement");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "roommanagement", label: "Room management" },
    { id: "studentprofiles", label: "Student profiles" },
    { id: "lessonplanning", label: "Lesson planning" },
    { id: "familyengagement", label: "Family engagement" },
    { id: "dailyschedules", label: "Daily schedules" },
  ];

  const tabContent: TabContentCollection = {
    roommanagement: {
      title: "Maximize your classroom time",
      features: [
        "Assign students to specific rooms, making it easy to plan activities and track attendance",
        "Streamline transitions by quickly moving children from one classroom or activity to another with a few taps on your device",
        "Set custom capacity limits and ratios for each room and check them at any time with real-time data",
        "Track student attendance from the app for one or multiple students at once",
      ], 
      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    studentprofiles: {
      title: "Organize student information",
      features: [
        "Document and track each child's unique milestones and development in a custom, digital profile.",
        "Easily record observations, notes, and assessments to inform lesson planning and family-teacher conferences",
        "Keep accurate records of attendance and behavior incidents, providing a comprehensive overview of each child's progress",
        "Generate attendance and learning reports to gain insights into classroom trends and outcomes",
      ],

      image: "/children.jpg",
    },
    lessonplanning: {
      title: "Save time on lesson planning",
      features: [
        "Create your own curriculum or upgrade to get Experience Curriculum directly in the app",
        "Use existing lesson plan templates to save time or add custom learning activities to lessons",
        "Quickly rearrange learning activities using the drag and drop feature and view the description and supplies needed",
        "Log student observations following a set of state standards or learning frameworks",
      ], 
      image: "/children.jpg",
    },
    familyengagement: {
      title: "Increase family involvement",
      features: [
        "Use messaging to build a strong, supportive network among families and staff at your center.",
        "Share classroom highlights and milestones instantly, keeping families engaged in their child's learning",
        "Enable families to stay informed with direct access to their child's profile through the brightwheel app",
        "Communicate confidentially with secure in-app messaging that safeguards family privacy",
      ],

      image: "/children.jpg",
    },
    dailyschedules: {
      title: "Simplify your daily routine",
      features: [
        "Develop comprehensive schedules encompassing all aspects of a child's day, including classroom activities, meals, and rest periods",
        "Cater to diverse scheduling requirements by offering part-time, full-time, and flexible attendance options",
        "Monitor anticipated or scheduled staff and student absences to effectively manage class capacities and ratios",
        "Use customizable templates for creating student schedules, streamlining your daily workflow",
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
