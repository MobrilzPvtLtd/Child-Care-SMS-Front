import React from 'react';
import { Building2, ChevronRight } from 'lucide-react';

interface SubsidiesProps {
  className?: string;
}

const Subsidies: React.FC<SubsidiesProps> = ({ className = '' }) => {
  return (
    <div className={`min-h-screen bg-gray-50 p-6 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Subsidies</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
          Add agency
        </button>
      </div>

      {/* Table Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-gray-100 border-b border-gray-200 text-sm font-medium text-gray-700">
          <div>Agency</div>
          <div>Students</div>
          <div>Open invoices</div>
          <div>Unpaid</div>
          <div>Available payments</div>
          <div>Balance</div>
          <div>Actions</div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 px-6">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-gray-400" />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            You have no agencies
          </h3>
          
          <p className="text-gray-500 text-center mb-6 max-w-md">
            Get started with tracking your expected and received subsidy payments.
          </p>
          
          <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
            Add an agency
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subsidies;