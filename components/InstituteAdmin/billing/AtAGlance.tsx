import React from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';
import Payment from './Payment';

interface ActivityItem {
  date: string;
  description: string;
}

interface InvoiceStatus {
  label: string;
  amount: string;
  color: string;
}

interface PaymentStatus {
  label: string;
  amount: string;
  color: string;
}

export default function AtAGlance() {
  const invoiceStatuses: InvoiceStatus[] = [
    { label: 'Fast Due', amount: '$0.00', color: 'text-red-500' },
    { label: 'Unpaid', amount: '$0.00', color: 'text-gray-400' }
  ];

  const paymentStatuses: PaymentStatus[] = [
    { label: 'Offline', amount: '$0.00', color: 'text-cyan-500' },
    { label: 'Deposited', amount: '$0.00', color: 'text-cyan-500' },
    { label: 'Not Deposited', amount: '$0.00', color: 'text-cyan-500' }
  ];

  const recentActivity: ActivityItem[] = [
    { date: '5/16', description: 'kunal rao has a new primary payer' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">At a Glance</h1>
          <p className="text-gray-600">
            Excludes <span className="text-blue-600 underline cursor-pointer">subsidies</span>
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Jump to student profile..."
              className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <select className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors appearance-none pr-10">
              <option>Select an action</option>
              {/* <option>Create Invoices</option> */}
            </select>
            <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-white pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Tax Statements Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start gap-3">
        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold">i</span>
        </div>
        <div>
          <h3 className="font-semibold text-blue-900 mb-1">2024 tax statements are now available to payers!</h3>
          <p className="text-blue-800 text-sm">
            Payers can access within their brightwheel accounts. You can also view these in the "Statements" tab of a student's profile. More info{' '}
            <span className="text-blue-600 underline cursor-pointer">here</span>.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Open Invoices */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Open invoices as of today</h2>
          <div className="text-3xl font-bold text-gray-900 mb-6">$0.00</div>
          <div className="space-y-4">
            {invoiceStatuses.map((status, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${status.color === 'text-red-500' ? 'bg-red-500' : 'bg-gray-400'}`}></div>
                  <span className={`${status.color} font-medium`}>{status.label}</span>
                </div>
                <span className="font-semibold text-gray-900">{status.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payments */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payments in last 35 days</h2>
          <div className="text-3xl font-bold text-gray-900 mb-6">$0.00</div>
          <div className="space-y-4">
            {paymentStatuses.map((status, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-cyan-600 font-medium">{status.label}</span>
                </div>
                <span className="font-semibold text-gray-900">{status.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Activity last 35 days</h2>
            <div className="flex items-center gap-1 text-blue-600 cursor-pointer hover:text-blue-700">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Help center</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 text-sm font-medium">{activity.date}</span>
                  <span className="text-gray-900">{activity.description}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </div>
            ))}
             */}
            <div className="text-center py-8 text-gray-500">
              No more notable activity to show in the last 35 days
            </div>
          </div>
        </div>
      </div>

      <Payment/>
    </div>
  );
}
