import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer1() {
  return (
    <footer className="bg-[#1e2347] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Our Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Solutions</h3>
          <div className="h-1 w-8 bg-blue-500 mb-4" />
          <ul className="space-y-2 text-sm">
            <li>Preschools & Child Care</li>
            <li>Government & Network Partners</li>
            <li>Parents</li>
            <li>COVID-19 Solutions</li>
            <li>Nannies/Caregivers</li>
            <li>Montessori</li>
          </ul>
        </div>

        {/* Our Product */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Product</h3>
          <div className="h-1 w-8 bg-red-400 mb-4" />
          <ul className="space-y-2 text-sm">
            <li>Billing/Payments</li>
       
            <li>Payroll</li>
           
            <li>Attendance tracking</li>
            <li>Communication</li>
            <li>Center Management</li>
            <li>Daily Activity Report</li>
            <li>Lesson Plans</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <div className="h-1 w-8 bg-yellow-400 mb-4" />
          <ul className="space-y-2 text-sm">
            
            <li>Customer Stories</li>
            
            <li>Help Center</li>
            <li>Pricing</li>
            <li>Webinars</li>
            <li>Blog</li>
            <li>eBooks</li>
           
         
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <div className="h-1 w-8 bg-teal-400 mb-4" />
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Security & Safety</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <button className="mt-4 bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md font-semibold">
            Get a demo
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-end items-center gap-6">
      

        <div className="flex justify-center gap-4 text-blue-300 text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">© 2025 Mobrilz. All rights reserved.</p>
    </footer>
  );
}
