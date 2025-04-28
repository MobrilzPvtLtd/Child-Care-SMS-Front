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
  const [activeTab, setActiveTab] = useState<string>("attendance");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "attendance", label: "Attendance", link: "/attendance" },
    { id: "paperwork", label: "Paperwork", link: "/paperwork" },
    { id: "enrollment", label: "Enrollment", link: "/enrollment" },
    { id: "staffmanagement", label: "Staff management", link: "/staff" },
    { id: "classroommanagement", label: "Classroom management", link: "/classroom" },
  ];

  const tabContent: TabContentCollection = {
    attendance: {
      title: "Simplify your check-in process",
      features: [
        "Replace paper sign-in sheets with digital quick scan check-in and check-out for students and staff",
        "Track attendance throughout the day, ensuring proper staffing and ratio compliance",
        "Pull custom attendance reports and organize data in a way that best fits your program",
        "Integrate attendance data with billing and payroll in one software",
      ],

      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    paperwork: {
      title: "Organize forms and documents",
      features: [
        "Create fillable PDFs and customize form templates to meet your business needs",
        "Share critical documents with families directly in Flowysis and collect digital signatures",
        "Manage form status or request changes from one central dashboard",
        "Easily distribute handbooks, policies, or calendars to specific rooms or your entire program",
      ],

      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    enrollment: {
      title: "Grow your enrollment",
      features: [
        "Increase enrollment by making it easy for families to apply online",
        "Manage your waitlist with ease by automatically enrolling incoming families to your program",
        "See your true enrollment with FTE reporting and make informed staffing and enrollment decisions to maximize your revenue",
        "Message prospective families directly from your admissions dashboard",
      ],
      image: "/children.jpg",
    },
    staffmanagement: {
      title: "Enhance your staff experience",
      features: [
        "Simplify staff schedule creation and communicate changes quickly",
        "Manage staff permissions and roles at multiple locations by utilizing Flowysis’s multi-site dashboard",
        "Access comprehensive profiles for each staff member, including contact information, certifications, and training",
        "Facilitate clear and direct communication with staff members via integrated messaging, enhancing collaboration",
      ],
      image: "/children.jpg",
    },
    classroommanagement: {
      title: "Improve your classroom management",
      features: [
        "Track room capacity and staff-to-child ratios in real-time to adhere to licensing requirements",
        "Record student contact, meal type, billing, and health information in digital student profiles",
        "Monitor each child’s developmental progress and log observations directly in the app",
        "Share classroom highlights and milestones instantly, keeping families engaged in their child's learning",
      ],
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
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Save time and streamline your operations with Flowysis
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
                  <span className="ml-1 text-lg text-gray-600">{feature}</span>
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
