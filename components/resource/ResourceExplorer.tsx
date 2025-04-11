"use client";
import { Search, ChevronDown, ExternalLink, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ResourceExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    "All categories",
    "Engaging families",
    "Hiring + developing staff",
    "Running your business",
    "Supporting students",
  ];

  const resources = [
    {
      id: 1,
      title: "Parent Complaint Resolution Guide for Childcare Providers",
      description:
        "A free guide to help you resolve parent and guardian complaints with professionalism and care.",
      image: "plan3.png",
      categories: ["Engaging families"],
      type: "Guide",
      action: {
        type: "download",
        label: "Download",
      },
    },
    {
      id: 2,
      title: "How to Create a Preschool Newsletter: A Guide for Teachers",
      description:
        "Newsletters are an effective communication tool that keep families engaged and informed with what's happening in the classroom. Check out these tips and templates to make your own.",
      image: "plan3.png",
      categories: ["Engaging families"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
    {
      id: 3,
      title: "Tips for Potty Training Your Child: A Practical Guide",
      description:
        "With potty training, patience is key. Here are some tips to make the process easier.",
      image: "plan3.png",
      categories: ["Supporting students"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
    {
      id: 4,
      title: "Effective Hiring Strategies for Childcare Centers",
      description:
        "Learn how to attract and retain top talent for your childcare center.",
      image: "plan3.png",
      categories: ["Hiring + developing staff"],
      type: "Guide",
      action: {
        type: "download",
        label: "Download",
      },
    },
    {
      id: 5,
      title: "How to Manage Your Childcare Business Finances",
      description:
        "A comprehensive guide to managing finances for childcare businesses.",
      image: "plan3.png",
      categories: ["Running your business"],
      type: "Guide",
      action: {
        type: "download",
        label: "Download",
      },
    },
    {
      id: 6,
      title: "Creating a Safe Environment for Students",
      description:
        "Tips and strategies to ensure a safe and nurturing environment for children.",
      image: "plan3.png",
      categories: ["Supporting students"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
    {
      id: 7,
      title: "Building Strong Relationships with Families",
      description:
        "Learn how to foster strong relationships with families in your childcare program.",
      image: "plan3.png",
      categories: ["Engaging families"],
      type: "Guide",
      action: {
        type: "download",
        label: "Download",
      },
    },
    {
      id: 8,
      title: "Professional Development for Childcare Staff",
      description:
        "Explore opportunities for professional growth and development for your staff.",
      image: "plan3.png",
      categories: ["Hiring + developing staff"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
    {
      id: 9,
      title: "Streamlining Operations in Your Childcare Business",
      description:
        "Discover tools and strategies to streamline your childcare operations.",
      image: "plan3.png",
      categories: ["Running your business"],
      type: "Guide",
      action: {
        type: "download",
        label: "Download",
      },
    },
    {
      id: 10,
      title: "Encouraging Creativity in the Classroom",
      description:
        "Ideas and activities to encourage creativity and imagination in children.",
      image: "plan3.png",
      categories: ["Supporting students"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
    {
      id: 11,
      title: "Encouraging Creativity in the Classroom",
      description:
        "Ideas and activities to encourage creativity and imagination in children.",
      image: "plan3.png",
      categories: ["Supporting students"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
    {
      id: 12,
      title: "Encouraging Creativity in the Classroom",
      description:
        "Ideas and activities to encourage creativity and imagination in children.",
      image: "plan3.png",
      categories: ["Supporting students"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
    {
      id: 13,
      title: "Encouraging Creativity in the Classroom",
      description:
        "Ideas and activities to encourage creativity and imagination in children.",
      image: "plan3.png",
      categories: ["Supporting students"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
    {
      id: 14,
      title: "Encouraging Creativity in the Classroom",
      description:
        "Ideas and activities to encourage creativity and imagination in children.",
      image: "plan3.png",
      categories: ["Supporting students"],
      type: "Blog post",
      action: {
        type: "readNow",
        label: "Read Now",
      },
    },
  ];

  // Random style generator for category badges
  const randomStyle = () => {
    const styles = [
      "text-blue-700 bg-blue-50",
      "text-purple-700 bg-purple-50",
      "text-green-700 bg-green-50",
      "text-yellow-700 bg-yellow-50",
      "text-red-700 bg-red-50",
      "text-gray-700 bg-gray-100",
    ];
    return styles[Math.floor(Math.random() * styles.length)];
  };

  // Filter resources based on selected category
  const filteredResources =
    selectedCategory === "All categories"
      ? resources
      : resources.filter((resource) =>
          resource.categories.includes(selectedCategory)
        );

  // Pagination logic
  const totalPages = Math.ceil(filteredResources.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentResources = filteredResources.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center flex-col p-6">
      {/* Search Banner */}
      <div className="bg-blue-800 rounded-lg p-4 md:p-6 md:mx-24 mb-8">
        <h2 className="text-white text-xl font-bold mb-4">
          Ready to learn more? Explore all of our resources by topic.
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for any topic..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
            />
          </div>
          <div className="flex gap-4">
            <button className="bg-white px-4 py-2 rounded flex items-center justify-between min-w-40">
              Filter by topic
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            <button className="bg-white px-4 py-2 rounded flex items-center justify-between min-w-40">
              Filter by type
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category
                ? "bg-blue-100 text-blue-700 border border-blue-300"
                : "border border-gray-300 text-gray-700"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // Reset to the first page when category changes
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {currentResources.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-3 mb-4">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className={`text-sm font-medium px-3 py-1 rounded-full ${randomStyle()}`}
                  >
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="font-bold text-gray-800 text-xl mb-3">
                {post.title}
              </h3>

              <p className="text-gray-500 text-base mb-4">{post.description}</p>

              {/* Push the link to the bottom */}
              <div className="mt-auto">
                {post.action.type === "download" ? (
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
                  >
                    {post.action.label} <Download className="ml-1 w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
                  >
                    {post.action.label} <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {filteredResources.length > postsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ResourceExplorer;
