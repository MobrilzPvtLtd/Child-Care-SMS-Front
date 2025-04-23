import React from "react";
import { Clock, FileCheck, Users, Database } from "lucide-react";

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
          <Users className="text-white" size={24} />
        </div>
      ),
      title: "Increase enrollment",
      description: "Make it easy for prospective families to submit an application online.",
    },
    {
      icon: (
        <div className="bg-purple-500 p-4 rounded-full">
          <FileCheck className="text-white" size={24} />
        </div>
      ),
      title: "Collect required documents",
      description: "Create custom forms for families to complete and sign digitally.",
    },
    {
      icon: (
        <div className="bg-teal-500 p-4 rounded-full">
          <Clock className="text-white" size={24} />
        </div>
      ),
      title: "Manage your waitlist with ease",
      description: "Automatically admit new students to your program.",
    },
    {
      icon: (
        <div className="bg-pink-500 p-4 rounded-full">
          <Database className="text-white" size={24} />
        </div>
      ),
      title: "Eliminate manual work",
      description: "Track enrollment information in one central dashboard.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto pt-4 pb-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Preschool enrollment software that saves you time
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
