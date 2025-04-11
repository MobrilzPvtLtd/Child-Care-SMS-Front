"use client";
import { useState } from "react";

interface TabData {
  id: string;
  label: string;
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
  const [activeTab, setActiveTab] = useState<string>("overview");

  const tabs: TabData[] = [
    { id: "overview", label: "Overview" },
    { id: "billing", label: "Billing & finances" },
    { id: "communication", label: "Communication" },
    { id: "learning", label: "Learning" },
    { id: "childcare", label: "Childcare management" },
  ];

  const tabContent: TabContentCollection = {
    overview: {
      title: "All the essentials in one integrated app",
      features: [
        "Automate billing and payments",
        "Send real-time messages to staff and families",
        "Efficiently run your program with check-in, admissions, reports, and multi-site management",
        "Support educators in and out of the classroom with curriculum, lesson plans, and observations",
        "Automatically sync time tracking with payroll for easy, accurate payroll processing",
      ],
      testimonial: {
        title: "Cally B, Assistant Director at MBCC Journey Birmingham, AL",
        text: `We chose flowysis when we were evaluating different tools because it integrates billing, admissions, and a great visual experience for families. It’s awesome that it’s an all-in-one system.`,
        image: "/mba.jpg",
      },
      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    billing: {
      title: "Simplify billing and get paid faster",
      features: [
        "Easily set up and automate billing",
        "Give families a way to securely pay tuition online",
        "Track subsidy payments across multiple agencies",
        "Stay on top of your finances and year-end taxes",
        "Expense management",
      ],
      testimonial: {
        title: "Cally B, Assistant Director at MBCC Journey Birmingham, AL",
        text: `We chose flowysis when we were evaluating different tools because it integrates billing, admissions, and a great visual experience for families. It’s awesome that it’s an all-in-one system.`,
        image: "/mba.jpg",
      },
      image: "/children.jpg",
    },
    communication: {
      title: "Stay connected with families",
      features: [
        "Send updates and photos to parents",
        "Real-time messaging",
        "Event reminders and notifications",
      ],
      testimonial: {
        title: "Cally B, Assistant Director at MBCC Journey Birmingham, AL",
        text: `We chose flowysis when we were evaluating different tools because it integrates billing, admissions, and a great visual experience for families. It’s awesome that it’s an all-in-one system.`,
        image: "/mba.jpg",
      },
      image: "/children.jpg",
    },
    learning: {
      title: "Support child development",
      features: [
        "Save time with tools to add, customize, and distribute your own curriculum",
        " Add Experience Curriculum to enhance program quality with digital lessons and hands-on learning materials",
        "Make it easier for staff to observe and share a child’s developmental benchmarks with families",
      ],
      testimonial: {
        title: "Cally B, Assistant Director at MBCC Journey Birmingham, AL",
        text: `We choseflowysis when we were evaluating different tools because it integrates billing, admissions, and a great visual experience for families. It’s awesome that it’s an all-in-one system.`,
        image: "/mba.jpg",
      },
      image: "/children.jpg",
    },
    childcare: {
      title: "Efficient childcare management",
      features: [
        "Centralize family and staff information",
        "Manage your admissions process and waitlist online",
        "Stay compliant with digital check-in, health checks, and room ratio tracking and run reports quickly",
        "Fillable PDF forms",
      ],
      testimonial: {
        title: "Cally B, Assistant Director at MBCC Journey Birmingham, AL",
        text: `We chose flowysis when we were evaluating different tools because it integrates billing, admissions, and a great visual experience for families. It’s awesome that it’s an all-in-one system.`,
        image: "/tech.jpg",
      },
      image: "/children.jpg",
    },
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Your complete preschool & childcare software system
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
          <div className="space-y-6 p-10">
            <h2 className="text-2xl font-bold text-gray-800">
              {tabContent[activeTab].title}
            </h2>
            <ul className="space-y-3">
              {tabContent[activeTab].features?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-500">
                    <div className="w-2 h-2 mt-2.5 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="ml-1 text-lg text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-md text-base transition-colors duration-300">
              Learn more
            </button>
            {tabContent[activeTab].testimonial && (
              <div className="flex items-start gap-4 p-5 bg-white border border-blue-100 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <img
                    src={
                      tabContent[activeTab].testimonial?.image ||
                      "/api/placeholder/80/80"
                    }
                    alt="Testimonial author"
                    className="w-20 h-20  rounded-full object-cover border-2 border-gray-100"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium text-slate-600">
                    &quot;{tabContent[activeTab].testimonial?.text}&quot;
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
              className="w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
