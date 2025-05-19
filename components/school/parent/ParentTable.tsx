'use client'
import React, { useState } from 'react';
import ParentModal from './ParentModal';

interface Student {
  name: string;
  room: string;
}

const students: Student[] = [
  { name: 'Alex Demo', room: 'Demo Room' },
  { name: 'Mia Demo', room: 'Demo Room' },
  { name: 'Russ Demo', room: 'Demo Room' },
];

const ParentTable: React.FC = () => {
  const [parentModal, setParentModal] = useState(false);

  const openModal = () => {
    setParentModal(true);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
            <th className="py-3 px-6 text-left">Student</th>
            <th className="py-3 px-6 text-left">Parents</th>
            <th className="py-3 px-6 text-left">Signed Up</th>
            <th className ="py-3 px-6 text-left">Bill Pay</th>
            <th className="py-3 px-6 text-left">Autopay</th>
            <th className="py-3 px-6 text-left">Check-In Code</th>
          </tr>
          <tr className="bg-gray-50 text-blue-600 text-sm">
            <th className="py-2 px-6"></th>
            <th className="py-2 px-6"></th>
            {/* <th className="py-2 px-6">
              <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-50">
                Invite all
                <span className="ml-1 text-xs">View invite</span>
              </button>
            </th> */}
            {/* <th className="py-2 px-6">
              <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-50">
                Invite all
                <span className="ml-1 text-xs">View invite</span>
              </button>
            </th>
            <th className="py-2 px-6">
              <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-50">
                Invite all
                <span className="ml-1 text-xs">View invite</span>
              </button>
            </th>
            <th className="py-2 px-6">
              <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-50">
                Reveal all
              </button>
            </th> */}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {students.map((student, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="text-gray-500">{student.room}</p>
                </div>
              </td>
              <td className="py-3 px-6">
                <button onClick={openModal} className="border border-blue-300 text-blue-600 px-3 py-1 rounded hover:bg-blue-50">
                  Add parent
                </button>
              </td>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6"></td>
            </tr>
          ))}
        </tbody>
      </table>
      {parentModal ? (
        <ParentModal
          isOpen={parentModal}
          onClose={() => setParentModal(false)}
          onSave={(parent) => {
            console.log('Saved parent:', parent);
            setParentModal(false); // Close modal after saving
          }}
        />
      ) : null}
    </div>
  );
};

export default ParentTable;