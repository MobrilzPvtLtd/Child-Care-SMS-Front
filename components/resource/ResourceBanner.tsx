import Image from "next/image";

export default function ResourcesBanner() {
  return (
    <section className="w-full bg-blue-400 text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Early Education <br /> Resources
          </h1>
          <p className="mt-4 text-lg text-[#E2E4F0]">
            All the tools you need to run a successful early education program
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white text-black rounded-2xl shadow-xl p-6 w-full md:max-w-lg">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Badge and Text */}
            <div className="flex-1">
              <span className="inline-block bg-[#E8E9FD] text-[#4C5FD5] text-sm font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
              <h2 className="mt-4 text-2xl font-bold">Family Engagement Guide for Childcare Programs</h2>
              <p className="mt-2 text-gray-600">
              A free guide to help you foster family engagement at your childcare program.
              </p>
            </div>

            {/* Image */}
            <div className="w-full h-60  md:w-40 md:h-40 relative rounded-lg">
              <Image
                src="/children.jpg" // Make sure to add this image to your public folder
                alt="Tax Preparation Checklist"
                layout="fill"
                className="object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-6">
            <button className="bg-gradient-to-r from-[#FD5A5A] to-[#F74985] text-white px-6 py-3 rounded-xl font-semibold w-full">
              Download ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
