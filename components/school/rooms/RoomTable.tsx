import React from 'react';
import { Pencil, Trash2 } from "lucide-react";

interface Room {
  id: string;
  name: string;
  description: string;
  teacherId: number;
  teacherName: string;
  instituteId: number;
  enrollmentId: number;
  enrollmentName: string;
}

interface RoomsTableProps {
  rooms: Room[];
  onEdit: (room: Room) => void;
  onDelete: (roomId: string) => void;
}

const RoomsTable: React.FC<RoomsTableProps> = ({ rooms, onEdit, onDelete }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-gray-600">Room Name</th>
            <th className="py-2 text-gray-600">Description</th>
            <th className="py-2 text-gray-600">Teacher</th>
            <th className="py-2 text-gray-600">Enrollment</th>
            <th className="py-2 text-gray-600 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms?.map((room) => (
            <tr key={room.id} className="border-b">
              <td className="py-3">
                <span className="text-gray-800 font-medium">{room.name}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{room.description}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{room.teacherName}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{room.enrollmentName}</span>
              </td>
              <td className="py-3 flex gap-3 justify-center items-center">
                <button
                  onClick={() => onEdit(room)}
                  className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  aria-label="Edit"
                  title="Edit"
                  type="button"
                >
                  <Pencil size={18} />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => onDelete(room.id)}
                  className="text-red-500 hover:text-red-700 flex items-center gap-1"
                  aria-label="Delete"
                  title="Delete"
                  type="button"
                >
                  <Trash2 size={18} />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right text-sm text-gray-600">
        {rooms.length} {rooms.length === 1 ? 'Room' : 'Rooms'}
      </div>
    </div>
  );
};

export default RoomsTable;