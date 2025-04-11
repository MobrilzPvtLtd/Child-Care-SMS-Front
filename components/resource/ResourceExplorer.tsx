"use client"
import { Search, ChevronDown, ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';

const ResourceExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  
  const categories = [
    'All categories',
    'Engaging families',
    'Hiring + developing staff',
    'Running your business',
    'Supporting students'
  ];
  
  const resources = [
    {
      id: 1,
      title: 'Parent Complaint Resolution Guide for Childcare Providers',
      description: 'A free guide to help you resolve parent and guardian complaints with professionalism and care.',
      image: '/api/placeholder/400/250',
      backgroundColor: '#FF7B7B',
      categories: ['Families'],
      type: 'Guide',
      action: {
        type: 'download',
        label: 'Download'
      }
    },
    {
      id: 2,
      title: 'How to Create a Preschool Newsletter: A Guide for Teachers',
      description: 'Newsletters are an effective communication tool that keep families engaged and informed with what\'s happening in the classroom. Check out these tips and templates to make your own.',
      image: '/api/placeholder/400/250',
      categories: ['Families'],
      type: 'Blog post',
      action: {
        type: 'readNow',
        label: 'Read Now'
      }
    },
    {
      id: 3,
      title: 'Tips for Potty Training Your Child: A Practical Guide',
      description: 'With potty training, patience is key. Here are some tips to make the process easier.',
      image: '/api/placeholder/400/250',
      categories: ['Students'],
      type: 'Blog post',
      action: {
        type: 'readNow',
        label: 'Read Now'
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto flex justify-center flex-col p-6">
      {/* Search Banner */}
      <div className="bg-blue-800  rounded-lg p-6 mx-24 mb-8">
        <h2 className="text-white text-xl font-bold mb-4">Ready to learn more? Explore all of our resources by topic.</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative ">
            <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search for any topic..." 
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white "
            />
          </div>
          <div className="flex gap-4">
            <button className="bg-white px-4 py-2 rounded flex items-center justify-between min-w-40">
              Filter by topic
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            <button className="bg-white px-4 py-2 rounded flex items-center justify-between min-w-40">
              Filter by type
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category
                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                : 'border border-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative">
              <div 
                className="h-24 p-4"
                style={{ backgroundColor: resource.backgroundColor || '#f0f0f0' }}
              >
                <h3 className="text-white font-bold">{resource.title.split(':')[0]}</h3>
              </div>
              <img 
                src={resource.image} 
                alt={resource.title} 
                className="w-full h-40 object-cover"
              />
            </div>
            
            <div className="p-4">
              <div className="flex gap-2 mb-3">
                {resource.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="text-blue-600 text-xs"
                  >
                    {category}
                  </span>
                ))}
                <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {resource.description}
              </p>
              
              {resource.action.type === 'download' ? (
                <button className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-1 rounded text-sm">
                  {resource.action.label} <Download className="ml-1 w-4 h-4" />
                </button>
              ) : (
                <button className="inline-flex items-center text-blue-600 text-sm">
                  {resource.action.label} <ExternalLink className="ml-1 w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceExplorer;