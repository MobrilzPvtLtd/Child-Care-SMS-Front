import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
}
interface AddStudentsProps {
  onClose: () => void;
}

const AddStudents: React.FC<AddStudentsProps> = ({onClose}) => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, firstName: '', lastName: '', gender: '' },
    { id: 2, firstName: '', lastName: '', gender: '' },
  ]);

  const addStudent = () => {
    setStudents([...students, { id: students.length + 1, firstName: '', lastName: '', gender: '' }]);
  };

  const removeStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleInputChange = (id: number, field: keyof Student, value: string) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, [field]: value } : student
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      try {
      // Add your API call here to save students
      console.log('Students to save:', students);
      
      // Show success toast
      toast.success('Students added successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Close the modal
      onClose();
      
    } catch (error) {
      toast.error('Failed to add students. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <a href="/school/students" className="text-blue-600 hover:underline">
          ← Back to student list
        </a>
        <h1 className="text-2xl font-bold">Add New Students</h1>
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:underline">
            Help
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Bulk add students
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4 rounded">
        <p>
          Need to add prospective students?{' '}
          <a href="/admission-dashboard" className="text-blue-600 hover:underline">
            Create a new student in Admissions
          </a>
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-t">
          <div className="font-semibold">First Name</div>
          <div className="font-semibold">Last Name</div>
          <div className="font-semibold">Gender</div>
        </div>

        {/* Student Rows */}
        {students.map((student, index) => (
          <div key={student.id} className="grid grid-cols-3 gap-4 p-4 border-b">
            <div className="flex items-center">
              <span className="mr-2">{index + 1}</span>
              <input
                type="text"
                placeholder="First Name"
                value={student.firstName}
                onChange={(e) => handleInputChange(student.id, 'firstName', e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={student.lastName}
                onChange={(e) => handleInputChange(student.id, 'lastName', e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={student.gender}
                onChange={(e) => handleInputChange(student.id, 'gender', e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <button
                type="button"
                onClick={() => removeStudent(student.id)}
                className="text-red-600 hover:text-red-700"
              >
                <FaTrash/>
              </button>
            </div>
          </div>
        ))}

        {/* Add Another Student Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={addStudent}
            className="text-blue-600 hover:underline flex items-center"
          >
            <span className="mr-2">+</span> Add Another Student
          </button>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-200 text-blue-800 px-4 py-2 rounded hover:bg-blue-300"
          >
            Save Students
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudents;