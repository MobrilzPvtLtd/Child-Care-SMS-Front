import React from 'react';
import { 
  FaPlus,           // Font Awesome Plus
  FaTimes,          // Font Awesome XMark
  FaRegCalendarAlt, // Font Awesome Calendar
  FaChevronDown     // Font Awesome Chevron Down
} from 'react-icons/fa';


interface StatCardProps {
  count: number;
  label: string;
  bgColor: string;
  textColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ count, label, bgColor, textColor }) => {
  return (
    <div className={`rounded-lg p-6 flex flex-col items-center ${bgColor}`}>
      <span className={`text-6xl font-bold mb-2 ${textColor}`}>{count}</span>
      <span className="text-gray-500">{label}</span>
    </div>
  );
};

const AdmissionsDashboard: React.FC = () => {
  const stats = [
    { count: 0, label: 'Total Students', bgColor: 'bg-blue-50', textColor: 'text-blue-500' },
    { count: 0, label: 'Prospects', bgColor: 'bg-green-50', textColor: 'text-green-500' },
    { count: 0, label: 'Toured', bgColor: 'bg-amber-50', textColor: 'text-amber-500' },
    { count: 0, label: 'Applied', bgColor: 'bg-purple-50', textColor: 'text-purple-500' },
    { count: 0, label: 'Waitlist', bgColor: 'bg-pink-50', textColor: 'text-pink-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Admissions Dashboard</h1>
        <button className="flex items-center gap-2 bg-indigo-700 text-white px-4 py-2 rounded-md">
          <FaPlus className="h-5 w-5" />
          <span>New Student</span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard 
            key={index} 
            count={stat.count} 
            label={stat.label} 
            bgColor={stat.bgColor}
            textColor={stat.textColor}
          />
        ))}
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="relative">
          <div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
            <span className="text-gray-500">Search students...</span>
            <FaChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
            <span className="text-gray-500">Program</span>
            <FaChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between w-full border border-blue-300 rounded-md p-2 pl-4 bg-blue-50">
            <span className="text-blue-700">Student Status (5)</span>
            <FaTimes className="h-5 w-5 text-blue-700" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
            <span className="text-gray-500">From Desired Start Date</span>
            <FaRegCalendarAlt className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
            <span className="text-gray-500">To Desired Start Date</span>
            <FaRegCalendarAlt className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
            <span className="text-gray-500">Min Age</span>
            <FaChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
            <span className="text-gray-500">Max Age</span>
            <FaChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsDashboard;