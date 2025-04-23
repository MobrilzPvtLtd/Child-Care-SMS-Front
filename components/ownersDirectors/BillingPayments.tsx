import React from 'react';
import { DollarSign, Calendar, FileText, Database, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-orange-400 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-orange-500 mb-2">{title}</h3>
      <div className="text-gray-600 text-base">{description}</div>
    </div>
  );
};

interface BillingPaymentsProps {
  onRequestDemo?: () => void;
}

const BillingPayments: React.FC<BillingPaymentsProps> = ({ onRequestDemo }) => {
  const handleRequestDemo = () => {
    if (onRequestDemo) {
      onRequestDemo();
    } else {
      console.log("Demo requested");
    }
  };

  const features = [
    {
      icon: <DollarSign className="text-white" size={28} />,
      title: "Online payments",
      description: (
        <>
          Offer families a <span className="text-orange-500 font-medium">convenient and secure way to pay</span> with the option to divvy up charges between payers.
        </>
      )
    },
    {
      icon: <svg className="text-white w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 15L9 9M9 15L15 9" />
        <circle cx="12" cy="12" r="9" />
      </svg>,
      title: "Invoices & autopay",
      description: (
        <>
          <span className="text-orange-500 font-medium">Set up recurring invoices</span> and payment reminders once. Flowysis will automate the rest and <span className="text-orange-500 font-medium">send receipts</span>.
        </>
      )
    },
    {
      icon: <Calendar className="text-white" size={28} />,
      title: "Less tax work",
      description: (
        <>
          We notify families when their tax statements are ready for self-serve access. You don't have to do a thing!
        </>
      )
    },
    {
      icon: <FileText className="text-white" size={28} />,
      title: "Custom billing reports",
      description: (
        <>
          Simple yet powerful reporting to easily keep track of payments owed and received.
        </>
      )
    },
    {
      icon: <Database className="text-white" size={28} />,
      title: "Subsidy management",
      description: (
        <>
          Save time tracking and reconciling subsidy funds across multiple agencies.
        </>
      )
    },
    {
      icon: <Clock className="text-white" size={28} />,
      title: "Next-day deposits",
      description: (
        <>
          Get paid on time with the fastest deposit turnaround time in the industry.
        </>
      )
    }
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-12">Billing & Payments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleRequestDemo}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Request a demo of these features
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingPayments;