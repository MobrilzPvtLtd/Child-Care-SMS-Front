import React from "react";
import { Clock, FileText, Users, Settings } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-2xl my-4">{title}</h3>
      <p className="text-slate-500 font-base text-lg my-1 flex-grow">
        {description}
      </p>
    </div>
  );
};

const Review: React.FC = () => {
  const features = [
    {
      icon: (
        <div className="bg-blue-400 p-4 rounded-full">
          <FileText className="text-white" size={24} />
        </div>
      ),
      title: "Simple form creation",
      description: "Reduce manual work. Use preset sections or custom fields to collect required information.",
    },
    {
      icon: (
        <div className="bg-purple-500 p-4 rounded-full">
          <Clock className="text-white" size={24} />
        </div>
      ),
      title: "Easy document tracking",
      description: "Stay organized and increase efficiency. Track form status from one central dashboard.",
    },
    {
      icon: (
        <div className="bg-teal-500 p-4 rounded-full">
          <Users className="text-white" size={24} />
        </div>
      ),
      title: "Seamless family experience",
      description: "Share digital forms with families via invite or direct link. Enable families to access, complete, and sign forms from the mobile app.",
    },
    {
      icon: (
        <div className="bg-pink-500 p-4 rounded-full">
          <Settings className="text-white" size={24} />
        </div>
      ),
      title: "Tailored to your program",
      description: "Customize form templates to meet your needs. Collect key information from both existing and prospective families.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto pt-4 pb-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Why Flowysis is #1 for childcare forms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
