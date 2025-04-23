import React from 'react';
import { Users, Clock, CheckCircle, FileText, Star, Layers } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-yellow-400 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-yellow-500 mb-2">{title}</h3>
      <div className="text-gray-600 text-base">{description}</div>
    </div>
  );
};

interface CenterManagementProps {
  onRequestDemo?: () => void;
}

const CenterManagement: React.FC<CenterManagementProps> = ({ onRequestDemo }) => {
  const handleRequestDemo = () => {
    if (onRequestDemo) {
      onRequestDemo();
    } else {
      console.log("Demo requested");
    }
  };

  const features = [
    {
      icon: <FileText className="text-white" size={24} />,
      title: "Enrollment and admissions",
      description: (
        <>
          <span className="text-yellow-500 font-medium cursor-pointer">Create forms</span>, request 
          documents and e-signatures, and <span className="text-yellow-500 font-medium cursor-pointer">make enrollment and waitlist decisions</span> with ease.
        </>
      )
    },
    {
      icon: <Clock className="text-white" size={24} />,
      title: "Time tracking & payroll",
      description: (
        <>
          Track staff timecards and <span className="text-yellow-500 font-medium cursor-pointer">automatically sync time trackers with payroll</span> for easy, accurate payroll processing.
        </>
      )
    },
    {
      icon: <CheckCircle className="text-white" size={24} />,
      title: "Staff management",
      description: (
        <>
          <span className="text-yellow-500 font-medium cursor-pointer">Simplify staff scheduling</span>, 
          access staff profiles, and facilitate clear and direct communication via integrated messaging.
        </>
      )
    },
    {
      icon: <FileText className="text-white" size={24} />,
      title: "Classroom management",
      description: (
        <>
          Track student attendance and progress, and <span className="text-yellow-500 font-medium cursor-pointer">generate reports to gain insights into classroom trends</span>.
        </>
      )
    },
    {
      icon: <Star className="text-white" size={24} />,
      title: "Online records",
      description: (
        <>
          <span className="text-yellow-500 font-medium cursor-pointer">Access student, family, and staff records</span> anytime and from anywhere.
        </>
      )
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: "Multi-site management",
      description: (
        <>
          Manage staff permissions and roles and oversee student information across <span className="text-yellow-500 font-medium cursor-pointer">multiple schools or locations</span>.
        </>
      )
    }
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-12">Center Management</h2>
        
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

export default CenterManagement;