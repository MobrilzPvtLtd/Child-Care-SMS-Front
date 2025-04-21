'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

const CustomerBanner = () => {
    const stats = [
        {
          value: '20 hours',
          description: 'saved per administrator & staff every month',
        },
        {
          value: '90%',
          description: 'of preschools report more families pay on time with brightwheel',
        },
        {
          value: '2 of 3',
          description: 'teachers would rather work at a program that uses brightwheel',
        },
        {
          value: '95%',
          description: 'of administrators & staff report brightwheel improves communication with families',
        },
      ];
      
  return (
    <> 
    <section className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Confetti elements (optional) */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-green-400 rotate-12 rounded-sm" />
      <div className="absolute top-6 left-10 w-4 h-4 bg-blue-400 rounded-full" />
      <div className="absolute bottom-10 left-1/2 w-4 h-4 bg-yellow-400 rounded-full" />
      <div className="absolute bottom-4 right-10 w-4 h-4 bg-red-400 rotate-45 rounded-sm" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Millions of <br />
            educators and <br />
            families love <br />
            <span className="text-gray-900">brightwheel</span>
          </h1>
          <p className="text-lg text-gray-600">
            Learn how brightwheel makes it easy to build connections, simplify billing, and efficiently manage your childcare program all in one place.
          </p>
        </div>

        {/* Spotlight Card */}
        <div className="bg-indigo-500 text-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-6 max-w-md md:max-w-full mx-auto md:mx-0">
          <div className="shrink-0">
            <Image
              src="/customer_banner.jpg"
              alt="Customer"
              width={120}
              height={120}
              className="rounded-full border-4 border-white"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Customer Spotlight</p>
            <h3 className="text-xl font-bold">Monique R</h3>
            <p className="text-sm mt-1">
              Owner, World Elite Academy in San Diego
            </p>
            <button className="mt-4 flex items-center gap-2 bg-indigo-700 px-4 py-2 rounded-full text-white font-semibold shadow-md hover:bg-indigo-800 transition">
              <Play size={20} />
              Watch the story
            </button>
          </div>
        </div>
      </div>
    </section>

       <section className="py-16 px-6 md:px-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
        Brightwheel’s impact on customers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-l-4 border-teal-500 pl-4 text-left"
          >
            <p className="text-teal-500 text-2xl md:text-3xl font-bold">{stat.value}</p>
            <p className="text-gray-700 mt-2 text-sm md:text-base">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default CustomerBanner;
