'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, X, Search } from 'lucide-react';

type StatusType = 'Draft' | 'Active' | 'Closed';

interface PacketData {
  name: string;
  students: number;
  dueDate: string | null;
  fee: string | null;
  status: StatusType;
}

export default function AdmissionsPackets() {
  const [statusFilters, setStatusFilters] = useState<StatusType[]>(['Draft', 'Active', 'Closed']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pageSize, setPageSize] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sample data
  const packetData: PacketData[] = [
    {
      name: 'John Doe',
      students: 0,
      dueDate: null,
      fee: null,
      status: 'Draft',
    },
    // You can add more sample data here
  ];

  // Filter packets based on selected status filters and search query
  const filteredPackets = packetData.filter((packet) => {
    return (
      statusFilters.includes(packet.status) &&
      (searchQuery === '' || packet.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  // Calculate pagination
  const totalPackets = filteredPackets.length;
  const totalPages = Math.max(1, Math.ceil(totalPackets / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalPackets);
  const currentPackets = filteredPackets.slice(startIndex, endIndex);

  // Toggle status filter
  const toggleStatusFilter = (status: StatusType) => {
    if (statusFilters.includes(status)) {
      setStatusFilters(statusFilters.filter((s) => s !== status));
    } else {
      setStatusFilters([...statusFilters, status]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setStatusFilters([]);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Admissions packets</h1>
        <div className="flex gap-4">
          <button className="text-blue-600 hover:text-blue-800">Share feedback</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <span>+</span> New packet
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="relative">
          <div className="min-w-64 border border-gray-300 rounded-md">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-gray-700">Status</span>
              <div className="flex items-center gap-1">
                {statusFilters.length > 0 && (
                  <button onClick={clearFilters} className="text-gray-500 hover:bg-gray-100 rounded-full p-1">
                    <X size={16} />
                  </button>
                )}
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
            <div className="px-2 pb-2 flex flex-wrap gap-2">
              {['Draft', 'Active', 'Closed'].map((status) => (
                <button
                  key={status}
                  className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    statusFilters.includes(status as StatusType)
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => toggleStatusFilter(status as StatusType)}
                >
                  {status}
                  {statusFilters.includes(status as StatusType) && (
                    <X size={14} className="cursor-pointer" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Page Size</span>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-blue-600"
              value={pageSize}
              onChange={(e) => setPageSize(parseInt(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">
            Showing {startIndex + 1} - {endIndex} of {totalPackets}
          </span>
          <div className="flex">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`p-1 border border-gray-300 ${
                currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`p-1 border border-gray-300 border-l-0 ${
                currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Packet</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Total students</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Due date</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Fee</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPackets.map((packet, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    {packet.name}
                  </a>
                </td>
                <td className="py-3 px-4">{packet.students}</td>
                <td className="py-3 px-4">{packet.dueDate || '-'}</td>
                <td className="py-3 px-4">{packet.fee || 'None'}</td>
                <td className="py-3 px-4">{packet.status}</td>
                <td className="py-3 px-4 text-right">
                  <div className="relative inline-block">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      Actions <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Page Size</span>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-blue-600"
              value={pageSize}
              onChange={(e) => setPageSize(parseInt(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">
            Showing {startIndex + 1} - {endIndex} of {totalPackets}
          </span>
          <div className="flex">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`p-1 border border-gray-300 ${
                currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`p-1 border border-gray-300 border-l-0 ${
                currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}