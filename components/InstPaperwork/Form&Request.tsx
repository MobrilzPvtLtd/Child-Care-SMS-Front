import React, { useState } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, X, Info } from 'lucide-react';

interface FormItem {
  id: string;
  name: string;
  description: string;
  type: string;
  reviewsNeeded: number;
  status: 'Shared' | 'Unshared';
}

const FormsAndRequests: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilters, setStatusFilters] = useState<string[]>(['Shared', 'Unshared']);
  const [sortBy, setSortBy] = useState('Name');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);

  const forms: FormItem[] = [
    {
      id: '1',
      name: 'Student and guardian information',
      description: 'Template for commonly requested information.',
      type: 'Form',
      reviewsNeeded: 0,
      status: 'Unshared'
    }
  ];

  const filteredForms = forms.filter(form => 
    form.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    statusFilters.includes(form.status)
  );

  const removeStatusFilter = (status: string) => {
    setStatusFilters(prev => prev.filter(s => s !== status));
  };

  const toggleStatusFilter = (status: string) => {
    setStatusFilters(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-900">Forms & Requests</h1>
          <div className="relative">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              Create new
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search forms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 min-w-[120px]"
              >
                <span className="text-sm text-gray-600">Status</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              
              {showStatusDropdown && (
                <div className="absolute top-full mt-1 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                  <div className="p-2">
                    {['Shared', 'Unshared'].map(status => (
                      <label key={status} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={statusFilters.includes(status)}
                          onChange={() => toggleStatusFilter(status)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {statusFilters.length > 0 && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-gray-600">Status</span>
              {statusFilters.map(status => (
                <span
                  key={status}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {status}
                  <button
                    onClick={() => removeStatusFilter(status)}
                    className="hover:bg-blue-200 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={() => setStatusFilters([])}
                className="text-sm text-gray-500 hover:text-gray-700 ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Sort and Pagination Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Order by:</span>
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
              >
                {sortBy}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showSortDropdown && (
                <div className="absolute top-full mt-1 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                  <div className="p-1">
                    {['Name', 'Type', 'Status', 'Reviews'].map(option => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setShowSortDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Showing 1 - 1 of 1</span>
            <div className="flex items-center gap-1">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Form</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Type</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Reviews needed</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Status</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredForms.map((form) => (
                <tr key={form.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                          {form.name}
                        </h3>
                        <Info className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{form.description}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{form.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{form.reviewsNeeded}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                      {form.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="relative">
                      <button
                        onClick={() => setShowActionsDropdown(!showActionsDropdown)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                      >
                        Actions
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {showActionsDropdown && (
                        <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                          <div className="p-1">
                            <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                              Edit
                            </button>
                            <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                              Share
                            </button>
                            <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                              Duplicate
                            </button>
                            <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FormsAndRequests;