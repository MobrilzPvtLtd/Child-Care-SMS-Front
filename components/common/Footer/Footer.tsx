import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e2347] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Our Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Solutions</h3>
          <div className="h-1 w-8 bg-blue-400 mb-4" />
          <ul className="space-y-2 text-base font-medium">
            <li>
              {" "}
              <Link href="/overview">Preschools & Children Care</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/overview">Centers</Link>
            </li>
            <li>
              {" "}
              <Link href="/overview">Schools</Link>
            </li>
            <li>
              {" "}
              <Link href="/parent">Parents</Link>
            </li>
          </ul>
        </div>

        {/* Our Product */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Product</h3>
          <div className="h-1 w-8 bg-red-400 mb-4" />
          <ul className="space-y-2 text-base font-medium">
            <li>
              <Link href="/owners-directors">Feature overview</Link>
            </li>
            <li>
              <Link href="/billing">Billing/Payments</Link>
            </li>
            <li>
              <Link href="/attendance ">Attended tracking</Link>
            </li>
            <li>
              <Link href="/communication">Communication</Link>
            </li> 
            <li>
              <Link href="/childcare">Centers management</Link>
            </li>
            <li>
              <Link href="/daily-report">Daily Activitiy Report </Link>
            </li>
            <li>
              <Link href="#"> Lesson Plans ( coming soon) </Link>
            </li>
            <li>
              <Link href="#"> Experience Curriculum ( coming soon) </Link>
            </li>
            <li>
              <Link href="/#">Payroll ( coming soon) </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <div className="h-1 w-8 bg-yellow-400 mb-4" />
          <ul className="space-y-2 text-base font-medium">
            <li>
              <Link href="/resource">
                Early education and childcare resources
              </Link>
            </li>
            <li>
              <Link href="/#">School</Link>
            </li>
            <li>
              <Link href="/customer">Customer Stories</Link>
            </li>
            <li>
              <Link href="/help">Help Center</Link>
            </li>
            <li>
              <Link href="/tool-templates">Childcare template & Tool</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <div className="h-1 w-8 bg-teal-400 mb-4" />
          <ul className="space-y-2 text-base font-medium">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Security & Safety</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <button className="mt-4 bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md font-semibold shadow-2xl">
            Get a demo
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 max-w-7xl mx-auto border-slate-400 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-52"></div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src="/images/appStore.png" // Replace with your actual logo path
            alt="Flowysis Logo"
            className="w-full h-10" // Adjust size as needed
          />
          <img
            src="/images/playstore.png" // Replace with your actual logo path
            alt="Flowysis Logo"
            className="w-full h-15" // Adjust size as needed
          />
        </div>

        <div className="flex justify-center gap-2 text-xl">
          <FaFacebookF
            className="bg-blue-300 text-white rounded-full p-1.5 transition-transform duration-300 hover:scale-120"
            size={32}
          />
          <FaTwitter
            className="bg-blue-300 text-white rounded-full p-1.5 transition-transform duration-300 hover:scale-120"
            size={32}
          />
          <FaLinkedinIn
            className="bg-blue-300 text-white rounded-full p-1.5 transition-transform duration-300 hover:scale-120"
            size={32}
          />
          <FaInstagram
            className="bg-blue-300 text-white rounded-full p-1.5 transition-transform duration-300 hover:scale-120"
            size={32}
          />
          <FaYoutube
            className="bg-blue-300 text-white rounded-full p-1.5 transition-transform duration-300 hover:scale-120"
            size={32}
          />
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        © 2025 Flowysis. All rights reserved.
      </p>
    </footer>
  );
}
