import React from "react";
import {
  Shield,
  CheckCircle,
  Users,
  ClipboardList,
  UserCheck,
  Lock,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-teal-500 rounded-full p-4 mb-3">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-teal-500 font-medium mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Attendance: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-medium text-gray-800 mb-10">
          Attendance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* First row */}
          <FeatureCard
            icon={<CheckCircle size={24} />}
            title="Contactless check-in"
            description={
              <span>
                Check students and staff in with{" "}
                <span className="text-teal-500">
                  quick scan, e-signatures, or secure pin codes
                </span>
              </span>
            }
          />

          <FeatureCard
            icon={<Shield size={24} />}
            title="Health screens"
            description="Create custom questions and capture student/staff health information at check-in."
          />

          <FeatureCard
            icon={<Users size={24} />}
            title="Ratios & scheduling"
            description={
              <span>
                Stay in compliance and manage{" "}
                <span className="text-teal-500">
                  room ratios and daily schedules
                </span>{" "}
                in real-time.
              </span>
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Second row */}
          <FeatureCard
            icon={<ClipboardList size={24} />}
            title="Attendance reports"
            description="Run reports for licensing, billing, and management and customize to fit your needs."
          />

          <FeatureCard
            icon={<UserCheck size={24} />}
            title="Guardian management"
            description="Manage additional approved people for drop off or pick up."
          />

          <FeatureCard
            icon={<Shield size={24} />}
            title="Security"
            description="Keep all your data confidential and secure with brightwheel's enhanced account safety and 24×7 monitoring."
          />
        </div>

        <div className="text-center mt-8">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
            Request a demo of these features
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
