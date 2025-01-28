import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone, FaEnvelope, FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import Layout from "../../UI/Layout/Layout";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What are your business hours?",
      answer: "We are open Monday through Friday, 9:00 AM to 6:00 PM EST.",
    },
    {
      id: 2,
      question: "How long does it take to get a response?",
      answer: "We typically respond to all inquiries within 24-48 business hours.",
    },
    {
      id: 3,
      question: "Do you offer emergency support?",
      answer: "Yes, we provide 24/7 emergency support for critical issues. Additional charges may apply.",
    },
  ];

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <Layout>
    <div className="min-h-[95vh] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-primary-background-color mb-16">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Thank you! We'll be in touch soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white text-black rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-200`}
                  placeholder="Full Name"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-black bg-white rounded-xl border ${errors.email ? "border-red-500" : "border-gray-200"} focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-200`}
                  placeholder="Email"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl text-black bg-white border ${errors.message ? "border-red-500" : "border-gray-200"} focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-200`}
                  placeholder="Your message here..."
                />
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-white  font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:-translate-y-1 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-xl">
                  <FaPhone className="w-6 h-6 text-indigo-600" />
                  <span className="text-lg text-gray-700">+1 (000) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <FaEnvelope className="w-6 h-6 text-purple-600" />
                  <span className="text-lg text-gray-700">support@example.com</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-xl">
                  <FaMapMarkerAlt className="w-6 h-6 text-pink-600" />
                  <span className="text-lg text-gray-700">E-38 Sector-63 , Noida</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-100 pb-4">
                    <button
                      className="flex justify-between items-center w-full text-left p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      onClick={() =>
                        setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                      }
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <FaChevronDown
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${expandedFaq === faq.id ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedFaq === faq.id && (
                      <p className="mt-4 px-4 text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs;
