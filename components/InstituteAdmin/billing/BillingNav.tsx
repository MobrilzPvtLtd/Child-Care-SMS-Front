'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import AtAGlance from './AtAGlance';
import Subsidies from './Subsidies';
import ActivateAccount from './ActiveAccount';
import Student from './Student';
import Reports from './Report';
// import ExpenseOverview from './ExpenseOverview';


interface NavItem {
  id: string;
  label: string;
  component: React.ReactNode;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { 
    id: 'overview',
    label: 'At a Glance',
    component: <AtAGlance />
  },
  {
    id: 'student',
    label: 'Student',
    component: <Student />
  },
  {
    id: 'profit-loss',
    label: 'Subsidies',
    component: <Subsidies />
  },
//   {
//     id: 'categories',
//     label: 'Library',
//     component: <AtAGlance />
//   },
  {
    id: 'sources',
    label: 'Reports',
    component: <Reports />
  },
//   {
//     id: 'settings',
//     label: 'Settings',
//     component: <AtAGlance />
//   },
  {
    id: 'active account',
    label: 'Active Account',
    component: <ActivateAccount />
  }
];

export default function BillingNav() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Get the active component based on current tab
  const activeComponent = navItems.find(item => item.id === activeTab)?.component || <AtAGlance />;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="w-full bg-white border-b border-gray-200 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`
                    relative py-4 px-1 text-sm font-bold whitespace-nowrap transition-all duration-200
                    ${isActive 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'
                    }
                  `}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${item.id}-panel`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        role="tabpanel"
        id={`${activeTab}-panel`}
      >
        {activeComponent}
      </div>
    </div>
  );
}

