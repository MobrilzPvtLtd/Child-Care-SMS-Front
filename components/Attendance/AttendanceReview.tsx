import React from "react";

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

const AttendanceReview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 pb-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
      Why attendance tracking is essential for your program
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">


        {/* Feature 2: Easy to use */}
        <FeatureCard
          icon={
            <div className="bg-blue-400 rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          }
          title="Safety and security"
          description="Quickly identify and address discrepancies, ensuring the safe accountability of all children and staff."
        />

        {/* Feature 3: Automatic billing */}
        <FeatureCard
          icon={
            <div className="bg-teal-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          }
          title="Staff management"
          description="Ensure accurate compensation based on staff attendance and streamline the payroll process."
        />

        {/* Feature 4: Quality connections */}
        <FeatureCard
          icon={
            <div className="bg-pink-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          }
          title="Regulation compliance"
          description="Demonstrate compliance with local licensing regulations on room ratios and capacities."
        />
        <FeatureCard
          icon={
            <div className="bg-blue-400 rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          }
          title="Billing and reporting"
          description="Provide a clear record for financial reporting and accountability with accurate tracking."
        />
      </div>
    </div>
  );
};

export default AttendanceReview;
