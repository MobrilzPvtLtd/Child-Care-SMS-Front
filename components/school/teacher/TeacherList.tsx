"use client";
import { useState } from "react";
import { X, ChevronDown, Users } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentTable from "../student/StudentTable";

interface Teacher {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

interface FilterState {
  teacher: string;
  status: "All" | "Active" | "Inactive";
}

const TeacherList = () => {
  // Add inside TeacherList component
  const [showModal, setShowModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    teacher: "",
    status: "All",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active" as const,
  });

  // Add inside TeacherList component
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.role) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Add new teacher
    const newTeacher: Teacher = {
      id: Date.now().toString(),
      ...formData,
    };

    setTeachers((prev) => [...prev, newTeacher]);
    setShowModal(false);
    setFormData({ name: "", email: "", role: "", status: "Active" });

    toast.success("Teacher added successfully!");
  };
  return (
    <div className="max-w-6xl mx-auto p-4">
      <ToastContainer/>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Teacher list</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-50">
            Export Roster
          </button>
          <div className="relative">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-700"
            >
              Add Teacher
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Teacher</h2>
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
                    Name*
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
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role*
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Lead Teacher">Lead Teacher</option>
                    <option value="Assistant Teacher">Assistant Teacher</option>
                    <option value="Substitute">Substitute</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
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
                  Add Teacher
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
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                Welcome to your Teacher list!
              </h2>
              <p className="text-gray-600">
                This is where you will add and manage all Teacher in your
                school. Explore flowysis's functionality with the demo students.
              </p>
              <button className="text-indigo-600 hover:underline mt-2">
                Learn more
              </button>
            </div>
          </div>
          <button
            onClick={() => setShowWelcome(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
      )}
      {/* Filters */}
  
 
      <div className="flex gap-4 mb-6">
        <div className="w-1/3 relative">
          <select
            value={filters.teacher}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, teacher: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name} - {teacher.role}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/3 relative">
          <select
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                status: e.target.value as "All" | "Active" | "Inactive",
              }))
            }
            className="w-full border border-indigo-200 bg-indigo-50 rounded-md p-2"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button
          onClick={() => setFilters({ teacher: "", status: "All" })}
          className="text-indigo-600 hover:text-indigo-800 ml-2"
        >
          Reset all
        </button>
      </div>
      {/* Student list - Empty state */}
      {/* {students.length === 0 && ( */}
      <div className="text-center py-12 bg-gray-50 rounded-md">
        <p className="text-gray-500">
          {/* // <StudentTable /> */}
          No students found with the current filters.
        </p>
      </div>
      {/* )} */}
    </div>
  );
};

export default TeacherList;
