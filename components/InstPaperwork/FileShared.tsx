'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

interface FileData {
  id: string
  fileName: string
  type: string
  added: string
  sharedWith: string
}

interface SharedFilesProps {
  files?: FileData[]
}

const SharedFiles: React.FC<SharedFilesProps> = ({ files = [] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(25)
  
  const totalPages = Math.ceil(files.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentFiles = files.slice(startIndex, endIndex)
  
  const handleAddNew = () => {
    // Handle add new file logic
    console.log('Add new file clicked')
  }
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-900">Shared Files</h1>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus size={20} />
          Add New
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-100 border-b border-gray-200">
          <div className="font-medium text-gray-700">File Name</div>
          <div className="font-medium text-gray-700">Type</div>
          <div className="font-medium text-gray-700">Added</div>
          <div className="font-medium text-gray-700">Shared With</div>
        </div>

        {/* Table Body */}
        <div className="min-h-[400px]">
          {currentFiles.length > 0 ? (
            currentFiles.map((file) => (
              <div key={file.id} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="text-gray-900">{file.fileName}</div>
                <div className="text-gray-600">{file.type}</div>
                <div className="text-gray-600">{file.added}</div>
                <div className="text-gray-600">{file.sharedWith}</div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px] text-gray-500">
              <div className="text-lg mb-2">Upload files and share them with parents and staff at your school</div>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Page size</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
              setCurrentPage(1)
            }}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {files.length > 0 ? `${startIndex + 1} - ${Math.min(endIndex, files.length)}` : '1 - 0'}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1 || files.length === 0}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages || files.length === 0}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SharedFiles

// Example usage with sample data:
/*
const sampleFiles: FileData[] = [
  {
    id: '1',
    fileName: 'School Newsletter March 2024.pdf',
    type: 'PDF',
    added: '2024-03-15',
    sharedWith: 'All Parents'
  },
  {
    id: '2',
    fileName: 'Event Photos.zip',
    type: 'ZIP',
    added: '2024-03-10',
    sharedWith: 'Grade 5 Parents'
  }
]

// In your page component:
<SharedFiles files={sampleFiles} />
*/