import React from 'react';
// import { Badge } from '@/components/ui/badge';


interface Room {
  id: string;
  RoomName: string;
  description: string;
  teacherId: string;
  teacherName: string;
  instituteId: string;
}


interface ClassTableProps {
  rooms: Room[];
}

const RoomsTable: React.FC<ClassTableProps> = ({ rooms }) => {
  return (
    
     <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-gray-600">Class</th>
            <th className="py-2 text-gray-600">Description</th>
            <th className="py-2 text-gray-600">Teacher</th>
            {/* <th className="py-2 text-gray-600">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {rooms?.map((room) => (
            <tr key={room.id} className="border-b">
              <td className="py-3">
                <span className="text-gray-500">{room.RoomName}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{room.description}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{room.teacherName}</span>
              </td>
              {/* <td className="py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    classes.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {classes.status}
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right text-sm text-gray-600">
        {rooms.length} Teachers
      </div>
    </div>
  );
};

export default RoomsTable;