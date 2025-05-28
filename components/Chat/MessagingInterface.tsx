"use client"

import React, { useState } from 'react';
import { MessageCircle, Plus, ChevronDown, Info } from 'lucide-react';
import ChatScreen from './ChatScreen';
import Announcements from './Announcements';
import Newsletters from './Newsletters';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface MessageFilter {
  orderBy: string;
  staffOrRoom: string;
}

const MessagingInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('messages');
  const [activeSubTab, setActiveSubTab] = useState<string>('staff');
  const [filter, setFilter] = useState<MessageFilter>({
    orderBy: 'unread',
    staffOrRoom: ''
  });

  const mainTabs: Tab[] = [
    { id: 'messages', label: 'Messages', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'announcements', label: 'Announcements' },
    { id: 'newsletters', label: 'Newsletters' }
  ];

  const subTabs: Tab[] = [
    { id: 'parents', label: 'Parents' },
    { id: 'staff', label: 'Staff' }
  ];

  const orderByOptions = [
    { value: 'unread', label: 'Unread' },
    { value: 'recent', label: 'Recent' },
    { value: 'alphabetical', label: 'Alphabetical' }
  ];

  const handleApplyFilter = () => {
    // Handle filter application logic here
    console.log('Applied filters:', filter);
  };

  const handleResetAll = () => {
    setFilter({
      orderBy: 'unread',
      staffOrRoom: ''
    });
  };

  const handleNewMessage = () => {
    // Handle new message creation
    console.log('Creating new message');
  };

  return (
    <div className="max-w-7xl mx-auto p-3 bg-white">
      {/* Main Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-2">
        {mainTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Messages Content */}
      {activeTab === 'messages' && (
        < ChatScreen />
      )}

      {/* Announcements Content */}
      {activeTab === 'announcements' && (
        < Announcements />
      )}

      {/* Newsletters Content */}
      {activeTab === 'newsletters' && (
        < Newsletters />
      )}
    </div>
  );
};

export default MessagingInterface;