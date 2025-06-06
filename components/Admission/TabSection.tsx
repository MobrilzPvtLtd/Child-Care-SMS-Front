"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import AdmissionsDashboard from "./AdmissionDashboard";
import DashboardTable from "./DashboardTable";

import Program from "./Program";

interface TabData {
  id: string;
  label: string;
  link: string;
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
  const [activeTab, setActiveTab] = useState<string>("admission");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "admission", label: "Admission", link: "/overview" },
    { id: "programs", label: "Programs", link: "/programs" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "admission":
        return (
          <>
            <AdmissionsDashboard />
            <DashboardTable />
          </>
        );

      case "programs":
        return <Program />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto font-sans">
      <div className="flex justify-start mb-6 gap-8 bg-white border px-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex items-center transition-all duration-300"
          >
            {/* Show star icon only for admission tab */}
            {tab.id === "admission" && (
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-amber-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
            <button
              className={` py-4 text-base font-medium border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-gray-800 border-blue-600"
                  : "text-gray-700 border-transparent hover:border-blue-600"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>
      {/* Tab Content */}
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default TabSection;
