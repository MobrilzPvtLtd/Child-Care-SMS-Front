'use client';

import React, { useState } from 'react';

interface AddParentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (parent: { firstName: string; lastName: string; email: string }) => void;
}

const ParentModal: React.FC<AddParentModalProps> = ({ isOpen, onClose, onSave }) => {
  const [tab, setTab] = useState<'New' | 'Existing'>('New');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ firstName, lastName, email });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Parent </h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            className={`flex-1 py-2 text-center ${tab === 'New' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setTab('New')}
          >
            New
          </button>
          <button
            className={`flex-1 py-2 text-center ${tab === 'Existing' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setTab('Existing')}
          >
            Existing
          </button>
        </div>

        {/* Form */}
        {tab === 'New' && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Parent</label>
              <select className="w-full p-2 border rounded-md text-gray-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border rounded-md placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border rounded-md placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md placeholder-gray-400"
              />
            </div>
            <div>
              <button className="text-blue-600 hover:underline">Switch to mobile phone</button>
            </div>
          </div>
        )}

        {/* Existing Tab (Placeholder) */}
        {tab === 'Existing' && (
          <div className="text-gray-500">
            <p>Select an existing parent (implementation pending)</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParentModal;