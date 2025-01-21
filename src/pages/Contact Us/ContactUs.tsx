// import React from "react";
import Layout from "../../UI/Layout/Layout";
import profile from "../../assets/images/profilepic.jpg";
// import photo11 from "../../Data/singing-contract.json"

const ContactUs = () => {
  return (
    <Layout>
      <h3>hu</h3>
      <div className="bg-blue-400 flex justify-around gap-4">
        <div>
          <h3>HERE WE FOR U </h3>
        </div>
        <div className="bg-slate-200">
          <form className="space-y-4  ">
            <div>
              <input
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <input
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder="Institute "
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="w-full  flex justify-center py-4 ">
        <div className="w-full md:w-1/2  shadow-xl py-5 bg-blue-400 rounded">
          <h1 className="  text-4xl font-semibold text-black text-center my-5">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <img src={profile} alt="pic" />
          
        </div>
        <div className="shadow-xl">
          <h2 className="text-black">Get In Touch</h2>
          <form className="space-y-4  ">
            <div>
              <input
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <input
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder="Institute "
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </Layout>
  );
};

export default ContactUs;
