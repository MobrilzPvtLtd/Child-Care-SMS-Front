
import Layout from "../../UI/Layout/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="bg-blue-300 mx-16 p-4  my-10">
        <div className="w-full flex justify-center">
        <div className="w-1/3">
          <h1 className="text-4xl font-semibold text-black text-center my-5">
            Register Now
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="User Icon"
              className="w-16"
            />
          </div>

          <form className="space-y-4">
            <div>
              <input
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder="Domain Name"
                required
              />
            </div>
            <div>
              <input
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder="Institute Name"
                required
              />
            </div>
            <div>
              <input
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder="Institute Name Admin"
                required
              />
            </div>
            <div>
              <input
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                type="text"
                placeholder="Address"
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
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
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
      </div>
    </Layout>
  );
};

export default Register;
