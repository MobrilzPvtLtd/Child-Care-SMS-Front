import Link from "next/link";

export default function BlogCard() {
  const blogPosts = [
    {
      title: "A Complete Guide to Preschool Progress Reports",
      category: "Child development",
      date: "Apr 9, 2025",
      excerpt:
        "For a child to be successful, families and teachers need to work together to support their learning. A preschool progress report ...",
      image: "/banner-img.jpg",
      slug: "preschool-progress-reports", // Added a slug
    },
    {
      title:
        "Daycare Ideas: Interior Design Inspiration for Your Childcare Center",
      category: "Running a business",
      date: "Apr 9, 2025",
      excerpt:
        "If you work in early education, you know that the design of your physical space is critical for providing high-quality care for ...",
      image: "/children.jpg",
      slug: "daycare-interior-design", // Added a slug
    },
    {
      title: "The Ultimate Guide on How to Start a Daycare Center",
      category: "Running a business",
      date: "Apr 9, 2025",
      excerpt:
        "For children, daycare centers are a jumpstart to healthy growth and ...",
      image: "/images/common/person2.jpg",
      slug: "start-a-daycare-center", // Added a slug
    },
    {
      title: "A Complete Guide to Preschool Progress Reports",
      category: "Child development",
      date: "Apr 9, 2025",
      excerpt:
        "For a child to be successful, families and teachers need to work together to support their learning. A preschool progress report ...",
      image: "/banner-img.jpg",
      slug: "preschool-progress-reports-2", // Added a unique slug
    },
    {
      title:
        "Daycare Ideas: Interior Design Inspiration for Your Childcare Center",
      category: "Running a business",
      date: "Apr 9, 2025",
      excerpt:
        "If you work in early education, you know that the design of your physical space is critical for providing high-quality care for ...",
      image: "/children.jpg",
      slug: "daycare-interior-design-2", // Added a unique slug
    },
  ];

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 py-10 text-center">
        <div className="flex justify-between gap-6 mb-8 text-[18px] font-semibold text-[#3949ab]">
          <button className="hover:underline">Running a business</button>
          <button className="hover:underline">Child development</button>
          <button className="hover:underline">Curriculum</button>
          <button className="hover:underline">Financial health</button>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-[3fr_1fr] gap-8">
        {/* Main content */}
        <div>
          {/* Blog list */}
          <div className="space-y-10">
            {blogPosts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`}>
                <div className="flex flex-col md:flex-row gap-6 cursor-pointer hover:bg-gray-50 p-4 rounded-md transition">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full md:w-48 h-32 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-[#3949ab] text-sm font-medium mb-1">
                      {post.category}
                    </p>
                    <p className="text-gray-700 text-sm">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* CTA Card */}
          <div className="bg-[#20b9bc] text-white p-6 rounded-lg space-y-4">
            <img src="/images/logo/whitelogo.png" alt="Flowysis logo" className="w-28" />
            <p className="font-bold">Tour the easiest all-in-one childcare app</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Get paid faster and simplify billing</li>
              <li>Improve engagement with families and staff</li>
              <li>Run your program more efficiently</li>
            </ul>
            <button className="bg-[#ff5c5c] hover:bg-[#e14d4d] text-white px-4 py-2 rounded-full font-semibold">
              Get a demo
            </button>
          </div>

          {/* Subscription Box */}
          <div className="bg-[#f7f8fc] p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Subscribe to the Flowysis blog</h4>
            <label className="block text-sm text-gray-600 mb-1">Email*</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 mb-3 border border-gray-300 rounded"
            />
            <button className="bg-[#fcb12b] hover:bg-[#fca61e] text-white px-4 py-2 rounded font-semibold w-full">
              Subscribe
            </button>
          </div>
        </aside>
      </section>
    </>
  );
}