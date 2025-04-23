// components/ParentCard.tsx
import React from 'react';
import Link from 'next/link';

const ParentCard: React.FC = () => {
  return (
    <div className="w-full">
      {/* Metrics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading with underline */}
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl text-indigo-700 font-medium mb-4">
              The Flowysis impact is measurable
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto"></div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div className="text-center border-r-0 md:border-r border-gray-200 px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">
                85% of users
              </h3>
              <p className="text-gray-600 mb-6">
                would recommend Flowysis to a director, teacher, or parent
              </p>
              <Link href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Learn more
              </Link>
            </div>

            {/* Metric 2 */}
            <div className="text-center border-r-0 md:border-r border-gray-200 px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-pink-500 mb-4">
                100% of parents
              </h3>
              <p className="text-gray-600 mb-6">
                are more satisfied with their school experience once Flowysis is implemented
              </p>
              <Link href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Learn more
              </Link>
            </div>

            {/* Metric 3 */}
            <div className="text-center px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
                10s of millions
              </h3>
              <p className="text-gray-600 mb-6">
                of classroom moments captured and shared each week
              </p>
              <Link href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Interested in using Flowysis at home?
          </h2>
          <p className="mb-8">
            See tips and tricks for using Flowysis with at-home childcare.
          </p>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white py-3 px-6 rounded-md transition-colors">
            Nannies & childcare
          </button>
        </div>
      </section>
    </div>
  );
};

export default ParentCard;