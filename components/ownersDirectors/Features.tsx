import React from 'react';

interface FlowysisFeaturesProps {
  title?: string;
  description?: string;
}

const Features: React.FC<FlowysisFeaturesProps> = ({
  title = "Flowysis features",
  description = "The complete preschool and childcare management software that integrates automatic billing and payments, real-time communication, classroom management, and so much more."
}) => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6">{title}</h2>
        
        {/* Divider line */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-indigo-600 rounded"></div>
        </div>
        
        <p className="text-lg text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Features;