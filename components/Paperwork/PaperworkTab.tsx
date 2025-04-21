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
  const [activeTab, setActiveTab] = useState<string>("fillabledocuments");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "fillabledocuments", label: "Fillable documents" },
    { id: "documentrequests", label: "Document requests" },
    { id: "enrollmentcontracts", label: "Enrollment contracts" },
    { id: "digitalsharing", label: "Digital sharing" },
  ];

  const tabContent: TabContentCollection = {
    fillabledocuments: {
      title: "Make form completion easy for families",
      features: [
        "Create fillable PDFs and forms from Flowysis and share them directly with families—no downloads or external software necessary",
        "Add custom fields to ensure all important details are captured",
        "Pre-fill certain elements on documents, such as school-specific information, before sending to families",
        "Easily view form status, approve, request further changes, or delete a form ",
      ],

      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    documentrequests: {
      title: "Streamline document collection",
      features: [
        "Request key documents from families, such as immunization records and birth certificates, directly within Flowysis",
        "Reduce manual work by creating, sending, and tracking childcare forms in one place",
        "Provide families with downloadable PDFs that they can fill out and re-upload to Flowysis, eliminating the need for paper forms",
        "Search for a specific form, filter by status, or order by recent activity or name",
      ],
      image: "/children.jpg",
    },
    enrollmentcontracts: {
      title: "Simplify your enrollment process",
      features: [
        "Increase enrollment by giving families an easy way to apply online",
        "Customize your enrollment contracts and collect signatures digitally",
        "Set required fields in forms to eliminate incomplete paperwork",
        "Manage your admissions digitally without pen and paper",
      ],
      image: "/children.jpg",
    },
    digitalsharing: {
      title: "Share childcare forms quickly and easily",
      features: [
        "Send forms directly to families’ Flowysis accounts and notify them via email",
        "Share forms with families via a direct link, perfect for email communications or added to your program's website.",
        "Reshare the same form with families multiple times",
        "Streamline your admissions process by enabling families to create a profile for their child, allowing you to easily add them to your waitlist",
      ],

      image: "/children.jpg",
    },
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Stay organized with Flowysis’s childcare forms
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
