"use client"
import React, { useState } from "react";
import {
  FaPlus,
  FaTimes,
  FaRegCalendarAlt,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Interfaces
interface Student {
  id: string;
  name: string;
  address: string;
  dob: string;
  gender: string;
  instituteId: number;
  parentId: number;
  classId: number;
  status: "Prospect" | "Toured" | "Applied" | "Waitlist";
}

interface FilterState {
  search: string;
  program: string;
  status: string[];
  fromDate: string;
  toDate: string;
  minAge: string;
  maxAge: string;
}

interface StatCardProps {
  count: number;
  label: string;
  bgColor: string;
  textColor: string;
}

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({
  count,
  label,
  bgColor,
  textColor,
}) => (
  <div className={`rounded-lg p-6 flex flex-col items-center ${bgColor}`}>
    <span className={`text-6xl font-bold mb-2 ${textColor}`}>{count}</span>
    <span className="text-gray-500">{label}</span>
  </div>
);

// Main Dashboard Component
const AdmissionsDashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [SearchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    dob: "",
    gender: "",
    instituteId: "",
    parentId: "",
    classId: "",
  });
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    program: "",
    status: [],
    fromDate: "",
    toDate: "",
    minAge: "",
    maxAge: "",
  });

  const stats = [
    {
      count: 0,
      label: "Total Students",
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
    },
    {
      count: 0,
      label: "Prospects",
      bgColor: "bg-green-50",
      textColor: "text-green-500",
    },
    {
      count: 0,
      label: "Toured",
      bgColor: "bg-amber-50",
      textColor: "text-amber-500",
    },
    {
      count: 0,
      label: "Applied",
      bgColor: "bg-purple-50",
      textColor: "text-purple-500",
    },
    {
      count: 0,
      label: "Waitlist",
      bgColor: "bg-pink-50",
      textColor: "text-pink-500",
    },
  ];

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

    if (!formData.name || !formData.dob || !formData.gender) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newStudent: Student = {
      id: Date.now().toString(),
      ...formData,
      instituteId: Number(formData.instituteId),
      parentId: Number(formData.parentId),
      classId: Number(formData.classId),
      status: "Prospect",
    };

    setStudents((prev) => [...prev, newStudent]);
    setShowModal(false);
    setFormData({
      name: "",
      address: "",
      dob: "",
      gender: "",
      instituteId: "",
      parentId: "",
      classId: "",
    });

    toast.success("Student added successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Admissions Dashboard
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800"
        >
          <FaPlus className="h-5 w-5" />
          <span>New Student</span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Student</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth*
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender*
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Class
                  </label>
                  <input
                    type="number"
                    name="classId"
                    value={formData.classId}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent ID
                  </label>
                  <input
                    type="number"
                    name="parentId"
                    value={formData.parentId}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institute ID
                </label>
                <input
                  type="number"
                  name="instituteId"
                  value={formData.instituteId}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
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
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            count={stat.count}
            label={stat.label}
            bgColor={stat.bgColor}
            textColor={stat.textColor}
          />
        ))}
      </div>

      {/* Filter Controls */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
<div className="relative">
<div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
<span className="text-gray-500">Search students...</span>
<FaChevronDown className="h-5 w-5 text-gray-400" />
</div>
</div>

<div className="relative">
<div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
<span className="text-gray-500">Program</span>
<FaChevronDown className="h-5 w-5 text-gray-400" />
</div>
</div>

<div className="relative">
<div className="flex items-center justify-between w-full border border-blue-300 rounded-md p-2 pl-4 bg-blue-50">
<span className="text-blue-700">Student Status (5)</span>
<FaTimes className="h-5 w-5 text-blue-700" />
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="relative">
<div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
<span className="text-gray-500">From Desired Start Date</span>
<FaRegCalendarAlt className="h-5 w-5 text-gray-400" />
</div>
</div>

<div className="relative">
<div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
<span className="text-gray-500">To Desired Start Date</span>
<FaRegCalendarAlt className="h-5 w-5 text-gray-400" />
</div>
</div>

<div className="relative">
<div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
<span className="text-gray-500">Min Age</span>
<FaChevronDown className="h-5 w-5 text-gray-400" />
</div>
</div>

<div className="relative">
<div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 pl-4">
<span className="text-gray-500">Max Age</span>
<FaChevronDown className="h-5 w-5 text-gray-400" />
</div>
</div>
</div> */}

      <div className="grid grid-cols-1    gap-4 mb-4">
        <div className="flex justify-between gap-4">
          <div className="w-1/4">
            <FaSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={14}
            />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md pr-10"
              value={SearchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
           
           

          </div>
          <div className="w-1/4">
            <select
              value={filters.program}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, program: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">All Programs</option>
              <option value="program1">Program 1</option>
              <option value="program2">Program 2</option>
            </select>
          </div>
          <div className="w-1/2">
            <select
              // multiple
              // value={filters.status}
              // onChange={(e) => {
              //   const values = Array.from(
              //     e.target.selectedOptions,
              //     (option) => option.value
              //   );
              //   setFilters((prev) => ({ ...prev, status: values }));
              // }}
              className="w-full border border-blue-300 rounded-md p-2 bg-blue-50"
            >
              <option value="Prospect">Prospect</option>
              <option value="Toured">Toured</option>
              <option value="Applied">Applied</option>
              <option value="Waitlist">Waitlist</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="w-1/4 relative">
            <input
              type="date"
              value={filters.fromDate}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, fromDate: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2 pl-10"
              placeholder="Start Date"
            />
            <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <div className="w-1/4 relative">
            <input
              type="date"
              value={filters.toDate}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, toDate: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2 pl-10"
              placeholder="End Date"
            />
            <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <div className="w-1/4">
            <input
              type="text"
              placeholder="Min Age"
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2 pl-4"
            />
          </div>
          <div className="w-1/4">
            <input
              type="text"
              placeholder="Max Age"
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2 pl-4"
            />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdmissionsDashboard;
