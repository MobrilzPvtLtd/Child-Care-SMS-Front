import React from "react";

interface TestimonialProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}

const ReviewWithImage: React.FC<TestimonialProps> = ({
  title,
  imageSrc,
  imageAlt,
  quote,
  authorName,
  authorTitle,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-4xl font-bold text-center text-gray-800 mb-16">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8 rounded-lg overflow-hidden">
        {/* Image container */}
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Testimonial content */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="text-6xl text-blue-400 font-serif">"</div>
          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
            {quote}
          </p>

          <div className="mt-8">
            <h3 className="font-bold text-lg text-gray-800">{authorName}</h3>
            <p className="text-gray-600">{authorTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewWithImage;