"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

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
  const [activeTab, setActiveTab] = useState<string>("ownersanddirectors");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    {
      id: "ownersanddirectors",
      label: "Owners & directors",
      link: "/owners-directors",
    },
    {
      id: "teachersandstaff",
      label: "Teachers & staff",
      link: "/learning",
    },
    {
      id: "familiesandparents",
      label: "Families & parents",
      link: "/communication",
    },
  ];

  const tabContent: TabContentCollection = {
    ownersanddirectors: {
      title: "Manage your program from your mobile phone",
      features: [
        "Access business-critical information from your phone, even when you’re not near your computer",
        "Easily engage with families using real-time messages and grant select staff the same access",
        "Stay compliant with contactless check-ins, staff-to-child ratio monitoring, health checks, and sleep checks",
      ],
      testimonial: {
        title: "Cally B, Assistant Director at MBCC Journey Birmingham, AL",
        text: `We chose flowysis when we were evaluating different tools because it integrates billing, admissions, and a great visual experience for families. It’s awesome that it’s an all-in-one system.`,
        image: "/mba.jpg",
      },
      image: "/children.jpg",
    },
    teachersandstaff: {
      title: "Reduce your workload, increase efficiency",
      features: [
        "Access lesson plans and record observations with a mobile device",
        "Keep families updated on their child's development with progress reports",
        "Add Experience Curriculum to enhance program quality with digital lessons and hands-on learning materials",
      ],
      testimonial: {
        title: "Cally B, Assistant Director at MBCC Journey Birmingham, AL",
        text: `We chose flowysis when we were evaluating different tools because it integrates billing, admissions, and a great visual experience for families. It’s awesome that it’s an all-in-one system.`,
        image: "/mba.jpg",
      },
      image: "/children.jpg",
    },
    familiesandparents: {
      title: "Share more memorable moments with families",
      features: [
        "Get insight into child's day with real-time updates using photos or videos",
        "Communicate instantly with staff and admins via in-app messaging",
        "Seamless and secure payments through the mobile app",
      ],
      testimonial: {
        title: "Cally B, Assistant Director at MBCC Journey Birmingham, AL",
        text: `We chose flowysis when we were evaluating different tools because it integrates billing, admissions, and a great visual experience for families. It’s awesome that it’s an all-in-one system.`,
        image: "/mba.jpg",
      },
      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
  };

  // Function to handle navigation on "Learn more" click
  const handleLearnMore = () => {
    const activeTabData = tabs.find((tab) => tab.id === activeTab);
    if (activeTabData) {
      router.push(activeTabData.link);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-20 font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Automate and save time with Flowysis
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
                    <div className="w-2 h-2 mt-2.5 bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="ml-1 text-xl text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-md text-base transition-colors duration-300"
              onClick={handleLearnMore} // Add onClick handler
            >
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
