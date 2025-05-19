'use client';

import { useState } from 'react';
import { 
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaSearch
} from 'react-icons/fa';

interface WaitlistOption {
  id: string;
  name: string;
  students: number;
}

interface Student {
  position: number;
  name: string;
  packetSubmitted: string;
  desiredStart: string;
  age: number;
  siblingAttending: boolean;
}

export default function Waitlists() {
  const [selectedWaitlist, setSelectedWaitlist] = useState<WaitlistOption>({
    id: 'p1',
    name: 'P1',
    students: 0
  });
  const [waitlistOptions, setWaitlistOptions] = useState<WaitlistOption[]>([
    { id: 'p1', name: 'P1', students: 0 }
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [roomFilter, setRoomFilter] = useState('');
  const [siblingFilter, setSiblingFilter] = useState('');
  const [minAgeFilter, setMinAgeFilter] = useState('');
  const [maxAgeFilter, setMaxAgeFilter] = useState('');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Waitlists</h1>
      
      <div className="flex">
        {/* Left sidebar */}
        <div className="w-64 pr-6">
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-md">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-medium">Select a waitlist to view:</h2>
              </div>
              
              <div className="max-h-64 overflow-y-auto">
                {waitlistOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 
                      ${selectedWaitlist.id === option.id ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedWaitlist(option)}
                  >
                    <div>
                      <div className="font-medium text-blue-600">{option.name}</div>
                      <div className="text-sm text-gray-500">{option.students} Students</div>
                    </div>
                    <FaChevronRight className="text-gray-400" size={16} />
                  </button>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                <div>Showing 1 - 1 of 1</div>
                <div className="flex">
                  <button className="p-1 text-gray-400">
                    <FaChevronLeft size={14} />
                  </button>
                  <button className="p-1">
                    <FaChevronRight size={14} />
                  </button>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200 flex justify-center">
                <button>
                  <FaChevronDown size={14} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">{selectedWaitlist.name}</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <FaPlus size={14} /> Add Student
            </button>
          </div>
          
          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <FaChevronDown size={14} className="text-gray-500" />
                </div>
              </div>
            </div>
            
            <div className="relative w-60">
              <select
                className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md bg-white pr-10"
                value={roomFilter}
                onChange={(e) => setRoomFilter(e.target.value)}
              >
                <option value="">Room</option>
                <option value="A">Room A</option>
                <option value="B">Room B</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <FaChevronDown size={14} className="text-gray-500" />
              </div>
            </div>
            
            <div className="relative w-48">
              <select
                className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md bg-white pr-10"
                value={siblingFilter}
                onChange={(e) => setSiblingFilter(e.target.value)}
              >
                <option value="">Sibling</option>
                <option value="yes">Has Sibling</option>
                <option value="no">No Sibling</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <FaChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
            
            <div className="relative w-40">
              <select
                className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md bg-white pr-10"
                value={minAgeFilter}
                onChange={(e) => setMinAgeFilter(e.target.value)}
              >
                <option value="">Min Age</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <FaChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
            
            <div className="relative w-40">
              <select
                className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md bg-white pr-10"
                value={maxAgeFilter}
                onChange={(e) => setMaxAgeFilter(e.target.value)}
              >
                <option value="">Max Age</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <FaChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
          
          {/* Table */}
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Position</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Student Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Packet Submitted</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Desired Start</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Age</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Sibling Attending
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-16">
                      <div className="text-gray-600">
                        <p>No students have been waitlisted for this program.</p>
                        <p>Add students to this waitlist using the</p>
                        <p>"Add Student" button above.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  students.map((student, index) => (
                    <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">{student.position}</td>
                      <td className="py-3 px-4">{student.name}</td>
                      <td className="py-3 px-4">{student.packetSubmitted}</td>
                      <td className="py-3 px-4">{student.desiredStart}</td>
                      <td className="py-3 px-4">{student.age}</td>
                      <td className="py-3 px-4">
                        {student.siblingAttending ? 'Yes' : 'No'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}