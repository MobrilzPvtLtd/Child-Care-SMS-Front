// components/PricingSection.tsx
"use client";
import React, { useState } from 'react';
import PricingCard from './PricingCard';

type BillingPeriod = 'monthly' | 'annually';

interface PlanType {
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
}

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  
  const plans: PlanType[] = [
    {
      title: 'Starter',
      price: billingPeriod === 'monthly' ? '5.00' : '50.00',
      originalPrice: billingPeriod === 'monthly' ? '12.00' : '120.00',
      description: 'For solo designers & freelancers',
      features: [
        '5 website',
        '500 MB Storage',
        'Unlimited Sub-Domain',
        '3 Custom Domain',
        'Free SSL Certificate',
        'Unlimited Traffic'
      ],
      isPopular: false,
      buttonText: 'Choose Starter'
    },
    {
      title: 'Medium',
      price: billingPeriod === 'monthly' ? '10.99' : '109.90',
      originalPrice: billingPeriod === 'monthly' ? '30.00' : '300.00',
      description: 'For working on commercial projects',
      features: [
        '10 website',
        '1 GB Storage',
        'Unlimited Sub-Domain',
        '5 Custom Domain',
        'Free SSL Certificate',
        'Unlimited Traffic'
      ],
      isPopular: true,
      buttonText: 'Choose Starter'
    },
    {
      title: 'Large',
      price: billingPeriod === 'monthly' ? '15.00' : '150.00',
      originalPrice: billingPeriod === 'monthly' ? '59.00' : '590.00',
      description: 'For teams larger than 5 members',
      features: [
        '15 website',
        '10 GB Storage',
        'Unlimited Sub-Domain',
        '10 Custom Domain',
        'Free SSL Certificate',
        'Unlimited Traffic'
      ],
      isPopular: false,
      buttonText: 'Choose Starter'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
      <div className="text-center mb-12 ">
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
            key={index}
            title={plan.title}
            price={plan.price}
            originalPrice={plan.originalPrice}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
            billingPeriod={billingPeriod === 'monthly' ? 'month' : 'year'}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;

