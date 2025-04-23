import React from 'react';
import { MessageCircle, Users, Camera, AlertTriangle, Bell, Calendar } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-400 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-blue-500 mb-2">{title}</h3>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  );
};

interface CommunicationFeaturesProps {
  onRequestDemo?: () => void;
}

const Communication: React.FC<CommunicationFeaturesProps> = ({ onRequestDemo }) => {
  const handleRequestDemo = () => {
    if (onRequestDemo) {
      onRequestDemo();
    } else {
      console.log("Demo requested");
    }
  };

  const features = [
    {
      icon: <MessageCircle className="text-white" size={24} />,
      title: "Family engagement",
      description: (
        <>
          Easily engage and build trust with families, and message everyone through the{' '}
          <span className="text-blue-500 font-medium cursor-pointer">communication app</span>.
        </>
      )
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Staff messaging",
      description: (
        <>
          Send messages to all staff members or a classroom, and have staff quickly respond directly through the app.
        </>
      )
    },
    {
      icon: <Camera className="text-white" size={24} />,
      title: "Photos & videos",
      description: (
        <>
          Share learning milestones and deliver memorable moments right to parents' phones or on the web.
        </>
      )
    },
    {
      icon: <AlertTriangle className="text-white" size={24} />,
      title: "Emergency alerts",
      description: (
        <>
          Easily send alerts - including SMS and mobile messages.
        </>
      )
    },
    {
      icon: <Bell className="text-white" size={24} />,
      title: "Reminders",
      description: (
        <>
          Send quick reminders that include a date and a time.
        </>
      )
    },
    {
      icon: <Calendar className="text-white" size={24} />,
      title: "Calendar",
      description: (
        <>
          Schedule events and activities, and share them with families and staff.
        </>
      )
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-12">Communication</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mb-12">
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

export default Communication;