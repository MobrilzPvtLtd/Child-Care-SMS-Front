"use client";
import React, { useState } from 'react';
import { FaCheckSquare, FaUsers, FaBuilding } from 'react-icons/fa';

const roles = [
  {
    id: 'admin',
    label: "I'm an admin or director",
    icon: <FaBuilding className="w-8 h-8 text-indigo-500" />,
  },
  {
    id: 'staff',
    label: "I'm a staff member",
    icon: <FaCheckSquare className="w-8 h-8 text-indigo-500" />,
  },
  {
    id: 'parent',
    label: "I'm a parent or guardian",
    icon: <FaUsers className="w-8 h-8 text-indigo-500" />,
  },
];

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
        Tour the easiest all-in-one <br className="hidden sm:block" />
        <span className="text-indigo-600">childcare and preschool app</span>
      </h1>

      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 md:p-10">
        <h2 className="text-lg md:text-xl font-semibold text-center mb-4">
          First, tell us about yourself.
        </h2>

        <div className="flex justify-center space-x-2 mb-2">
          <span className="w-6 h-1 rounded bg-indigo-500" />
          <span className="w-6 h-1 rounded bg-gray-300" />
          <span className="w-6 h-1 rounded bg-gray-300" />
          <span className="w-6 h-1 rounded bg-gray-300" />
        </div>

        <p className="text-center text-xs text-gray-500 mb-6">1 of 6</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`border rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 ${
                selectedRole === role.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
              }`}
            >
              <div className="mb-2">{role.icon}</div>
              <p className="text-sm font-medium text-center">
                {role.label.split(/(\s+)/).map((word, index) => (
                  <span
                    key={index}
                    className={
                      ['admin', 'staff', 'parent'].some((roleKey) =>
                        role.label.toLowerCase().includes(roleKey)
                      ) && word.toLowerCase() === role.id
                        ? 'font-semibold'
                        : ''
                    }
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-2 rounded-full transition-shadow shadow-md"
            disabled={!selectedRole}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
