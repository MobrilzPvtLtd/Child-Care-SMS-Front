import React from 'react';
import { Edit, Video, AlertTriangle, CheckCircle, Coffee, FileText } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-indigo-500 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-indigo-500 mb-2">{title}</h3>
      <div className="text-gray-600 text-base">{description}</div>
    </div>
  );
};

interface DailyActivityReportProps {
  onRequestDemo?: () => void;
}

const DailyActivityReport: React.FC<DailyActivityReportProps> = ({ onRequestDemo }) => {
  const handleRequestDemo = () => {
    if (onRequestDemo) {
      onRequestDemo();
    } else {
      console.log("Demo requested");
    }
  };

  const features = [
    {
      icon: <Edit className="text-white" size={24} />,
      title: "Digital daily sheets",
      description: (
        <>
          Automate <span className="text-indigo-500 font-medium cursor-pointer">daily reports</span> with 
          activities, notes, photos, and videos for each student.
        </>
      )
    },
    {
      icon: <Video className="text-white" size={24} />,
      title: "Photos & videos",
      description: (
        <>
          Capture learning milestones and memorable moments, and share them with families.
        </>
      )
    },
    {
      icon: <AlertTriangle className="text-white" size={24} />,
      title: "Incident reports",
      description: (
        <>
          <span className="text-indigo-500 font-medium cursor-pointer">Report and track incidents throughout the day</span> to include 
          in digital daily reports.
        </>
      )
    },
    {
      icon: <CheckCircle className="text-white" size={24} />,
      title: "Health checks",
      description: (
        <>
          <span className="text-indigo-500 font-medium cursor-pointer">Monitor student and staff health</span> by logging 
          temperatures or <span className="text-indigo-500 font-medium cursor-pointer">illness symptoms</span>.
        </>
      )
    },
    {
      icon: <Coffee className="text-white" size={24} />,
      title: "Menus & food",
      description: (
        <>
          Create detailed food menus, log and track meals, and 
          <span className="text-indigo-500 font-medium cursor-pointer"> simplify CACFP reporting and reimbursement</span>.
        </>
      )
    },
    {
      icon: <FileText className="text-white" size={24} />,
      title: "Activity reports",
      description: (
        <>
          Run reports to monitor activity for a student, classroom, or your entire center.
        </>
      )
    }
  ];

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-12">Daily Activity Report</h2>
        
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

export default DailyActivityReport;