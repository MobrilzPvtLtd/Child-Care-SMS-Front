import { Search } from "lucide-react";
import {
  Star,
  ClipboardList,
  Settings,
  PenTool,
  DollarSign,
  BarChart2,
  Users,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function HelpBanner() {
  const quickLinks = [
    "Flowysis Premium",
    "Get started with Flowysis",
    "Quickstart guide to set up Billing",
    "Get started with attendance",
    "Messaging Overview",
    "Log activities",
  ];

  const categories = [
    {
      icon: <ClipboardList className="text-teal-600" />,
      title: "Program Management",
      authors: 3,
      articles: 43,
    },
    {
      icon: <Settings className="text-teal-600" />,
      title: "Account Management",
      authors: 5,
      articles: 36,
    },
    {
      icon: <PenTool className="text-teal-600" />,
      title: "Using Flowysis",
      authors: 5,
      articles: 91,
      highlighted: true,
    },
    {
      icon: <DollarSign className="text-teal-600" />,
      title: "Billing",
      authors: 5,
      articles: 78,
    },
    {
      icon: <BarChart2 className="text-teal-600" />,
      title: "Reporting",
      authors: 3,
      articles: 34,
    },
    {
      icon: <Users className="text-teal-600" />,
      title: "For Guardians",
      authors: 4,
      articles: 33,
    },
  ];
  return (
    <>
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/banner-pg.jpg')" }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Advice and answers from the Flowsysis team
          </h1>

          <div className="flex items-center bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-4 py-2 w-full max-w-xl mx-auto">
            <Search className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for articles..."
              className="bg-transparent focus:outline-none w-full text-black placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Get the most out of Flowsysis{" "}
            <Star className="text-yellow-400 w-5 h-5" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:underline flex items-center justify-between"
              >
                {link} <span className="text-indigo-600">›</span>
              </a>
            ))}
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border ${
                cat.highlighted
                  ? "border-indigo-300 shadow-md"
                  : "border-gray-200"
              } bg-white flex items-start gap-4`}
            >
              <div className="bg-gray-100 rounded-lg p-3">{cat.icon}</div>
              <div>
                <h3
                  className={`font-semibold ${
                    cat.highlighted ? "text-indigo-600" : "text-gray-900"
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {cat.authors} author{cat.authors > 1 && "s"} • {cat.articles}{" "}
                  articles
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-[#364489] text-white py-12 text-center">
      {/* Logo */}
      <div className="mb-4">
        <span className="text-2xl font-semibold tracking-tight">Flowsysis</span>
      </div>

      {/* Links */}
      <div className="flex justify-center gap-8 text-sm mb-6">
        <a href="#" className="hover:underline">
         Flowsysis Website
        </a>
        <a href="#" className="hover:underline">
          Early Education Resources
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-gray-300">
          <Facebook size={18} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Twitter size={18} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
    </>
  );
}
