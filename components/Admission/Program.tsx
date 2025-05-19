import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';

interface Program {
  id: string;
  name: string;
  description: string;
  maxCapacity: number;
  minAge: number;
  maxAge: number;
  startDate: string;
  endDate: string;
}

export default function Program() {
  // Sample program data
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: 'P1',
      name: 'P1',
      description: '',
      maxCapacity: 10,
      minAge: 3,
      maxAge: 4,
      startDate: '5/9/2025',
      endDate: '3/10/2026',
    },
  ]);

  // Add after existing useState declarations
const [showModal, setShowModal] = useState(false);
const [formData, setFormData] = useState<Omit<Program, 'id'>>({
  name: '',
  description: '',
  maxCapacity: 0,
  minAge: 0,
  maxAge: 0,
  startDate: '',
  endDate: ''
});

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = programs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentPrograms = programs.slice(startIndex, endIndex);
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle adding a new program (placeholder)
  // const handleAddProgram = () => {
  //   alert('New Program button clicked');
  //   // Implementation would go here
  // };

  const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: name.includes('age') || name === 'maxCapacity' 
      ? parseInt(value) || 0 
      : value
  }));
};

const handleAddProgram = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate form
  if (!formData.name || !formData.maxCapacity || !formData.startDate || !formData.endDate) {
    toast.error('Please fill in all required fields');
    return;
  }

  // Create new program
  const newProgram: Program = {
    id: `P${programs.length + 1}`,
    ...formData
  };

  setPrograms(prev => [...prev, newProgram]);
  setShowModal(false);
  setFormData({
    name: '',
    description: '',
    maxCapacity: 0,
    minAge: 0,
    maxAge: 0,
    startDate: '',
    endDate: ''
  });

  toast.success('Program added successfully!');
};

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Programs</h1>
        <button 
  onClick={() => setShowModal(true)}
  className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
>
  <Plus size={18} />
  <span>New Program</span>
</button>
      </div>

      <div className="mb-2 flex justify-end items-center text-sm text-gray-600">
        <span>{startIndex + 1} - {endIndex} of {totalItems}</span>
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className={`ml-2 p-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className={`p-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          <ChevronRight size={18} />
        </button>
      </div>


{/* Add this after the header div */}
<ToastContainer />

{showModal && (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
    <div className="bg-white w-full max-w-md p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Add New Program</h2>
        <button
          onClick={() => setShowModal(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleAddProgram} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Program Name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Capacity*
          </label>
          <input
            type="number"
            name="maxCapacity"
            value={formData.maxCapacity}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            min="1"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Age
            </label>
            <input
              type="number"
              name="minAge"
              value={formData.minAge}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Age
            </label>
            <input
              type="number"
              name="maxAge"
              value={formData.maxAge}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              min="0"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date*
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date*
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Add Program
          </button>
        </div>
      </form>
    </div>
  </div>
)}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Program Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Max Capacity</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Min/Max Age</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Start Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">End Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentPrograms.map((program) => (
              <tr key={program.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-indigo-600">{program.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{program.description}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{program.maxCapacity}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{program.minAge} years - {program.maxAge} years</td>
                <td className="px-6 py-4 text-sm text-gray-800">{program.startDate}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{program.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            className={`p-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
          >
            <ChevronLeft size={18} />
          </button>
        </div>
        <div>
          {startIndex + 1} - {endIndex} of {totalItems}
        </div>
        <div className="flex items-center">
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            className={`p-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}