'use client'; // if using app directory

import React from 'react';

export default function ActivateAccount() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Activate Account</h1>

      {/* Warning Box */}
      <div className="bg-orange-100 text-orange-800 border border-orange-300 rounded-md px-6 py-4 flex items-start mb-10">
        <div className="text-2xl mr-3">⚠️</div>
        <div>
          <p className="font-semibold mb-1">You are not set up to receive online payments yet.</p>
          <p>Complete your billing settings below to begin receiving payments from payers online.</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="text-center mt-24">
        <h2 className="text-lg font-semibold mb-2">
          Add information to start accepting money
        </h2>
        <p className="text-sm text-gray-700 max-w-xl mx-auto mb-6">
          brightwheel partners with Stripe to help you receive payments and keep your personal bank and details secure.
        </p>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-indigo-700 transition">
          Add information
        </button>
      </div>
    </div>
  );
}
