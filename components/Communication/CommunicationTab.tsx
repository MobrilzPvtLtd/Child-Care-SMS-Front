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
  const [activeTab, setActiveTab] = useState<string>("familymessaging");
  const router = useRouter(); // Initialize useRouter

  const tabs: TabData[] = [
    { id: "familymessaging", label: "Family messaging" },
    { id: "staffmessaging", label: "Staff messaging" },
    { id: "studentactivityfeed", label: "Student activity feed" },
    { id: "smsalerts", label: "SMS alerts" },
    { id: "newsletters", label: "Newsletters" },
  ];

  const tabContent: TabContentCollection = {
    familymessaging: {
      title: "Brightwheel's all-in-one childcare software allows you to:",
      features: [
        "Quickly set up billing, create billing plans for multiple students, and automate invoicing tasks.",
        "Specify payment amounts across multiple payers and enable automatic payment notifications.",
        "Centralize tracking with a complete view of your finances across agency and family payers.",
        "Access reports and billing data to see balances, deposits, transactions, revenue, and more.",
      ],

      content: "Manage your childcare center with our all-in-one solution.",
      image: "/children.jpg",
    },
    billing: {
      title: "Make billing easier for you and your families",
      features: [
        "Flexible billing plans: Easily edit a billing plan, set plans to recur on a regular basis, add discounts, and divvy up charges between payers.",
        "Convenient one-time charges: Quickly bill families for one-time fees and send invoices immediately or schedule them for a future date.",
        "Effortless attendance-based invoicing: Charge accounts based on check-in records.",
        "Protect your business: Your information is protected using best-in-class security and compliance standards.",
        "Less tax work: We notify families when their tax statements are ready for self-serve access. You don’t have to do a thing!",
      ],

      image: "/children.jpg",
    },
    payments: {
      title: "Conveniently manage your program’s payments online",
      features: [
        "Offer multiple payment methods: Payers can choose preferred payment methods, from ACH bank transfers to debit and credit cards.",
        "Autopay: Invite families to enroll in autopay to ensure payments are submitted on time, and families never worry about late fees.",
        "Automated payment alerts: Know immediately when tuition payments with a credit or debit card failed.",
        "NEW: For Canadian schools, you can now accept online payments via credit/debit card or PADs and receive them directly in your deposit account.",
      ],

      image: "/children.jpg",
    },
    tracking: {
      title: "Track childcare payments end-to-end",
      features: [
        "Customizable Billing Dashboard: Stay informed with a real time snapshot of account balances, payments & cash flow.",
        "Save time with subsidy management: Set up recurring bill plans, log agency payments, and waive balances.",
        "Fast deposits: Funds are deposited into your account as soon as the next business day if the payment is submitted by 7 pm ET.",
      ],

      image: "/children.jpg",
    },
    reporting: {
      title: "Offer administrators full access to reports & data",
      features: [
        "Centralize record keeping: Keep track of your balances, payments, and cash flow in one place.",
        "Instant statements: View, download, and print billing and tax statements in seconds.",
        "Integrate with Quickbooks: Easily transfer your billing data into Quickbooks Online.",
        "Individualized Payment & Credit Reports: Access payment and credit information for each individual student.",
      ],

      image: "/children.jpg",
    },
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Build quality connections with families and staff
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
