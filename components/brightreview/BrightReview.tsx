import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-2xl my-4">{title}</h3>
      <p className="text-slate-500 font-base text-lg my-1 flex-grow">{description}</p>
    </div>
  );
};

const BrightReview: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        Why millions of educators and families love Flowysis
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Feature 1: Rating */}
        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="mb-4">
            <div className="text-3xl font-bold text-gray-800">4.9</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <h3 className="font-semibold text-2xl my-4">#1 childcare software</h3>
          <p className="text-slate-500 font-base text-lg my-1 flex-grow">Ranked as leading childcare center software based on external reviews.</p>
        </div>
        
        {/* Feature 2: Easy to use */}
        <FeatureCard
          icon={
            <div className="bg-blue-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          }
          title="Easy to use & save time"
          description="Simplify administrative tasks with Flowysis's all-in-one app & save up to 20 hrs per month."
        />
        
        {/* Feature 3: Automatic billing */}
        <FeatureCard
          icon={
            <div className="bg-teal-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          }
          title="Automatic billing & payments"
          description="90% of preschools report that more families pay on time with Flowysis."
        />
        
        {/* Feature 4: Quality connections */}
        <FeatureCard
          icon={
            <div className="bg-pink-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          }
          title="Quality connections"
          description="95% of administrators & staff report Flowysis improves communication with families."
        />
      </div>
    </section>
  );
};

export default BrightReview;