import React from "react";
import { Clock, Users, DollarSign, BarChart } from "lucide-react";

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
      title: "Intuitive scheduling interface",
      description: "Create, adjust, and manage staff schedules with just a few clicks. Monitor room ratios and staggered schedules in real time.",
    },
    {
      icon: (
        <div className="bg-purple-500 p-4 rounded-full">
          <Users className="text-white" size={24} />
        </div>
      ),
      title: "Employee availability tracking",
      description: "Easily track staff availability and preferences, making it simple to assign shifts that accommodate everyone's needs.",
    },
    {
      icon: (
        <div className="bg-teal-500 p-4 rounded-full">
          <DollarSign className="text-white" size={24} />
        </div>
      ),
      title: "Seamless integration",
      description: "Sync time tracking and payroll with Flowysis's integration with Gusto. Manage staff schedules with the same software you use for billing and communication.",
    },
    {
      icon: (
        <div className="bg-pink-500 p-4 rounded-full">
          <BarChart className="text-white" size={24} />
        </div>
      ),
      title: "Customizable reporting",
      description: "Gain valuable insights into staffing patterns, attendance, and labor costs. Identify trends and optimize staffing levels to improve efficiency.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto pt-4 pb-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Why Flowysis is the #1 childcare staff scheduling software
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
