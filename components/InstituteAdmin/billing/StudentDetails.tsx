import React, { useState } from 'react';
import { Search, ChevronDown, ArrowUpDown, ChevronLeft, ChevronRight, X, Info, Upload } from 'lucide-react';

// Add new interface for student plans
interface StudentPlan {
  id: string;
  studentName: string;
  frequency: string;
  nextSendDate: string;
  nextDueDate: string;
  amount: number;
}

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
  const [activeTab, setActiveTab] = useState('overview');
  const [planStatus, setPlanStatus] = useState<string[]>(['Active', 'Paused']);
  const [searchTerm, setSearchTerm] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState('Active');
  const [rooms, setRooms] = useState('Rooms');
  const [billingPlanCount, setBillingPlanCount] = useState('Billing plan count');
  const [orderBy, setOrderBy] = useState('First Name');
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  // Add student plans data
  const studentPlans: StudentPlan[] = [
    {
      id: '1',
      studentName: 'John Doe',
      frequency: 'Monthly',
      nextSendDate: '2025-07-01',
      nextDueDate: '2025-07-15',
      amount: 250.00
    },
    // Add more plan examples as needed
  ];

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

  const renderStudentPlans = () => {
    return (
      <div className="px-6 py-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm"
            />
          </div>

          {/* Plan Status Filter */}
          <div className="flex gap-2">
            {['Active', 'Paused'].map(status => (
              <button
                key={status}
                onClick={() => setPlanStatus(prev => 
                  prev.includes(status) 
                    ? prev.filter(s => s !== status)
                    : [...prev, status]
                )}
                className={`px-3 py-1 rounded-full text-sm ${
                  planStatus.includes(status)
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {status}
                {planStatus.includes(status) && (
                  <X className="w-3 h-3 ml-1 inline" />
                )}
              </button>
            ))}
          </div>

          {/* Export & Print Buttons */}
          <div className="ml-auto flex gap-2">
            <button className="px-4 py-2 bg-blue-100 text-blue-400 hover:bg-blue-50 rounded-md text-sm">
              Export
            </button>
            <button className="px-4 py-2 bg-blue-100 text-blue-400 hover:bg-blue-50 rounded-md text-sm">
              Print
            </button>
          </div>
        </div>

        {/* Plans Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Frequency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Next Send Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Next Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {studentPlans.map(plan => (
                <tr key={plan.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{plan.studentName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{plan.frequency}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(plan.nextSendDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(plan.nextDueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    ${plan.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex space-x-8">
            <button 
              className={`text-sm font-medium pb-2 ${
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`text-sm font-medium pb-2 ${
                activeTab === 'plans'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('plans')}
            >
              Student Plans
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'overview' ? (
        // Existing overview content
        <div className="px-6 py-6">
          {/* ...existing overview content... */}
        </div>
      ) : (
        // Student Plans content
        renderStudentPlans()
      )}
    </div>
  );
};

export default StudentDetail;

