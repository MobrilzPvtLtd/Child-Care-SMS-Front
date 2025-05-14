"use client"
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const DashboardTable = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  
  // Sorting state
  const [sortOrder, setSortOrder] = useState('asc');
  
  // Demo empty state
  const hasStudents = false;
  
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };
  
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  
  return (
    <div className="w-full">
      {/* Header Controls */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Order By</span>
          <button 
            className="flex items-center px-2 py-1 text-sm bg-gray-100 border rounded-md"
            onClick={toggleSortOrder}
          >
            First Name A - Z
            {sortOrder === 'asc' ? 
              <FiChevronDown className="ml-1" /> : 
              <FiChevronUp className="ml-1" />
            }
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Page size</span>
          <select 
            value={itemsPerPage} 
            onChange={handleItemsPerPageChange}
            className="px-2 py-1 text-sm bg-gray-100 border rounded-md"
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          
          <div className="flex items-center space-x-2 ml-4">
            <span className="text-sm text-gray-600">0 - 0</span>
            <button 
              className="p-1 rounded-md opacity-50"
              disabled
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button 
              className="p-1 rounded-md opacity-50"
              disabled
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-12 px-4 py-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4"
                  disabled={!hasStudents}
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Student Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Age
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Program(s)
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Packet Submitted
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Desired Start
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Sibling Attending
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Pending Forms
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                School Status
              </th>
            </tr>
          </thead>
          <tbody>
            {!hasStudents && (
              <tr>
                <td colSpan={9} className="px-4 py-12 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="mb-1 text-gray-600">No students match your above filters.</p>
                    <p className="text-gray-600">Be sure students have the correct status</p>
                    <p className="text-gray-600">set in the <span className="text-blue-500">Students tab</span>.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer Controls (duplicate of header) */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Order By</span>
          <button 
            className="flex items-center px-2 py-1 text-sm bg-gray-100 border rounded-md"
            onClick={toggleSortOrder}
          >
            First Name A - Z
            {sortOrder === 'asc' ? 
              <FiChevronDown className="ml-1" /> : 
              <FiChevronUp className="ml-1" />
            }
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Page size</span>
          <select 
            value={itemsPerPage} 
            onChange={handleItemsPerPageChange}
            className="px-2 py-1 text-sm bg-gray-100 border rounded-md"
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          
          <div className="flex items-center space-x-2 ml-4">
            <span className="text-sm text-gray-600">0 - 0</span>
            <button 
              className="p-1 rounded-md opacity-50"
              disabled
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button 
              className="p-1 rounded-md opacity-50"
              disabled
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;