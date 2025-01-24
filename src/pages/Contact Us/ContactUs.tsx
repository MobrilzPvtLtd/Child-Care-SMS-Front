// import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import Layout from "../../UI/Layout/Layout";

import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
// import photo11 from "../../Data/singing-contract.json"

const ContactUs = () => {
  return (
    <Layout>
      {/* <div className="flex items-center justify-center w-full h-screen bg-blue-400 py-3">
        <div className="">
          <h3 className="text-6xl text-white font-bold">
            We're Here to <br /> Help!
          </h3>
          <p className="my-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Commodi tempora provident, minus id quaerat aliquid quisquam
            deleniti at ullam praesentium beatae.
          </p>
          <div>
            <ul className="flex justify-between">
              <li className="flex items-center text-xl">
                <FaPhoneAlt />
                <span> +91 8756321231 </span>
              </li>
              <li className="flex items-center text-xl">
                <MdEmail /> <span>Noida564@gmail.com </span>
              </li>
              <li className="flex items-center text-xl">
                <HiLocationMarker /> <span> Noida sec 63 UP </span>
              </li>
            </ul>
          </div>
          <div className="mt-16">
            <ul className="flex justify-center">
              <li>
                <FaFacebook className="text-3xl mx-2" />{" "}
              </li>
              <li>
                <FaTwitter className="text-3xl mx-2" />
              </li>
              <li>
                <FaInstagram className="text-3xl mx-2" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-5 w-1/3 shadow-xl rounded-lg">
          <form className="space-y-4  ">
            <h2 className="text-center text-black font-semibold text-2xl ">
              Get in Touch
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                Name
              </label>
              <input
                type="text"
              
                className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 dark:text-white  focus:outline-none focus:ring-0  "
                placeholder="Enter Your Name"
                required={true}
                value=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                Institute
              </label>
              <input
                type="text"
              
                className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 dark:text-white  focus:outline-none focus:ring-0  "
                placeholder="Enter Your Institute"
                required={true}
                value=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                Email
              </label>
              <input
                type="text"
              
                className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 dark:text-white  focus:outline-none focus:ring-0  "
                placeholder="Enter Your Email"
                required={true}
                value=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                Mobile
              </label>
              <input
                type="text"
                
                className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 dark:text-white  focus:outline-none focus:ring-0  "
                placeholder="Enter Your Mobile "
                required={true}
                value=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                Message
              </label>
              <textarea
                
                className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 dark:text-white  focus:outline-none focus:ring-0  "
                placeholder="Enter Your Message "
                required={true}
                value=""
              >
                {" "}
              </textarea>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div> */}
      <div className=" flex justify-center content-center">
        <div className="w-3/4 h-3/4 py-3 bg-blue-400 flex justify-center gap-4 items-center">
          <div className="flex flex-col items-start w-1/2 space-y-6">
            <h3 className="text-6xl text-white font-bold">
              We're Here to <br /> Help!
            </h3>
            <p className="my-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Commodi tempora provident, minus id quaerat aliquid quisquam
              deleniti at ullam praesentium beatae.
            </p>
            <div>
              <ul className="flex flex-col space-y-4">
                <li className="flex items-center text-xl text-white">
                  <FaPhoneAlt className="mr-2" />
                  <span>+91 8756321231</span>
                </li>
                <li className="flex items-center text-xl text-white">
                  <MdEmail className="mr-2" />
                  <span>Noida564@gmail.com</span>
                </li>
                <li className="flex items-center text-xl text-white">
                  <HiLocationMarker className="mr-2" />
                  <span>Noida sec 63 UP</span>
                </li>
              </ul>
            </div>
            <div className="mt-16">
              <ul className="flex justify-center">
                <li>
                  <FaFacebook className="text-3xl mx-2 text-white" />
                </li>
                <li>
                  <FaTwitter className="text-3xl mx-2 text-white" />
                </li>
                <li>
                  <FaInstagram className="text-3xl mx-2 text-white" />
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-8 w-1/3 shadow-xl rounded-lg mt-10">
            <form className="space-y-6">
              <h2 className="text-center text-black font-semibold text-2xl">
                Get in Touch
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:ring-0"
                  placeholder="Enter Your Name"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                  Institute
                </label>
                <input
                  type="text"
                  className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:ring-0"
                  placeholder="Enter Your Institute"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:ring-0"
                  placeholder="Enter Your Email"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                  Mobile
                </label>
                <input
                  type="text"
                  className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:ring-0"
                  placeholder="Enter Your Mobile"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 dark:text-black py-1">
                  Message
                </label>
                <textarea
                  className="block w-full py-2 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:ring-0"
                  placeholder="Enter Your Message"
                  required={true}
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
