"use client";

import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { FiPlus, FiCalendar, FiChevronDown } from "react-icons/fi";
import axiosInstance from "@/utils/axios";

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
  id: number;
  name: string;
}

const Announcements: NextPage = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<Announcement[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string>("Select Room");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAnnouncements();
    fetchRooms();
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

  const fetchRooms = async () => {
    try {
      const response = await axiosInstance.get("/rooms");
      setRooms(response.data.data || []);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setRooms([]);
    }
  };

  const handleApplyFilters = () => {
    let filtered = [...announcements];

    // Filter by room
    if (selectedRoom !== "Select Room") {
      const selectedRoomData = rooms.find(room => room.name === selectedRoom);
      if (selectedRoomData) {
        filtered = filtered.filter(announcement => 
          announcement.roomId === selectedRoomData.id
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
    console.log("Opening new announcement form...");
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
    </div>
  );
};

export default Announcements;