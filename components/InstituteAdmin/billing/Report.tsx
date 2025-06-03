import React from 'react';
import Link from 'next/link';
import { ChevronRight, Info, X } from 'lucide-react';

interface ReportItemProps {
  title: string;
  description: string;
  href: string;
}

const ReportItem: React.FC<ReportItemProps> = ({ title, description, href }) => {
  return (
    <Link href={href} className="group block">
      <div className="flex items-start justify-between p-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-medium text-blue-600 group-hover:text-blue-700">
              {title}
            </h3>
            <ChevronRight className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Reports: React.FC = () => {
  const reportItems: ReportItemProps[] = [
    {
      title: "Aging",
      description: "Details on which students have a past due balance and how overdue those balances are.",
      href: "/reports/aging"
    },
    {
      title: "Deposits", 
      description: "Detailed look at the deposits made by brightwheel into your bank account.",
      href: "/reports/deposits"
    },
    {
      title: "Invoices",
      description: "Information about invoices, such as the date they are due, what types of charges are applied, and whether they are paid in full.",
      href: "/reports/invoices"
    },
    {
      title: "Revenue",
      description: "Easily understand your revenue and fees, so you can complete your accounting.",
      href: "/reports/revenue"
    },
    {
      title: "Transactions",
      description: "All billing transactions at your school including charges, payments, adjustments, credits, and more.",
      href: "/reports/transactions"
    },
    {
      title: "Charges",
      description: "All charges from your program, including information on the student, date the charge posted, and more. You can group this report by either the charge category or student.",
      href: "/reports/charges"
    },
    {
      title: "Payments & Credits",
      description: "All payments and credits at your program, including information on the student, date paid, and more.",
      href: "/reports/payments-credits"
    },
    {
      title: "Summary",
      description: "Summarized view of all charges, credits, and payments for a given date range. It also provides a beginning balance and an ending balance.",
      href: "/reports/summary"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Reports</h1>

      {/* Notification Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-blue-800 text-sm">
            You can now add billing only staff to brightwheel! Assign this role to financial staff so they can help you with billing reporting.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link 
            href="/setup" 
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Get set up
          </Link>
          <button className="text-blue-600 hover:text-blue-700">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reportItems.map((item, index) => (
          <ReportItem
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>

      {/* Quickbooks Integration Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900 mb-2">
              Billing reports are now compatible with Quickbooks
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              More easily transfer your billing data from brightwheel to Quickbooks, reducing the need for manual data entry.
            </p>
            <Link 
              href="/quickbooks-integration" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium underline"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;