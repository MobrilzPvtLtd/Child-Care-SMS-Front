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
  const [activeTab, setActiveTab] = useState<string>("enrollment"); 

  const tabs: TabData[] = [
    { id: "enrollment", label: "Enrollment" },
    { id: "contracts", label: "Contracts" },
    { id: "studentprofiles", label: "Student profiles" },
    { id: "admissionsdashboard", label: "Admissions dashboard" },
    { id: "waitlist", label: "Waitlist" },
  ];

  const tabContent: TabContentCollection = {
    enrollment: {
      title: "Simplify your enrollment process",
      features: [
        "Manage your admissions digitally without pen and paper",
        "Increase enrollment by giving families an easy way to apply online",
        "Customize your enrollment contracts and collect signatures digitally"
      ], 
      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    contracts: {
      title: "Create contracts and fillable documents",
      features: [
        "Upload tuition agreements or field trip permission forms and track submissions",
        "Set required fields in forms to eliminate incomplete paperwork",
        "Request files and documents from families such as immunization records, birth certificates, and more",
        "Send fillable PDF forms to families that can be filled out digitally",
      ], 
      image: "/children.jpg",
    },
    studentprofiles: {
      title: "Access student profiles from anywhere",
      features: [
        "Eliminate manual work by enabling families to create their child’s profile when applying",
        "Organize forms and records digitally in each student’s profile",
        "Track enrollment details to understand and project future enrollment",
        "Update student profiles quickly via Flowysis’s roster upload tool",
      ],

      image: "/children.jpg",
    },
    admissionsdashboard: {
      title: "Track enrollment information in one place",
      features: [
        "See your true enrollment at a glance and filter based on information in student profiles",
        "Track progress and make edits in your admissions pipeline",
        "Message individuals or all families directly from the admissions dashboard",
      ], 
      image: "/children.jpg",
    },
    waitlist: {
      title: "Keep your waitlist organized",
      features: [
        "Automatically enroll incoming families to your program",
        "Rank students on your waitlist by desired start date, program, age, or other desired criteria",
        "Easily message prospective families with waitlist updates",
        "Quickly search and sort prospective students",
      ],

      image: "/children.jpg",
    },
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Grow childcare enrollment with Flowysis
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
