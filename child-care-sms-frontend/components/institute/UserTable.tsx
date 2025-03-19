import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const UserTable = () => {
 
  const orders = [
    {
      id: 'DE124321',
      customer: {
        name: 'John Doe',
       
        initials: 'JD',
        color: 'bg-red-100 text-red-500'
      },
      product: 'Software License',
      value: 'UAE',
      email: 'johndoe@gmail.com',
      status: 'Complete',
      statusColor: 'text-green-500'
    },
    {
      id: 'DE124322',
      customer: {
        name: 'Jane Smith',
        
        initials: 'JS',
        color: 'bg-orange-100 text-orange-500'
      },
      product: 'Cloud Hosting',
      value: 'UAE',
      email: 'janesmith@gmail.com',
      status: 'Pending',
      statusColor: 'text-orange-500'
    },
    {
      id: 'DE124323',
      customer: {
        name: 'Michael Brown',
        
        initials: 'MB',
        color: 'bg-orange-100 text-orange-500'
      },
      product: 'Web Domain',
      value: 'UAE',
      email: 'michaelbrown@gmail.com',
      status: 'Cancel',
      statusColor: 'text-red-500'
    },
    {
      id: 'DE124324',
      customer: {
        name: 'Alice Johnson',
        
        initials: 'AJ',
        color: 'bg-purple-100 text-purple-500'
      },
      product: 'SSL Certificate',
      value: 'UAE',
      email: 'alicejohnson@gmail.com',
      status: 'Pending',
      statusColor: 'text-orange-500'
    },
    {
      id: 'DE124325',
      customer: {
        name: 'Robert Lee',
        
        initials: 'RL',
        color: 'bg-green-100 text-green-500'
      },
      product: 'Premium Support',
      value: 'UAE',
      email: 'robertlee@gmail.com',
      status: 'Complete',
      statusColor: 'text-green-500'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Data</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            Filter
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700">
            See all
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="p-3 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="p-3 text-left text-gray-600 font-medium"> ID</th>
              <th className="p-3 text-left text-gray-600 font-medium">Name</th>
              <th className="p-3 text-left text-gray-600 font-medium">Institute</th>
              <th className="p-3 text-left text-gray-600 font-medium">Service location</th>
              <th className="p-3 text-left text-gray-600 font-medium">Email</th>
              <th className="p-3 text-left text-gray-600 font-medium">Status</th>
              <th className="p-3 text-left text-gray-600 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="p-3 text-gray-800 font-medium">{order.id}</td>
                <td className="p-3">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${order.customer.color} flex items-center justify-center mr-3`}>
                      {order.customer.initials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{order.customer.name}</p>
                      {/* <p className="text-gray-500 text-sm">{order.customer.email}</p> */}
                    </div>
                  </div>
                </td>
                <td className="p-3 text-gray-800">{order.product}</td>
                <td className="p-3 text-gray-800 font-medium">{order.value}</td>
                <td className="p-3 text-gray-800">{order.email}</td>
                <td className="p-3">
                  <span className={`${order.statusColor} font-medium`}>{order.status}</span>
                </td>
                <td className="p-3">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaArrowRight/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;