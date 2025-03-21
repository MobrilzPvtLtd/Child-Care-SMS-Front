"use client";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axios";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface InvoiceResponse {
  id: number;
  invoiceDate: string;
  dueDate: string;
  amount: string;
  status: string;
  instituteId: number;
  serviceId: number;
  previousInvoiceId: number | null;
  notes: string;
  createdAt: string;
  updatedAt: string;
  service: {
    id: number;
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    numberOfTeachers: number;
    numberOfStudents: number;
    numberOfClasses: number;
    notes: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  institute: {
    id: number;
    name: string;
    email: string;
    instituteName: string;
    phoneNumber: string;
    address: string;
  };
}

export default function InvoicePage() {
  const searchParams = useSearchParams();
  const instituteId = searchParams.get("instituteId");
  const serviceId = searchParams.get("serviceid");
  const billingPeriod = searchParams.get("billingPeriod");
  const price = searchParams.get("price");

  const [invoice, setInvoice] = useState<InvoiceResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const createInvoice = async () => {
      try {
        const today = new Date();
        const dueDate = new Date();
        
        // Calculate due date based on billing period
        if (billingPeriod === "month") {
          dueDate.setMonth(today.getMonth() + 1);
        } else if (billingPeriod === "year") {
          dueDate.setFullYear(today.getFullYear() + 1);
        }

        const payload = {
          invoiceDate: today.toISOString().split("T")[0],
          dueDate: dueDate.toISOString().split("T")[0],
          amount: parseFloat(price || "0"),
          instituteId: parseInt(instituteId || "0"),
          serviceId: parseInt(serviceId || "0"),
          notes: `Invoice for ${billingPeriod} subscription of service`,
        };

        const response = await axiosInstance.post("/invoice", payload);
        setInvoice(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to create invoice");
        setLoading(false);
      }
    };

    if (instituteId && serviceId && billingPeriod && price) {
      createInvoice();
    }
  }, [instituteId, serviceId, billingPeriod, price]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-300">Loading invoice...</div>
      </div>
    );
  }

  if (error || !invoice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 dark:text-red-400">{error || "Invoice not found"}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Invoice #{invoice.id}
          </h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            invoice.status === "pending" 
              ? "bg-yellow-100 text-yellow-800" 
              : "bg-green-100 text-green-800"
          }`}>
            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Institute Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Billed To
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {invoice.institute.instituteName}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {invoice.institute.address}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {invoice.institute.email}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {invoice.institute.phoneNumber}
            </p>
          </div>

          {/* Invoice Details */}
          <div className="text-right">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Invoice Details
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Invoice Date:</span>{" "}
              {new Date(invoice.invoiceDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Due Date:</span>{" "}
              {new Date(invoice.dueDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Created:</span>{" "}
              {new Date(invoice.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Service Details */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Service Details
          </h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-900 dark:text-white">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    <div>
                      <p className="font-medium">{invoice.service.name}</p>
                      <p className="text-sm">{invoice.service.notes}</p>
                      <p className="text-sm">
                        Teachers: {invoice.service.numberOfTeachers} | Students: {invoice.service.numberOfStudents} | Classes: {invoice.service.numberOfClasses}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-300">
                    ${invoice.amount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-end mb-8">
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Total: ${invoice.amount}
            </p>
            {invoice.notes && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Note: {invoice.notes}
              </p>
            )}
          </div>
        </div>

        {/* Pay Now Button */}
        <div className="flex justify-end">
          <button
            className="px-6 py-2 bg-brand-500 text-white rounded-md hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors"
            onClick={() => alert("Payment processing would be implemented here")}
          >
            Pay Now
          </button>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}