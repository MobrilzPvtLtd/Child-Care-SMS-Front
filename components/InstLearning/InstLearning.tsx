'use client';
import React, { useState } from 'react';
import { Search, Calendar, ChevronDown, FileText, ChevronRight, Info } from 'lucide-react';

interface RoomPlan {
  id: string;
  name: string;
  assignedWeek: string;
  theme: string;
  room: string;
}

const InstLearning: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('Room');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [roomPlans, setRoomPlans] = useState<RoomPlan[]>([]);

  const handleCreateRoomPlan = () => {
    // Handle create room plan action
    console.log('Create room plan clicked');
  };

  const handleLearnAboutRoomPlans = () => {
    // Handle learn about room plans action
    console.log('Learn about room plans clicked');
  };

  const handleResetAll = () => {
    setSearchTerm('');
    setSelectedRoom('Room');
    setDateFrom('');
    setDateTo('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Room plans</h1>
            <button 
              onClick={handleLearnAboutRoomPlans}
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Info className="w-4 h-4 mr-1" />
              Learn about room plans
            </button>
          </div>
          <button
            onClick={handleCreateRoomPlan}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Create room plan
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search name or theme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Room Dropdown */}
            <div className="relative">
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              >
                <option value="Room">Room</option>
                <option value="Room A">Room A</option>
                <option value="Room B">Room B</option>
                <option value="Room C">Room C</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Date From */}
            <div className="relative">
              <input
                type="date"
                placeholder="Date from"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Date To */}
            <div className="relative">
              <input
                type="date"
                placeholder="Date to"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Reset All Button */}
          <div className="flex justify-end">
            <button
              onClick={handleResetAll}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Reset all
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-3 gap-4">
              <div className="font-medium text-gray-700">Name</div>
              <div className="font-medium text-gray-700">Assigned week</div>
              <div className="font-medium text-gray-700">Theme</div>
            </div>
          </div>

          {/* Empty State */}
          <div className="px-6 py-16 text-center">
            <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
              <FileText className="w-12 h-12 text-gray-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-500 mb-2">No room plans here</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Add a new lesson plan template or select an existing one to create a room plan.
            </p>
            <button
              onClick={handleCreateRoomPlan}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Create room plan
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstLearning;