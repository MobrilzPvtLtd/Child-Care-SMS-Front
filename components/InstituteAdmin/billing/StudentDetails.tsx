import React, { useState } from 'react';
import { Search, ChevronDown, ArrowUpDown, ChevronLeft, ChevronRight, X, Info } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  initials: string;
  room?: string;
  accountBalance: number;
  billingPlans: 'Create plan' | 'Active';
  payer: string;
  payerType?: 'Primary payer';
  paymentMethod: string;
  autopay: string;
}

const StudentDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState('Active');
  const [rooms, setRooms] = useState('Rooms');
  const [billingPlanCount, setBillingPlanCount] = useState('Billing plan count');
  const [orderBy, setOrderBy] = useState('First Name');
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const students: Student[] = [
    {
      id: '1',
      name: 'd d',
      initials: 'DD',
      accountBalance: 0.00,
      billingPlans: 'Create plan',
      payer: 'Add payer',
      paymentMethod: 'Need contact info',
      autopay: 'Need contact info'
    },
    {
      id: '2',
      name: 'kunal rao',
      initials: 'KR',
      accountBalance: 0.00,
      billingPlans: 'Create plan',
      payer: 'Add payer',
      paymentMethod: 'Need contact info',
      autopay: 'Need contact info'
    },
    {
      id: '3',
      name: 'kunal rao',
      initials: 'KR',
      room: 'Demo Room',
      accountBalance: 0.00,
      billingPlans: 'Create plan',
      payer: 'raghu singh',
      payerType: 'Primary payer',
      paymentMethod: 'Invite to billing',
      autopay: 'Need payment method'
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredStudents.length);
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  const Dropdown = ({ value, onChange, options, placeholder }: {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 min-w-[120px]"
        >
          <span className={value === placeholder ? 'text-gray-500' : 'text-gray-900'}>
            {value}
          </span>
          {value !== placeholder && (
            <X 
              className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-600" 
              onClick={(e) => {
                e.stopPropagation();
                onChange(placeholder);
              }}
            />
          )}
          <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex space-x-8">
            <button className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2">
              Overview
            </button>
            <button className="text-sm font-medium text-gray-500 pb-2">
              Student Plans
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
         

          <div className="flex flex-wrap gap-4 items-center">

             <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
            <div className="flex items-center space-x-2">
             
              <Dropdown
                value={enrollmentStatus}
                onChange={setEnrollmentStatus}
                options={['Active', 'Inactive', 'Pending']}
                placeholder="Select status"
              />
            </div>

            <Dropdown
              value={rooms}
              onChange={setRooms}
              options={['Demo Room', 'Room A', 'Room B']}
              placeholder="Rooms"
            />

            <Dropdown
              value={billingPlanCount}
              onChange={setBillingPlanCount}
              options={['0', '1', '2', '3+']}
              placeholder="Billing plan count"
            />
          </div>
        </div>

        {/* Table Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">Order By</span>
            <Dropdown
              value={orderBy}
              onChange={setOrderBy}
              options={['First Name', 'Last Name', 'Account Balance', 'Date Added']}
              placeholder="Order By"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Page Size</span>
              <Dropdown
                value={pageSize.toString()}
                onChange={(value) => setPageSize(parseInt(value))}
                options={['10', '25', '50', '100']}
                placeholder="25"
              />
            </div>
            <span className="text-sm text-gray-700">
              Showing {startIndex + 1} - {endIndex} of {filteredStudents.length}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Student name</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                  Account balance
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                  Billing plans
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                  Payer
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                  Payment method
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                  Autopay
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {student.initials}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                          {student.name}
                        </div>
                        {student.room && (
                          <div className="text-sm text-gray-500">{student.room}</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${student.accountBalance.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      {student.billingPlans}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      {student.payer === 'Add payer' ? (
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Add payer
                        </button>
                      ) : (
                        <div>
                          <div className="text-sm text-gray-900">{student.payer}</div>
                          {student.payerType && (
                            <div className="flex items-center space-x-1">
                              <span className="text-sm text-gray-500">{student.payerType}</span>
                              <Info className="w-3 h-3 text-gray-400" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
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
    </div>
  );
};

export default StudentDetail;

