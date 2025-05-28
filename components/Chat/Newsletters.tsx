"use client";

import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { FiPlus, FiCalendar, FiChevronDown } from "react-icons/fi";
import axiosInstance from "@/utils/axios"; 
import CreateNewsletterModal from "./CreateNewsletterModal";

interface Newsletter {
  id: number;
  title: string;
  content: string;
  roomId?: number;
  createdAt: string;
  updatedAt: string;
  sentAt: string;
  from: string;
  room?: {
    id: number;
    name: string;
  };
}

interface Room {
  id: number;
  name: string;
}

const Newsletters: NextPage = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [filteredNewsletters, setFilteredNewsletters] = useState<Newsletter[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string>("All rooms");
  const [sentAfter, setSentAfter] = useState<string>("");
  const [sentBefore, setSentBefore] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false); // New state for modal visibility

  useEffect(() => {
    fetchNewsletters();
    fetchRooms();
  }, []);

  const fetchNewsletters = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/newsletters");
      const newsletterData = response.data.data || [];
      setNewsletters(newsletterData);
      setFilteredNewsletters(newsletterData);
    } catch (error) {
      console.error("Error fetching newsletters:", error);
      // Set empty arrays if there's an error
      setNewsletters([]);
      setFilteredNewsletters([]);
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
    let filtered = [...newsletters];

    // Filter by room
    if (selectedRoom !== "All rooms") {
      const selectedRoomData = rooms.find(room => room.name === selectedRoom);
      if (selectedRoomData) {
        filtered = filtered.filter(newsletter => 
          newsletter.roomId === selectedRoomData.id
        );
      }
    }

    // Filter by date range
    if (sentAfter) {
      filtered = filtered.filter(newsletter => 
        new Date(newsletter.sentAt || newsletter.createdAt) >= new Date(sentAfter)
      );
    }

    if (sentBefore) {
      filtered = filtered.filter(newsletter => 
        new Date(newsletter.sentAt || newsletter.createdAt) <= new Date(sentBefore)
      );
    }

    setFilteredNewsletters(filtered);
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

  // Updated function to show the create modal
  const handleNewNewsletter = () => {
    setShowCreateModal(true);
  };

  // Handle the modal close event
  const handleCloseModal = () => {
    setShowCreateModal(false);
  };

  // Handle saving the newsletter
  const handleSaveNewsletter = async (newsletterData: any) => {
    try {
      await axiosInstance.post("/newsletters", newsletterData);
      // Refresh the newsletters list after creating a new one
      fetchNewsletters();
      setShowCreateModal(false);
    } catch (error) {
      console.error("Error creating newsletter:", error);
      // You might want to handle the error and show a message to the user
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
    {!showCreateModal ?   (
        <>
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Newsletters</h1>
        <button 
          onClick={handleNewNewsletter}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
        >
          <FiPlus className="w-4 h-4" />
          New Newsletter
        </button>
      </div>
 
      <div className="px-6 py-4 border-b border-gray-200">
        <p className="text-gray-600 text-sm leading-relaxed">
          Engage families with photos and information about group activities and events. Parents can open their newsletters directly from the brightwheel mobile app.
        </p>
      </div>

      {/* Sent Newsletters Section */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Sent Newsletters</h2>
          
          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            {/* Room Selector */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Room</label>
              <div className="relative">
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-w-[120px]"
                >
                  <option value="All rooms">All rooms</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.name}>
                      {room.name}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Sent After */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Sent after</label>
              <div className="relative">
                <input
                  type="text"
                  value={sentAfter}
                  onChange={(e) => setSentAfter(e.target.value)}
                  placeholder="M/D/YYYY"
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-w-[120px]"
                />
                <FiCalendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Sent Before */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Sent before</label>
              <div className="relative">
                <input
                  type="text"
                  value={sentBefore}
                  onChange={(e) => setSentBefore(e.target.value)}
                  placeholder="M/D/YYYY"
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-w-[120px]"
                />
                <FiCalendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex flex-col">
              <div className="mb-2">&nbsp;</div> {/* Spacer to align with other inputs */}
              <button
                onClick={handleApplyFilters}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-2 rounded-lg text-sm font-medium"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-4 px-6 py-3">
                <div className="col-span-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sent
                  </span>
                </div>
                <div className="col-span-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    From
                  </span>
                </div>
                <div className="col-span-6">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </span>
                </div>
              </div>
            </div>

            {/* Table Content */}
            <div className="divide-y divide-gray-200">
              {loading ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-600">Loading newsletters...</p>
                </div>
              ) : filteredNewsletters.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-600">
                    No newsletters have been sent.
                  </p>
                </div>
              ) : (
                filteredNewsletters.map((newsletter) => (
                  <div key={newsletter.id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50">
                    <div className="col-span-2">
                      <span className="text-sm text-gray-900">
                        {formatDate(newsletter.sentAt || newsletter.createdAt)}
                      </span>
                    </div>
                    <div className="col-span-4">
                      <span className="text-sm text-gray-900">
                        {newsletter.from || 'Admin'}
                      </span>
                    </div>
                    <div className="col-span-6">
                      <span className="text-sm text-gray-900">
                        {newsletter.title}
                      </span>
                      {newsletter.room && (
                        <div className="text-xs text-gray-500 mt-1">
                          Room: {newsletter.room.name}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      </>
      ) : 
 
      (
        <CreateNewsletterModal
          rooms={rooms}
          onClose={handleCloseModal}
          onSave={handleSaveNewsletter}
        />
      )}
    </div>
  );
};

export default Newsletters;