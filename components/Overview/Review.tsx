import React from "react";
import { Clock, Users, Heart, MessageSquare } from "lucide-react";

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
      <h3 className="font-semibold text-2xl my-4 text-gray-800">{title}</h3>
      <p className="text-slate-500 font-base text-lg my-1 flex-grow">{description}</p>
    </div>
  );
};

const Review: React.FC = () => {
  const features = [
    {
      icon: (
        <div className="bg-blue-400 p-4 rounded-full">
          <Clock className="text-white" size={24} />
        </div>
      ),
      title: "Save up to 20 hours per month",
      description: "Cut down on admin tasks and manage all areas of your program with Flowysis.",
    },
    {
      icon: (
        <div className="bg-teal-500 p-4 rounded-full">
          <Users className="text-white" size={24} />
        </div>
      ),
      title: "Get paid without chasing parents",
      description: "Enable your staff to easily communicate with families, administrators, and other staff.",
    },
    {
      icon: (
        <div className="bg-purple-500 p-4 rounded-full">
          <MessageSquare className="text-white" size={24} />
        </div>
      ),
      title: "Build quality connections",
      description: "Enable your staff to easily communicate with families, administrators, and other staff.",
    },
    {
      icon: (
        <div className="bg-pink-500 p-4 rounded-full">
          <Heart className="text-white" size={24} />
        </div>
      ),
      title: "Increase staff retention",
      description: "2 out of 3 teachers prefer to work at a program that uses Flowysis.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Why Flowysis is the #1 software solution for childcare providers
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
