import React, { useState } from 'react';
import { ChevronDown, CreditCard, Repeat, Settings } from 'lucide-react';
import StudentDetail from './StudentDetails';

interface StudentCardProps {
  icon: React.ReactNode;
  title: string;
  percentage: number;
  description: string;
  actionText: string;
  onAction: () => void;
  bgColor: string;
  iconBg: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
  icon,
  title,
  percentage,
  description,
  actionText,
  onAction,
  bgColor,
  iconBg,
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-6 flex items-center justify-between `}>
      <div className="flex items-center justify-between space-x-4">
        {/* <div className={`${iconBg} rounded-full p-3 flex items-center justify-center`}>
          {icon}
        </div> */}
        <div>
          <h3 className="text-gray-900 font-semibold text-sm">{title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xl font-bold text-gray-900">{percentage}%</span>
            <span className="text-gray-600 text-sm">{description}</span>
          </div>
        </div>
      </div>
      <button
        onClick={onAction}
        className="bg-white text-blue-600 p-2 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
      >
        {actionText}
      </button>
    </div>
  );
};

const Student: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<string>('Select an action');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const actions = [
    'Add new student',
    'Import students',
    'Export data',
    'Send notifications',
    'Generate reports'
  ];

  const handleCardAction = (cardType: string) => {
    console.log(`${cardType} action clicked`);
    // Add your navigation or modal logic here
  };

  const handleActionSelect = (action: string) => {
    setSelectedAction(action);
    setIsDropdownOpen(false);
    console.log(`Selected action: ${action}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto mb-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Students</h1>
          
          {/* Action Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors shadow-lg"
            >
              <span>{selectedAction}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-10">
                {actions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleActionSelect(action)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <StudentCard
            icon={<Settings className="w-4 h-4 text-blue-600" />}
            title="Bill plans set up"
            percentage={0}
            description="0 of 2 students"
            actionText="Set up bill plans"
            onAction={() => handleCardAction('Bill plans')}
            bgColor="bg-blue-50"
            iconBg="bg-white"
          />
          
          <StudentCard
            icon={<CreditCard className="w-4 h-4 text-teal-600" />}
            title="Payment method"
            percentage={0}
            description="0 of 2 students"
            actionText="Invite families"
            onAction={() => handleCardAction('Payment method')}
            bgColor="bg-teal-50"
            iconBg="bg-white"
          />
          
          <StudentCard
            icon={<Repeat className="w-4 h-4 text-pink-600" />}
            title="Autopay on"
            percentage={0}
            description="0 of 2 students"
            actionText="Invite families"
            onAction={() => handleCardAction('Autopay')}
            bgColor="bg-pink-50"
            iconBg="bg-white"
          />
        </div>

      
       
      </div>
      <StudentDetail/>
    </div>

  );
};

export default Student;