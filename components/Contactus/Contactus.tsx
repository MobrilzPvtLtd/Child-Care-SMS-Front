"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import { axiosInstance } from "@/utils/axios";
import { useRouter } from "next/navigation";

// Define the form data interface
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define the errors interface
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  apiError?: string;
}

// Define touched fields interface
interface TouchedFields {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

export default function ContactUsPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors] || errors.apiError) {
      setErrors((prev) => {
        const { apiError, [name as keyof FormErrors]: removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const validateField = async (field: keyof ContactFormData) => {
    try {
      await validationSchema.validateAt(field, formData);
      setErrors((prev) => {
        const { apiError, [field]: removed, ...rest } = prev;
        return rest;
      });
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        [field]: (error as Yup.ValidationError).message,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as keyof ContactFormData;
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const errorObj: FormErrors = {};
      (validationErrors as Yup.ValidationError).inner.forEach((error: any) => {
        errorObj[error.path as keyof FormErrors] = error.message;
      });
      setErrors(errorObj);
      return Object.keys(errorObj).length === 0;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const isValid = await validateForm();

    if (isValid) {
      setIsSubmitting(true);
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      console.log("Payload sent to API:", payload);

      try {
        const response = await axiosInstance.post("/contact/submit", payload);
        console.log("Contact form submitted successfully:", response.data);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTouched({ name: false, email: false, subject: false, message: false });
        router.push("/contact/success"); // Redirect to a success page
      } catch (error: any) {
        const apiErrorMessage =
          error.response?.data?.message ||
          "An error occurred. Please try again.";
        setErrors((prev) => ({
          ...prev,
          apiError: apiErrorMessage,
        }));
        console.error("Contact form error:", error.response);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isFormValid: boolean =
    !!formData.name &&
    !!formData.email &&
    !!formData.subject &&
    !!formData.message &&
    Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-center pb-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={250}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={250}
                height={40}
              />
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Contact Us
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name<span className="text-error-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.name}
              />
              {touched.name && errors.name && (
                <p className="mt-1 text-sm text-error-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email<span className="text-error-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.email}
              />
              {touched.email && errors.email && (
                <p className="mt-1 text-sm text-error-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject<span className="text-error-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.subject}
              />
              {touched.subject && errors.subject && (
                <p className="mt-1 text-sm text-error-500">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message<span className="text-error-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.message}
              />
              {touched.message && errors.message && (
                <p className="mt-1 text-sm text-error-500">{errors.message}</p>
              )}
            </div>

            {/* Display API error if it exists */}
            {errors.apiError && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md">
                {errors.apiError}
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md transition ${
                isFormValid && !isSubmitting
                  ? "bg-brand-500 hover:bg-brand-600 focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Back to{" "}
              <Link
                href="/"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium"
              >
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}