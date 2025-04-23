import React from "react";
import { DollarSign, MessageCircle, Zap, Shield } from "lucide-react";

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
        <div className="bg-teal-500 p-4 rounded-full">
          <DollarSign className="text-white" size={24} />
        </div>
      ),
      title: "Get paid on time, every time",
      description:
        "Enable families to view invoices, manage autopay, and much more, all on their phone.",
    },
    {
      icon: (
        <div className="bg-purple-500 p-4 rounded-full">
          <MessageCircle className="text-white" size={24} />
        </div>
      ),
      title: "Message families from your phone",
      description:
        "95% of admins and staff report that Flowysis improves communication with families.",
    },
    {
      icon: (
        <div className="bg-orange-400 p-4 rounded-full">
          <Zap className="text-white" size={24} />
        </div>
      ),
      title: "Boost productivity on the go",
      description:
        "Save up to 20 hrs per month on admin tasks with Flowysis's all-in-one solution.",
    },
    {
      icon: (
        <div className="bg-blue-400 p-4 rounded-full">
          <Shield className="text-white" size={24} />
        </div>
      ),
      title: "Keep data private and protected",
      description:
        "Enhance your account safety with 2FA, data encryption, and 24x7 fraud monitoring.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        All-in-one childcare management app
      </h1>

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
    </div>
  );
};

export default Review;
