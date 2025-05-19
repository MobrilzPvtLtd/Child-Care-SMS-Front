"use client";
import { useState } from "react";
import { X } from "lucide-react";

interface Parent {
  id: string;
  studentName: string;
  parentName: string;
  status: string;
}

interface FilterState {
  student: string;
  parentName: string;
  status: string;
}

const ParentList: React.FC = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  // Add these inside the ParentList component
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [parents, setParents] = useState<Parent[]>([
    {
      id: "1",
      studentName: "John Doe",
      parentName: "Mike Doe",
      status: "Active",
    },
    {
      id: "2",
      studentName: "Jane Smith",
      parentName: "Sarah Smith",
      status: "Pending",
    },
  ]);
  const [filters, setFilters] = useState<FilterState>({
    student: "",
    parentName: "",
    status: "",
  });
  // Add these inside the ParentList component
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleBulkUpload = () => {
    if (selectedFile) {
      // Simulate file processing
      setTimeout(() => {
        // Add dummy data
        const newParents: Parent[] = [
          {
            id: "3",
            studentName: "Alex Johnson",
            parentName: "Mary Johnson",
            status: "Active",
          },
          {
            id: "4",
            studentName: "Emma Davis",
            parentName: "Tom Davis",
            status: "Pending",
          },
        ];
        setParents((prev) => [...prev, ...newParents]);
        setShowBulkModal(false);
        setSelectedFile(null);
      }, 1000);
    }
  };

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Parent List</h1>
        <div className="flex space-x-3">
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            Watch tutorial
          </button>
          <button
            onClick={() => setShowBulkModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Bulk add parents
          </button>
        </div>
      </div>

      {/* Welcome Banner */}
      {isBannerOpen && (
        <div className="bg-[#DDEEEE] border-l-4  border-[#29B9BB] p-4 mb-6 rounded-r-lg flex justify-between items-start">
          <div className="flex">
            <svg
              className="w-6 h-6 text-[#29B9BB] mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Welcome to your Parent list!
              </h2>
              <p className="text-gray-600">
                This is where you will add and manage all parents in your
                school. Explore with the demo students or add parents to your
                own students.
              </p>
              <p className="text-gray-600 mt-1">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-500 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                  <span className="font-medium">Tip:</span> Adding and inviting
                  are two separate steps, you can add them now and invite them
                  later when you are ready.
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsBannerOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      )}

      {/* Filters */}
      {/* Replace the existing filters section */}
      <div className="flex item-center gap-4">
        <div className="w-1/3">
          <select
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            value={filters.student}
            onChange={(e) => handleFilterChange("student", e.target.value)}
          >
            <option value="">Select Student</option>
            {parents.map((parent) => (
              <option key={parent.id} value={parent.studentName}>
                {parent.studentName}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          <select
            className="border w-full border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={filters.parentName}
            onChange={(e) => handleFilterChange("parentName", e.target.value)}
          >
            <option value="">Parent's Name</option>
            {parents.map((parent) => (
              <option key={parent.id} value={parent.parentName}>
                {parent.parentName}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          <select
            className="border w-full border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={filters.status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Bulk Upload Modal */}
      {showBulkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Bulk Upload Parents</h2>
              <button
                onClick={() => setShowBulkModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept=".csv,.xlsx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="fileInput"
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer text-blue-600 hover:text-blue-800"
                >
                  Click to upload
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  {selectedFile
                    ? selectedFile.name
                    : "Supported formats: CSV, XLSX"}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowBulkModal(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkUpload}
                disabled={!selectedFile}
                className={`px-4 py-2 rounded ${
                  selectedFile
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentList;
