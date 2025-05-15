"use client";
import { useState } from "react";
import { X, ChevronDown, Users } from "lucide-react";
import StudentTable from "./StudentTable";
import AddStudents from "./AddStudent";

// TypeScript interfaces
interface Student {
  id: string;
  name: string;
  room: string;
  status: "Active" | "Inactive";
}

interface FilterState {
  studentSearch: string;
  status: "All" | "Active" | "Inactive";
}

interface StudentFormData {
  firstName: string;
  lastName: string;
  gender: string;
}

const StudentList = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [students, setStudents] = useState<Student[]>([
    { id: "1", name: "John Doe", room: "Room A", status: "Active" },
    { id: "2", name: "Jane Smith", room: "Room B", status: "Inactive" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [showManualModal, setShowManualModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [formData, setFormData] = useState<StudentFormData>({
    firstName: "",
    lastName: "",
    gender: "",
  });
  const [filters, setFilters] = useState<FilterState>({
    studentSearch: "",
    status: "All",
  });
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  // Filter handlers
  const handleStatusChange = (status: "All" | "Active" | "Inactive") => {
    setFilters((prev) => ({ ...prev, status }));
    setIsStatusDropdownOpen(false);
  };

  const handleResetFilters = () => {
    setFilters({
      studentSearch: "",
      status: "All",
    });
  };

  // Filter logic
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(filters.studentSearch.toLowerCase());
    const matchesStatus =
      filters.status === "All" || student.status === filters.status;
    return matchesSearch && matchesStatus;
  });

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudent: Student = {
      id: String(students.length + 1),
      name: `${formData.firstName} ${formData.lastName}`,
      room: "Room TBD",
      status: "Active",
    };
    setStudents((prev) => [...prev, newStudent]);
    setShowManualModal(false);
    setFormData({ firstName: "", lastName: "", gender: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Student list</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-50">
            Export Roster
          </button>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-700"
              aria-expanded={isOpen}
              aria-label="Add students"
            >
              Add students
              <ChevronDown size={16} />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowManualModal(true);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Add Manually
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowBulkModal(true);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Add Bulk
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Welcome message card */}
      {showWelcome && (
        <div className="bg-[#DDEEEE] border-l-4 border-[#29B9BB] p-4 mb-6 rounded-md flex justify-between items-start">
          <div className="flex gap-3">
            <Users className="text-[#29B9BB] mt-1" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                Welcome to your student list!
              </h2>
              <p className="text-gray-600">
                This is where you will add and manage all students in your school.
                Explore brightwheel's functionality with the demo students.
              </p>
              <button className="text-indigo-600 hover:underline mt-2">
                Learn more
              </button>
            </div>
          </div>
          <button
            onClick={() => setShowWelcome(false)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close welcome message"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-4 mb-6 items-center">
        <div className="w-1/3">
          <div className="border border-gray-300 rounded-md p-2">
            <input
              type="text"
              placeholder="Search students..."
              value={filters.studentSearch}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  studentSearch: e.target.value,
                }))
              }
              className="w-full outline-none"
              aria-label="Search students"
            />
          </div>
        </div>
        <div className="w-1/3 relative">
          <button
            className="w-full border border-indigo-200 bg-indigo-50 rounded-md p-2 flex items-center"
            onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
            aria-expanded={isStatusDropdownOpen}
            aria-label="Select student status"
          >
            <span className="mr-1 text-gray-700">Student status</span>
            {filters.status !== "All" && (
              <div className="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 ml-2 text-sm">
                <span className="text-gray-800">{filters.status}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStatusChange("All");
                  }}
                  aria-label={`Remove ${filters.status} filter`}
                >
                  <X size={14} className="ml-1 text-gray-500" />
                </button>
              </div>
            )}
            <div className="ml-auto flex items-center">
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </button>
          {isStatusDropdownOpen && (
            <div className="absolute w-full mt-2 bg-white rounded-md shadow-lg z-10">
              {["All", "Active", "Inactive"].map((status) => (
                <button
                  key={status}
                  onClick={() =>
                    handleStatusChange(status as "All" | "Active" | "Inactive")
                  }
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={handleResetFilters}
          className="text-indigo-600 hover:text-indigo-800"
          aria-label="Reset all filters"
        >
          Reset all
        </button>
      </div>

      {/* Modals */}
      {showManualModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-6xl p-6 rounded-lg">
            {/* <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add Student</h2>
              <button
                onClick={() => setShowManualModal(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleManualSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowManualModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Add Student
                </button>
              </div>
            </form> */}
            <AddStudents/>
          </div>
        </div>
      )}

      {showBulkModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Bulk Add Students</h2>
              <button
                onClick={() => setShowBulkModal(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Upload CSV
                </label>
                <input
                  type="file"
                  accept=".csv"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowBulkModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Student Table */}
      <StudentTable students={filteredStudents} />
    </div>
  );
};

export default StudentList;