import React from 'react';

interface Teacher {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

interface TeacherTableProps {
  teachers: Teacher[];
}

const TeacherTable: React.FC<TeacherTableProps> = ({ teachers }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-gray-600">Name</th>
            <th className="py-2 text-gray-600">Email</th>
            <th className="py-2 text-gray-600">Role</th>
            <th className="py-2 text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {teachers?.map((teacher) => (
            <tr key={teacher.id} className="border-b">
              <td className="py-3">
                <span className="text-gray-500">{teacher.name}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{teacher.email}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{teacher.role}</span>
              </td>
              <td className="py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    teacher.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {teacher.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right text-sm text-gray-600">
        {teachers.length} Teachers
      </div>
    </div>
  );
};

export default TeacherTable;