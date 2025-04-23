import React from "react";
import { MessageCircle, Users, Bell, Phone } from "lucide-react";

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
          <MessageCircle className="text-white" size={24} />
        </div>
      ),
      title: "Real-time messaging",
      description: "Communicate instantly with families and staff. Send messages directly from the app or web platform.",
    },
    {
      icon: (
        <div className="bg-purple-500 p-4 rounded-full">
          <Users className="text-white" size={24} />
        </div>
      ),
      title: "Easier staff communication",
      description: "Enable select staff to message families quickly and easily. Offer real-time support to your staff and respond to questions instantly.",
    },
    {
      icon: (
        <div className="bg-teal-500 p-4 rounded-full">
          <Bell className="text-white" size={24} />
        </div>
      ),
      title: "SMS alerts and newsletters",
      description: "Send SMS alerts, reminders, or newsletters. Communicate with an individual family, a whole classroom, or the entire program.",
    },
    {
      icon: (
        <div className="bg-pink-500 p-4 rounded-full">
          <Phone className="text-white" size={24} />
        </div>
      ),
      title: "Centralized communication",
      description: "Simplify family communication. Make it easy for families to get in touch with you and access messages in one place.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        How Flowysis streamlines communication
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
