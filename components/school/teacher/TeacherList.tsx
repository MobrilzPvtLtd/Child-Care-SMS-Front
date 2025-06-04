"use client";
import { useState, useEffect } from "react";
import { X, ChevronDown, Users } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Teacher from "./Teacher";
import TeacherTable from "./TeacherTable";
import { useUser } from "@/context/UserContext";
import axiosInstance from "@/utils/axios";
import { generatePassword } from "@/utils/getPassword"; 
import ConfirmationModal from "@/components/common/ConfirmationModal";

interface Teacher {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  phoneNumber: string;
  address: string;
}

interface FilterState {
  teacher: string;
  status: "All" | "active" | "inactive";
}

interface TeacherFormData {
  name: string;
  email: string;
  status: "active" | "inactive";
  password: string;
  phoneNumber: string;
  address: string;
}

const TeacherList = () => {
  const { user } = useUser();
  // Add inside TeacherList component
  const [showModal, setShowModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    teacher: "",
    status: "All",
  });

  const [formData, setFormData] = useState<TeacherFormData>({
    name: "",
    email: "",
    status: "active",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const [generatedPassword, setGeneratedPassword] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  // Add these new states after your existing state declarations
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState<Teacher | null>(null);

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

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setGeneratedPassword(newPassword);
    setFormData((prev) => ({
      ...prev,
      password: newPassword,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phoneNumber || (!isEditing && !formData.password)) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const teacherData = {
        ...formData,
        instituteId: user?.id,
      };

      if (isEditing && editingTeacher) {
        // Update existing teacher using the correct endpoint
        const response = await axiosInstance.put(`/teachers/${editingTeacher.id}`, teacherData);
        if (response.data) {
          // Update the teachers list with the updated teacher
          setTeachers(prev => 
            prev.map(teacher => 
              teacher.id === editingTeacher.id ? response.data : teacher
            )
          );
          toast.success("Teacher updated successfully!");
        }
      } else {
        // Create new teacher
        const response = await axiosInstance.post("/teachers", teacherData);
        if (response.data) {
          setTeachers(prev => [...prev, response.data]);
          toast.success("Teacher added successfully!");
        }
      }

      // Reset form and close modal
      setShowModal(false);
      resetForm();
    } catch (error: any) {
      toast.error(error.response?.data?.message || `Failed to ${isEditing ? 'update' : 'add'} teacher`);
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await axiosInstance.get("/teachers");
      if (response.data) {
        setTeachers(response.data);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to fetch teachers");
    }
  };

  // Add useEffect to fetch teachers on component mount
  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleEdit = (teacher: Teacher) => {
    setIsEditing(true);
    setEditingTeacher(teacher);
    setFormData({
      name: teacher.name,
      email: teacher.email,
      status: teacher.status.toLowerCase() as "active" | "inactive",
      password: "", // Usually don't pre-fill password
      phoneNumber: teacher.phoneNumber,
      address: teacher.address || "",
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      status: "active",
      password: "",
      phoneNumber: "",
      address: "",
    });
    setIsEditing(false);
    setEditingTeacher(null);
    setGeneratedPassword("");
  };

  // Add this new handler function
  const handleDelete = async () => {
    if (!teacherToDelete) return;

    try {
      await axiosInstance.delete(`/teachers/${teacherToDelete.id}`);
      setTeachers(prev => prev.filter(teacher => teacher.id !== teacherToDelete.id));
      toast.success("Teacher deleted successfully!");
      setShowDeleteModal(false);
      setTeacherToDelete(null);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to delete teacher");
    }
  };

  // Add this new handler for delete button click
  const handleDeleteClick = (teacher: Teacher) => {
    setTeacherToDelete(teacher);
    setShowDeleteModal(true);
  };

  // Add this new function to filter teachers
  const getFilteredTeachers = () => {
    return teachers.filter((teacher) => {
      // Filter by teacher name/id
      if (filters.teacher && teacher.id.toString() !== filters.teacher) {
        return false;
      }
      
      // Filter by status
      if (filters.status !== "All" && teacher.status.toLowerCase() !== filters.status.toLowerCase()) {
        return false;
      }
      
      return true;
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <ToastContainer />
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
              <h2 className="text-xl font-bold">{isEditing ? "Edit" : "Add New"} Teacher</h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-0.5">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1.5 px-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-0.5">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1.5 px-2"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-0.5">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-2"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-0.5">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md py-1.5 px-2"
                      required
                    />
                  </div>
                </div>

                {!isEditing && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password*
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md py-1.5 px-2"
                        required
                      />
                      <button
                        type="button"
                        onClick={handleGeneratePassword}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-0.5">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1.5 px-2"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  {isEditing ? "Update" : "Add"} Teacher
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
            onChange={(e) => {
              console.log('Selected teacher ID:', e.target.value);
              setFilters((prev) => ({ ...prev, teacher: e.target.value }))
            }}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">All Teachers</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
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
                status: e.target.value as "All" | "active" | "inactive",
              }))
            }
            className="w-full border border-indigo-200 bg-indigo-50 rounded-md p-2"
          >
            <option value="All">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
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
      {teachers.length > 0 ? (
        <div className="text-center py-2 bg-gray-50 rounded-md">
          <TeacherTable 
            teachers={getFilteredTeachers()} 
            onEdit={handleEdit} 
            onDelete={handleDeleteClick} 
          />
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-md">
          <p className="text-gray-500">No teachers found</p>
        </div>
      )}

      {/* Delete confirmation modal */}
      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setTeacherToDelete(null);
        }}
        onConfirm={handleDelete}
        title="Delete Teacher"
        message={`Are you sure you want to delete ${teacherToDelete?.name}? This action cannot be undone.`}
      />
    </div>
  );
};

export default TeacherList;
