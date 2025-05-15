"use client"
import { useState } from 'react';
import { X, ChevronDown, Users } from 'lucide-react';
// import StudentTable from './StudentTable';

// TypeScript interfaces
interface Student {
  id: string;
  name: string;
  room: string;
  status: 'Active' | 'Inactive';
}

const ClassesList = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [students] = useState<Student[]>([]);
  const [filters] = useState({
    status: 'Active'
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Classes list</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-50">
            Export Roster
          </button>
          <div className="relative">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-700">
              Add Classes
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Welcome message card */}
      {showWelcome && (
        <div className="bg-[#DDEEEE] border-l-4  border-[#29B9BB] p-4 mb-6 rounded-md flex justify-between items-start">
          <div className="flex gap-3">
            <Users className="text-[#29B9BB] mt-1" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">Welcome to your Classes list!</h2>
              <p className="text-gray-600">
                This is where you will add and manage all Classes in your school. Explore brightwheel's functionality with the demo students.
              </p>
              <button className="text-indigo-600 hover:underline mt-2">Learn more</button>
            </div>
          </div>
          <button onClick={() => setShowWelcome(false)} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="w-1/3 relative">
          <div className="border border-gray-300 rounded-md p-2 flex justify-between items-center cursor-pointer">
            <span className="text-gray-700">Student</span>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>

        <div className="w-1/3 relative">
          <div className="border border-indigo-200 bg-indigo-50 rounded-md p-2 flex items-center">
            <span className="mr-1 text-gray-700">Student status</span>
            <div className="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 ml-2 text-sm">
              <span className="text-gray-800">Active</span>
              <X size={14} className="ml-1 text-gray-500" />
            </div>
            <div className="ml-auto flex items-center">
              <X size={16} className="text-gray-500" />
              <ChevronDown size={16} className="text-gray-500 ml-1" />
            </div>
          </div>
        </div>

     

        <button className="text-indigo-600 hover:text-indigo-800 ml-2">
          Reset all
        </button>
      </div>

      {/* Student list - Empty state */}
      {students.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-md">
          <p className="text-gray-500">No students found with the current filters.</p>
        </div>
        // <StudentTable/>
      )}
    </div>
  );
};

export default ClassesList;