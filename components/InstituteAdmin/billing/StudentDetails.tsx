'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, ChevronLeft, ChevronRight, X, Info } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  initials: string;
  room: string;
  accountBalance: number;
  billingPlan: string;
  payer: {
    name: string;
    isPrimary: boolean;
  } | null;
  paymentMethod: string;
  autopay: string;
}

const StudentDetails: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState('Active');
  const [roomFilter, setRoomFilter] = useState('Rooms');
  const [billingPlanFilter, setBillingPlanFilter] = useState('Billing plan count');
  const [orderBy, setOrderBy] = useState('First Name');
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const students: Student[] = [
    {
      id: 'DD',
      name: 'd d',
      initials: 'DD',
      room: 'mkk',
      accountBalance: 0,
      billingPlan: 'Create plan',
      payer: null,
      paymentMethod: 'Need contact info',
      autopay: 'Need contact info'
    },
   
    {
      id: 'AD',
      name: 'Alex Demo',
      initials: 'AD',
      room: 'Demo Room',
      accountBalance: 0,
      billingPlan: 'Create plan',
      payer: null,
      paymentMethod: 'Need contact info',
      autopay: 'Need contact info'
    },
    {
      id: 'MD',
      name: 'Mia Demo',
      initials: 'MD',
      room: 'Demo Room',
      accountBalance: 0,
      billingPlan: 'Create plan',
      payer: null,
      paymentMethod: 'Need contact info',
      autopay: 'Need contact info'
    },
  
  ];

  const totalStudents = students.length;
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalStudents);

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8 px-6">
          <button className="py-4 px-1 border-b-2 border-blue-500 text-blue-600 font-medium">
            Overview
          </button>
        
        </div>
      </div>

      {/* Filters and Search */}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Enrollment Status */}
          <div className="relative">
            <select
              value={enrollmentStatus}
              onChange={(e) => setEnrollmentStatus(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>All</option>
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
              <X className="w-3 h-3 text-gray-400" />
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Rooms Filter */}
          <div className="relative">
            <select
              value={roomFilter}
              onChange={(e) => setRoomFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Rooms</option>
              <option>Demo Room</option>
              <option>mkk</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* Billing Plan Filter */}
          <div className="relative">
            <select
              value={billingPlanFilter}
              onChange={(e) => setBillingPlanFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Billing plan count</option>
              <option>With plans</option>
              <option>Without plans</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table Controls */}
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Order By</span>
          <div className="relative">
            <select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>First Name</option>
              <option>Last Name</option>
              <option>Account Balance</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Page Size</span>
            <div className="relative">
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm focus:ring-2 "
              >
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
            </div>
          </div>

          <span className="text-sm text-gray-500">
            Showing {startIndex} - {endIndex} of {totalStudents}
          </span>

          <div className="flex items-center space-x-1">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200 border-1 border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Account balance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Billing plans
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Autopay
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student, index) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {student.initials}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                        {student.name}
                      </div>
                      <div className="text-sm text-gray-500">{student.room}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${student.accountBalance.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    {student.billingPlan}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.payer ? (
                    <div>
                      <div className="text-sm text-gray-900">{student.payer.name}</div>
                      {student.payer.isPrimary && (
                        <div className="flex items-center text-xs text-gray-500">
                          Primary payer
                          <Info className="ml-1 w-3 h-3" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Add payer
                    </button>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.paymentMethod === 'Invite to billing' ? (
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      {student.paymentMethod}
                    </button>
                  ) : (
                    <span className="text-sm text-gray-500">{student.paymentMethod}</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.autopay}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;