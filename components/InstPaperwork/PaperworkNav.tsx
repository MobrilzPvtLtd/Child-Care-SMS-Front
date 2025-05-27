'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
// import ExpenseOverview from './ExpenseOverview';
import FormsAndRequests from './Form&Request';
import SharedFiles from './FileShared';
// import Source from './Source';

interface NavItem {
  id: string;
  label: string;
  component: React.ReactNode;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { 
    id: 'form&request',
    label: 'Form & Request',
    component: <FormsAndRequests />
  },
  {
    id: 'shared-files',
    label: 'Shared-files',
    component: <SharedFiles />
  },
 

];

export default function ExpenseNav() {
  const [activeTab, setActiveTab] = useState('form&request');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Get the active component based on current tab
  const activeComponent = navItems.find(item => item.id === activeTab)?.component || <FormsAndRequests />;

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

