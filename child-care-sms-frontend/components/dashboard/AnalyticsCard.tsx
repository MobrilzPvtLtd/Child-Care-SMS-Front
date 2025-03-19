import React from 'react';

const AnalyticsCards = () => {
  // Dummy data object
  const metrics = [
    {
      title: "Total Institutions",
      value: "2000",
      
    },
    {
      title: "Active Users",
      value: "9000",
     
    },
    {
      title: "Subscription Revenue",
      value: "600k",
     
    },
    {
      title: "Application log",
      value: "12000",
    
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
        //   const isPositive = !metric.change.includes('-');
        //   const changeColor = isPositive ? 'text-green-500' : 'text-red-500';
          
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-gray-600 text-sm mb-2">{metric.title}</h3>
              <div className="flex items-baseline justify-between">
                <p className="text-3xl font-bold text-gray-800">{metric.value}</p>
                <div className="flex items-center">
                  {/* <span className={`${changeColor} text-sm font-medium`}>{metric.change}</span> */}
                  {/* <span className="text-gray-500 text-xs ml-2">{metric.comparison}</span> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticsCards;