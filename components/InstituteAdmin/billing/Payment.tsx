import React, { useState } from 'react';
import { Search, MoreHorizontal, LayoutDashboard, Receipt, TrendingUp, FolderTree, Database, Settings } from 'lucide-react';

interface UnpaidBalance {
  id: string;
  name: string;
  fastDue: string;
  notYetDue: string;
  availableCredits: string;
  accountBalance: string;
}

interface RecentPayment {
  id: string;
  name: string;
  date: string;
  amount: string;
  paymentMethod: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

interface UpcomingInvoice {
  id: string;
  name: string;
  dueDate: string;
  amount: string;
  description: string;
  status: 'Draft' | 'Scheduled' | 'Sent';
}

interface TabData {
  label: string;
  count?: number;
  type: 'unpaid' | 'recent' | 'upcoming';
  data: UnpaidBalance[] | RecentPayment[] | UpcomingInvoice[];
}



export default function Payment() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const tabs: TabData[] = [
    {
      label: 'Unpaid balances',
      count: 1,
      type: 'unpaid',
      data: [{
        id: '1',
        name: 'Emma Johnson',
        fastDue: '$0.00',
        notYetDue: '$125.00',
        availableCredits: '$0.00',
        accountBalance: '$125.00'
      }]
    },
    {
      label: 'Recent payments',
      type: 'recent',
      data: [
        {
          id: '1',
          name: 'Emma Johnson',
          date: '2025-06-01',
          amount: '$125.00',
          paymentMethod: 'Credit Card',
          status: 'Completed'
        },
        {
          id: '2',
          name: 'Liam Smith',
          date: '2025-06-02',
          amount: '$75.00',
          paymentMethod: 'Bank Transfer',
          status: 'Pending'
        }
      ] as RecentPayment[]
    },
    {
      label: 'Upcoming invoices',
      type: 'upcoming',
      data: [
        {
          id: '3',
          name: 'Sophia Davis',
          dueDate: '2025-07-01',
          amount: '$200.00',
          description: 'July Tuition',
          status: 'Scheduled'
        },
        {
          id: '4',
          name: 'Noah Wilson',
          dueDate: '2025-07-01',
          amount: '$150.00',
          description: 'July Tuition',
          status: 'Draft'
        }
      ] as UpcomingInvoice[]
    }
  ];

  const renderTable = () => {
    const currentTab = tabs[activeTab];
    const filteredData = currentTab.data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredData.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            {searchTerm ? 'No records found matching your search.' : 'No data available for this tab.'}
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              Clear search
            </button>
          )}
        </div>
      );
    }

    switch (currentTab.type) {
      case 'unpaid':
        return (
            
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Past due</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Not yet due</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Available credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Account balance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(filteredData as UnpaidBalance[]).map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.fastDue}</td>
                  <td className="px-6 py-4">{item.notYetDue}</td>
                  <td className="px-6 py-4">{item.availableCredits}</td>
                  <td className="px-6 py-4">{item.accountBalance}</td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'recent':
        return (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paid by</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Post Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Type</th>
                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(filteredData as RecentPayment[]).map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                 
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.amount}</td>
                   <td className="px-6 py-4">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{item.paymentMethod}</td>
                  <td className="px-6 py-4">$400</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'upcoming':
        return (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoices</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bill Plan Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recurrence</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Send date </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(filteredData as UpcomingInvoice[]).map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">Done</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">
                    habr
                  </td>
                  <td className="px-6 py-4">2/2/23</td>
                  <td className="px-6 py-4">1/3/23</td>
                
                  <td className="px-6 py-4">
                   {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === index
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    ({tab.count})
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Search and Filter Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search students"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
          
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          {renderTable()}
        </div>
      </div>
    </div>
  );
}