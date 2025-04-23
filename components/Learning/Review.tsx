import React from "react";
import { Clock, BookOpen, Award, Heart } from "lucide-react";

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
          <BookOpen className="text-white" size={24} />
        </div>
      ),
      title: "All-in-one education platform",
      description: "Access lessons, assessments, messaging, billing, admissions, and more",
    },
    {
      icon: (
        <div className="bg-purple-500 p-4 rounded-full">
          <Clock className="text-white" size={24} />
        </div>
      ),
      title: "Save educators hours every month",
      description: "Complete curriculum system with learning materials and digital lessons.",
    },
    {
      icon: (
        <div className="bg-teal-500 p-4 rounded-full">
          <Award className="text-white" size={24} />
        </div>
      ),
      title: "Enhance program quality",
      description: "Aligned to all 50 states' early learning standards and NAEYC.",
    },
    {
      icon: (
        <div className="bg-pink-500 p-4 rounded-full">
          <Heart className="text-white" size={24} />
        </div>
      ),
      title: "Support child development",
      description: "Make observations and share progress updates with families.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Why educators love Flowysis with Experience Curriculum
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
