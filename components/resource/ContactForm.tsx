import React from "react";

export default function ContactForm() {
  return (
    <section className="w-full px-4 py-16 flex flex-col items-center bg-white text-center">
      <img
        src="/images/logo/logo-icon.png"
        alt="Logo"
        className="w-28  mb-6"
      />
      <h2 className="text-3xl md:text-4xl font-bold max-w-5xl mb-10">
        Want the ultimate toolkit for running a successful early education program?
      </h2>

      <form className="w-full max-w-xl space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First name *"
            required
            className="flex-1 border border-gray-300 rounded-md px-4 py-3"
          />
          <input
            type="text"
            placeholder="Last name *"
            required
            className="flex-1 border border-gray-300 rounded-md px-4 py-3"
          />
        </div>

        <input
          type="email"
          placeholder="Email *"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3"
        />

        <div className="text-left space-y-2">
          <p className="font-semibold">Are you currently a flow customer? <span className="text-red-500">*</span></p>
          <label className="flex items-center gap-2">
            <input type="radio" name="customer" required className="accent-red-500" /> Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="customer" required className="accent-red-500" /> No
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white font-bold py-3 rounded-md hover:bg-red-600 transition"
        >
          Sign up for our free email series!
        </button>
      </form>
    </section>
  );
}
