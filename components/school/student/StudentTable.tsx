"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

interface Studentdata {
  id: string;
  name: string;
  room: string;
  status: "Active" | "Inactive" | "In Room" | "Absent";
}

interface StudentTableProps {
  students: Studentdata[];
  onCheckIn?: (index: number) => void;
  onCheckOut?: (index: number) => void;
  onMarkAbsent?: (index: number) => void;
  onMoveRoom?: (index: number, newRoom: string) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({
  students,
  onCheckIn,
  onCheckOut,
  onMarkAbsent,
}) => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <div className="flex items-center space-x-1 text-blue-600">
            <span>First name</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-gray-600">Student</th>
            <th className="py-2 text-gray-600">Status</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <span className="text-blue-600">{student.name}</span>
              </td>
              <td className="py-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm ${
                    student.status === "In Room"
                      ? "bg-teal-100 text-teal-800"
                      : student.status === "Absent"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {student.status}
                </span>
              </td>
              {/* <td className="py-3 flex space-x-2 justify-end">
                {student.status === "In Room" ? (
                  <>
                    <select className="border rounded px-2 py-1 text-sm text-gray-600">
                      <option>Move room</option>
                    </select>
                    <button
                      // onClick={() => onCheckOut(index)}
                      className="flex items-center space-x-1 border rounded px-3 py-1 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12H9m6 0a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Check out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      // onClick={() => onMarkAbsent(index)}
                      className="flex items-center space-x-1 border rounded px-3 py-1 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span>Mark absent</span>
                    </button>
                    <button
                      // onClick={() => onCheckIn(index)}
                      className="flex items-center space-x-1 border rounded px-3 py-1 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Check in</span>
                    </button>
                  </>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right text-sm text-gray-600">
        {students.length} students
      </div>
    </div>
  );
};

export default StudentTable;