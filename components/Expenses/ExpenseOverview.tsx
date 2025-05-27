"use client";

import { useState } from "react";
import { Play, Building2, BarChart3, TrendingUp } from "lucide-react";
import Image from "next/image";

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

const features: FeatureItem[] = [
  {
    icon: <Building2 className="w-6 h-6 text-gray-600" />,
    text: "Easily connect your bank account",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-gray-600" />,
    text: "View and manage transactions across multiple accounts.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-gray-600" />,
    text: "Get a detailed breakdown on where your money is going, helping you manage your business and be ready for filing taxes.",
  },
];

const VideoSection = ({
  isPlaying,
  onPlay,
}: {
  isPlaying: boolean;
  onPlay: () => void;
}) => (
  <div className="relative h-full min-h-[600px] w-full">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/expenses.svg"
        alt="Expenses Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className=""
        priority
      />
     
    </div>

    {/* Video Container */}
    <div className="relative z-10 h-full flex items-center justify-center p-8">
      <div className="w-full max-w-3xl  rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {isPlaying ? (
          <div className="aspect-video relative">
            <iframe
              title="Marketing promotional video"
              src="https://www.loom.com/embed/0cc3a63feb6e4c0ea9a0daca25585ee5?sid=df7ab745-d6e9-4579-ad3d-618c3d9a092d?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <h3 className="text-3xl font-bold mb-4">Watch How It Works</h3>
              <p className="text-gray-200 text-center max-w-lg mb-8 text-lg">
                Learn how to connect your bank account and start tracking expenses
                in minutes
              </p>
              <button
                onClick={onPlay}
                className="group flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                  <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function ExpenseOverview() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 pt-4">
      {/* Left Side - Video Section (7 columns) */}
      <div className="hidden md:block md:col-span-6">
        <VideoSection isPlaying={isVideoPlaying} onPlay={handlePlayClick} />
      </div>

      {/* Right Side - Content (5 columns) */}
      <div className="md:col-span-6 flex flex-col justify-center px-8 py-12 ">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Connect your bank account now to start tracking expenses
          </h1>

          {/* Features list */}
          <div className="space-y-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 hover:transform hover:translate-x-2 transition-transform duration-200"
              >
                <div className="flex-shrink-0 mt-1 p-2 bg-white rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <button className="w-full bg-[#5463d6] hover:bg-[#4553c6] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl">
              <span className="text-2xl">+</span>
              <span className="text-lg">Connect a bank account</span>
            </button>

            <div className="text-center">
              <p className="text-gray-600 mb-3">
                Not ready to connect a bank account?
              </p>
              <button className="text-[#5463d6] hover:text-[#4553c6] font-medium transition-colors duration-200 underline-offset-4 hover:underline">
                Add a custom source instead
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
