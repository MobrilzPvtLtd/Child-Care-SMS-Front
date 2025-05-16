"use client"
import { useState } from 'react';
import { X, ChevronDown, Users } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
// import StudentTable from './StudentTable';

// TypeScript interfaces
interface Teacher {
  id: string;
  name: string;
}

interface Class {
  id: string;
  className: string;
  description: string;
  teacherId: string;
  teacherName: string;
  instituteId: string;
}

const ClassesList = () => {
    const [showModal, setShowModal] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
  const [classes, setClasses] = useState<Class[]>([]);
  const [teachers] = useState<Teacher[]>([
    { id: "1", name: "John Smith" },
    { id: "2", name: "Sarah Johnson" },
  ]);
  
  const [formData, setFormData] = useState<Class>({
    id: "",
    className: "",
    description: "",
    teacherId: "",
    teacherName: "",
    instituteId: "inst_1", // Default institute ID
  });
  // Add these inside the ClassesList component
const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  
  // If selecting a teacher, update both teacherId and teacherName
  if (name === 'teacherId') {
    const selectedTeacher = teachers.find(t => t.id === value);
    setFormData(prev => ({
      ...prev,
      teacherId: value,
      teacherName: selectedTeacher?.name || ''
    }));
  } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate form
  if (!formData.className || !formData.teacherId) {
    toast.error('Please fill in all required fields');
    return;
  }

  // Add new class
  const newClass: Class = {
    ...formData,
    id: Date.now().toString(),
  };

  setClasses(prev => [...prev, newClass]);
  setShowModal(false);
  
  // Reset form
  setFormData({
    id: "",
    className: "",
    description: "",
    teacherId: "",
    teacherName: "",
    instituteId: "inst_1",
  });

  toast.success('Class added successfully!');
};

interface FilterState {
  classId: string;
  status: 'All' | 'Active' | 'Inactive';
}

// Add this with other state declarations
const [filters, setFilters] = useState<FilterState>({
  classId: '',
  status: 'All'
});

  return (
    <div className="max-w-6xl mx-auto p-4">
      <ToastContainer/>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Classes list</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-50">
            Export Roster
          </button>
          <div className="relative">
          <button 
    onClick={() => setShowModal(true)}
    className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-700"
  >
    Add Classes
    <ChevronDown size={16} />
  </button>
          </div>
        </div>
      </div>

      {showModal && (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Class</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class Name*
              </label>
              <input
                type="text"
                name="className"
                value={formData.className}
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
                Teacher*
              </label>
              <select
                name="teacherId"
                value={formData.teacherId}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select Teacher</option>
                {teachers.map(teacher => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
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
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  )}


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
    {/* Filters */}
<div className="flex gap-4 mb-6">
  {/* Class Filter */}
  <div className="w-1/3">
    <select
      className="w-full border border-gray-300 rounded-md p-2"
      value={filters.classId}
      onChange={(e) => setFilters(prev => ({ ...prev, classId: e.target.value }))}
    >
      <option value="">Select Class</option>
      {classes.map(cls => (
        <option key={cls.id} value={cls.id}>
          {cls.className} - {cls.teacherName}
        </option>
      ))}
    </select>
  </div>

  {/* Status Filter */}
  <div className="w-1/3">
    <select
      className="w-full border border-gray-300 rounded-md p-2"
      value={filters.status}
      onChange={(e) => setFilters(prev => ({ 
        ...prev, 
        status: e.target.value as 'All' | 'Active' | 'Inactive' 
      }))}
    >
      <option value="All">All Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  </div>

  {/* Reset Button */}
  <button 
    onClick={() => setFilters({ classId: '', status: 'All' })}
    className="text-indigo-600 hover:text-indigo-800"
  >
    Reset all
  </button>
</div>

      {/* Student list - Empty state */}
      {/* {students.length === 0 && ( */}
        <div className="text-center py-12 bg-gray-50 rounded-md">
          <p className="text-gray-500">No students found with the current filters.</p>
        </div>
     
      {/* )} */}
    </div>
  );
};

export default ClassesList;