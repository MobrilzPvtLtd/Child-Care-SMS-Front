import React from 'react';

interface FlowysisCTAProps {
  onRequestDemo?: () => void;
}

const CTA: React.FC<FlowysisCTAProps> = ({ onRequestDemo }) => {
  const handleRequestDemo = () => {
    if (onRequestDemo) {
      onRequestDemo();
    } else {
      console.log("Demo requested");
    }
  };

  return (
    <div className="w-full bg-indigo-500 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join millions of educators and families on Flowysis
        </h2>
        <p className="text-white mb-8">
          Take a tour and see how easy it is to get started with Flowysis.
        </p>
        <button
          onClick={handleRequestDemo}
          className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300"
        >
          Request a demo
        </button>
      </div>
    </div>
  );
};

export default CTA;