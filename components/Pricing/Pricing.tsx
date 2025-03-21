"use client";
import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard'; 
import { axiosInstance } from '@/utils/axios';

type BillingPeriod = 'monthly' | 'annually';

interface PlanType {
  id: number;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  numberOfTeachers: number;
  numberOfStudents: number;
  numberOfClasses: number;
  notes: string;
  status: string;
}

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const [plans, setPlans] = useState<PlanType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true); 
        const response = await axiosInstance.get('/services/'); 
        setPlans(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching pricing plans:", err);
        setError("Failed to load pricing plans. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="text-center">Loading plans...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Flexible Plans Tailored to Fit
        </h2>
        
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center rounded-full p-1 bg-gray-100 dark:bg-gray-700">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                billingPeriod === 'monthly' 
                  ? 'bg-white dark:bg-gray-600 shadow-sm dark:text-white' 
                  : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                billingPeriod === 'annually' 
                  ? 'bg-white dark:bg-gray-600 shadow-sm dark:text-white' 
                  : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
              }`}
            >
              Annually
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.id}
            id={plan.id}
            title={plan.name}
            price={billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
            description={plan.notes}
            features={[
              `${plan.numberOfTeachers} Teachers`,
              `${plan.numberOfStudents} Students Max`,
              `${plan.numberOfClasses} Classes`,
              'Specialized Toddler Care'
            ]}
            isPopular={index === 1}
            billingPeriod={billingPeriod === 'monthly' ? 'month' : 'year'}
            buttonText="Choose This Plan"
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;