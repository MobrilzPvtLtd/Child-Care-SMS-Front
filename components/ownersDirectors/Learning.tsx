import React from 'react';
import { BookOpen, Building, Puzzle, Users, BarChart2, Share2 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-pink-500 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-pink-500 mb-2">{title}</h3>
      <div className="text-gray-600 text-base">{description}</div>
    </div>
  );
};

interface LearningFeaturesProps {
  onRequestDemo?: () => void;
}

const Learning: React.FC<LearningFeaturesProps> = ({ onRequestDemo }) => {
  const handleRequestDemo = () => {
    if (onRequestDemo) {
      onRequestDemo();
    } else {
      console.log("Demo requested");
    }
  };

  const features = [
    {
      icon: <BookOpen className="text-white" size={24} />,
      title: "Lesson Planning",
      description: (
        <>
          Add your own curriculum or upgrade to get <span className="text-pink-500 font-medium cursor-pointer">Experience Curriculum</span>, including digital lesson plans and hands-on learning materials.
        </>
      )
    },
    {
      icon: <Building className="text-white" size={24} />,
      title: "State learning & DRDP standards",
      description: (
        <>
          Benefit from pre-loaded <span className="text-pink-500 font-medium cursor-pointer">state learning standards</span> as well as DRDP standards.
        </>
      )
    },
    {
      icon: <Puzzle className="text-white" size={24} />,
      title: "Customized assets",
      description: (
        <>
          Customize your learning standards to meet the needs of your development framework.
        </>
      )
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Distance learning",
      description: (
        <>
          Share lesson plans with families to continue learning at home.
        </>
      )
    },
    {
      icon: <BarChart2 className="text-white" size={24} />,
      title: "Data rich reports",
      description: (
        <>
          Track and analyze student or classroom <span className="text-pink-500 font-medium cursor-pointer">progress with data-rich reports</span>.
        </>
      )
    },
    {
      icon: <Share2 className="text-white" size={24} />,
      title: "Sharing controls",
      description: (
        <>
          Share learning and development with staff and parents on your own schedule.
        </>
      )
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-12">Learning</h2>
        
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

export default Learning;