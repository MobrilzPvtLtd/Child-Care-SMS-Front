import BlogCard from "./BlogCard";

export default function BlogBanner() {
    return (
        <>  
      <section className="relative bg-[#f1f4f9] py-20 text-center overflow-hidden">
        {/* Lightbulb Illustration (Top Left) */}
        <img
          src="/lightbulb.png"
          alt="Lightbulb"
          className="absolute top-8 left-8 w-10 md:w-16"
        />
  
        {/* Red Abstract Shape (Bottom Left) */}
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#ff6b5c] rounded-full translate-x-[-50%] translate-y-[50%] mix-blend-multiply opacity-80"></div>
  
        {/* Green Rounded Shape (Top Right) */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#20b9bc] rounded-br-full translate-x-[50%] translate-y-[-50%] mix-blend-multiply opacity-80"></div>
  
        {/* Rocket Illustration (Bottom Right) */}
        <img
          src="/rocket.png"
          alt="Rocket"
          className="absolute bottom-8 right-8 w-12 md:w-20"
        />
  
        {/* Heading */}
        <div className="relative z-10 px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#3949ab] max-w-4xl mx-auto">
            Ideas and inspiration to help you run an amazing early education center
          </h1>
        </div>
      </section>
      <BlogCard/>
      </>
    );
  }
  