"use client";

import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { FiPlus, FiCalendar, FiChevronDown } from "react-icons/fi";
import axiosInstance from "@/utils/axios";
import AnnouncementModal from "./AnnouncementModal";

interface Announcement {
  id: number;
  title: string;
  content: string;
  type: string;
  roomId?: number;
  createdAt: string;
  updatedAt: string;
  room?: {
    id: number;
    name: string;
  };
}

interface Room {
  id: string;
  name: string;
  letter: string;
  color: string;
}

const Announcements: NextPage = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<Announcement[]>([]);
  const [rooms, setRooms] = useState<Room[]>([
    { id: '1', name: 'dasdas', letter: 'd', color: 'bg-red-400' },
    { id: '2', name: 'dwd', letter: 'd', color: 'bg-orange-400' },
    { id: '3', name: 'MATH', letter: 'M', color: 'bg-slate-600' },
    { id: '4', name: 'mkk', letter: 'm', color: 'bg-green-500' },
    { id: '5', name: 'Room1', letter: 'R', color: 'bg-green-500' },
    { id: '6', name: 'Demo Room', letter: 'D', color: 'bg-orange-400' },
  ]);
  const [selectedRoom, setSelectedRoom] = useState<string>("Select Room");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [isMessageModalOpen, setisMessageModalOpen] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

  useEffect(() => {
    fetchAnnouncements();
    // Remove fetchRooms() since we're initializing rooms in state
  }, []);

  const fetchAnnouncements = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/announcements");
      const announcementData = response.data.data || [];
      setAnnouncements(announcementData);
      setFilteredAnnouncements(announcementData);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      // Set empty arrays if there's an error
      setAnnouncements([]);
      setFilteredAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  // Update fetchRooms to merge API data with initial rooms if needed
  const fetchRooms = async () => {
    try {
      const response = await axiosInstance.get("/");
      const apiRooms = response.data.data || [];
      // Merge API rooms with initial rooms if needed
      setRooms(prevRooms => {
        const mergedRooms = [...prevRooms];
        apiRooms.forEach((apiRoom: Room) => {
          if (!mergedRooms.some(room => room.id === apiRoom.id)) {
            mergedRooms.push(apiRoom);
          }
        });
        return mergedRooms;
      });
    } catch (error) {
      console.error("Error fetching rooms:", error);
      // Keep existing rooms on error
    }
  };

  const handleApplyFilters = () => {
    let filtered = [...announcements];

    // Filter by room
    if (selectedRoom !== "Select Room") {
      const selectedRoomData = rooms.find(room => room.name === selectedRoom);
      if (selectedRoomData) {
        filtered = filtered.filter(announcement => 
          announcement.roomId === Number(selectedRoomData.id)
        );
      }
    }

    // Filter by date range
    if (dateFrom) {
      filtered = filtered.filter(announcement => 
        new Date(announcement.createdAt) >= new Date(dateFrom)
      );
    }

    if (dateTo) {
      filtered = filtered.filter(announcement => 
        new Date(announcement.createdAt) <= new Date(dateTo)
      );
    }

    setFilteredAnnouncements(filtered);
  };

  const handleResetFilters = () => {
    setSelectedRoom("Select Room");
    setDateFrom("");
    setDateTo("");
    setFilteredAnnouncements(announcements);
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  const handleNewAnnouncement = () => {
    // This would typically open a modal or navigate to a form
    setIsModalOpen(true);
    console.log("Opening new announcement form...");
  };


  const closeModal = () => setIsModalOpen(false);

  const toggleRoomSelection = (roomId: string) => {
    setSelectedRooms(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  const selectAll = () => {
    setSelectedRooms(rooms.map(room => room.id));
  };

  const deselectAll = () => {
    setSelectedRooms([]);
  };

  const handleNext = () => {

    console.log('Selected rooms:', selectedRooms);
    // Handle next action here
    setisMessageModalOpen(true);
    closeModal();
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
      <button 
        onClick={handleNewAnnouncement}
        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
      >
        <FiPlus className="w-4 h-4" />
        New Parent Announcement
      </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 p-6 border-b border-gray-200">
      {/* Room Selector */}
      <div className="relative">
        <select
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-w-[150px]"
        >
        <option value="Select Room">Select Room</option>
        {rooms.map((room) => (
          <option key={room.id} value={room.name}>
          {room.name}
          </option>
        ))}
        </select>
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      </div>

      {/* Date From */}
      <div className="relative">
        <input
        type="date"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
        placeholder="Date From"
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-w-[140px]"
        />
        <FiCalendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      </div>

      {/* Date To */}
      <div className="relative">
        <input
        type="date"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
        placeholder="Date To"
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-w-[140px]"
        />
          <FiCalendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApplyFilters}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg text-sm font-medium"
        >
          Apply
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-600">Loading announcements...</p>
          </div>
        ) : (
          <>
            {/* Table Header */}
            <div className="bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-4 px-6 py-3">
                <div className="col-span-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DATE
                  </span>
                </div>
                <div className="col-span-8">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PARENT ANNOUNCEMENT
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ANNOUNCEMENT TYPE
                  </span>
                </div>
              </div>
            </div>

            {/* Table Content */}
            <div className="divide-y divide-gray-200">
              {filteredAnnouncements.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-600">
                    There are no sent announcements. Click the '+ New Announcement' button to create one.
                  </p>
                </div>
              ) : (
                filteredAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50">
                    <div className="col-span-2">
                      <span className="text-sm text-gray-900">
                        {formatDate(announcement.createdAt)}
                      </span>
                    </div>
                    <div className="col-span-8">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                          {announcement.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {announcement.content}
                        </p>
                        {announcement.room && (
                          <span className="inline-block mt-1 text-xs text-gray-500">
                            Room: {announcement.room.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {announcement.type || 'General'}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>

      { IsModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 bg-opacity-50"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4">
            {/* Header */}
            <div className="bg-indigo-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
              <h2 className="text-lg font-medium">Message All Parents: Select Rooms</h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Select/Deselect All */}
              <div className="flex justify-end gap-4 mb-6 text-sm">
                <button
                  onClick={selectAll}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Select All
                </button>
                <button
                  onClick={deselectAll}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Deselect All
                </button>
              </div>

              {/* Room Grid */}
              <div className="grid grid-cols-4 gap-2 mb-8">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    onClick={() => toggleRoomSelection(room.id)}
                    className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
                      selectedRooms.includes(room.id) 
                        ? 'scale-105' 
                        : 'hover:scale-102'
                    }`}
                  >
                    {/* Room Icon */}
                    <div className={`w-16 h-16 ${room.color} rounded-lg flex items-center justify-center text-white text-xl font-semibold shadow-md`}>
                      {room.letter}
                    </div>
                    {/* Room Name */}
                    <span className="mt-2 text-sm text-gray-700 text-center">
                      {room.name}
                    </span>
                    {/* Selection Indicator */}
                    {selectedRooms.includes(room.id) && (
                      <div className="mt-1">
                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Next Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleNext}
                  disabled={selectedRooms.length === 0}
                  className={`px-8 py-2 rounded-lg transition-colors ${
                    selectedRooms.length > 0
                      ? 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {
        isMessageModalOpen && (
          <AnnouncementModal
            isOpen={isMessageModalOpen}
            onClose={() => setisMessageModalOpen(false)}
            selectedRooms={selectedRooms}
            onAnnouncementSent={fetchAnnouncements} // Refresh announcements after sending
          />
        )
      } */}
    </div>
  );
};

export default Announcements;