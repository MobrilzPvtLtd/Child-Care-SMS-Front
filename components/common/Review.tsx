import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  bgColor: string;
  title: string;
  description?: string;
}

interface ReviewProps {
  title: string;
  features: FeatureItem[];
  borderTop?: boolean;
  bgColor?: string;
}

const FeatureCard: React.FC<FeatureItem> = ({
  icon: Icon,
  bgColor,
  title,
  description
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className={`${bgColor} p-4 rounded-full mb-4`}>
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="font-semibold text-2xl my-4 text-gray-800">{title}</h3>
      {description && (
        <p className="text-slate-500 font-base text-lg my-1 flex-grow">
          {description}
        </p>
      )}
    </div>
  );
};

const Review: React.FC<ReviewProps> = ({ 
  title, 
  features, 
  borderTop = false,
  bgColor = "bg-gray-50"
}) => {
  return (
    <div className={`${bgColor}`}>
      <div className={` max-w-7xl mx-auto px-4 md:px-6 ${
      borderTop ? 'border-t border-gray-200 py-16' : 'py-16 '
    }`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;