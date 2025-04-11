import { ExternalLink } from 'lucide-react';

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

const BlogPostCards = () => {
  const blogPosts = [
    {
      id: 1,
      image: "plan3.png",
      title: "9 Essential Features of Childcare Management Software",
      description: "Choosing the right childcare software is a big decision for your business. Learn about the essential features that can streamline your daily operations and save you time.",
      categories: ["Business", "Blog post", "Software", "Childcare"],
      link: "#"
    },
    {
      id: 2,
      image: "plan3.png",
      title: "7 Ways to Increase Enrollment in Your Childcare Program",
      description: "Discover how to increase enrollment in your preschool program, expand your childcare business, and influence your bottom line.",
      categories: ["Business", "Blog post", "Marketing", "Enrollment"],
      link: "#"
    },
    {
      id: 3,
      image: "plan3.png",
      title: "Expense Management Software for Childcare Businesses",
      description: "Learn more about how expense management software can support your childcare business and how to choose the right business expense tracker.",
      categories: ["Business", "Blog post", "Finance", "Expense Management"],
      link: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Review the latest insights & resources about childcare software
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
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
              
              <p className="text-gray-500 text-base mb-4">
                {post.description}
              </p>
              
              {/* Push the link to the bottom */}
              <div className="mt-auto">
                <a 
                  href={post.link}
                  className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
                >
                  Read Now <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostCards;