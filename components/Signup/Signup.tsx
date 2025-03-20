
"use client";
import { 
  FaEye,
  FaEyeSlash, 
} from "react-icons/fa";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import axios from "axios";

// Define the form data interface
interface FormData {
  fname: string;
  lname: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

// Define the errors interface
interface FormErrors {
  fname?: string;
  lname?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Validation schema using Yup
  const validationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const errorObj: FormErrors = {};
      (validationErrors as Yup.ValidationError).inner.forEach((error : any) => {
        errorObj[error.path as keyof FormErrors] = error.message;
      });
      setErrors(errorObj);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateForm();

    if (isValid && isChecked) {
      try {
        const response = await axios.post("http://localhost:3000/api/signup", formData);
        console.log("Signup successful:", response.data);
        // Handle successful signup (e.g., redirect, show success message)
      } catch (error) {
        console.error("Signup failed:", error);
        // Handle error (e.g., show error message)
      }
    }
  };

  const isFormValid: boolean =
    !!formData.fname &&
    !!formData.lname &&
    !!formData.email &&
    !!formData.phoneNumber &&
    !!formData.password &&
    !!formData.confirmPassword &&
    formData.password === formData.confirmPassword &&
    isChecked &&
    Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md ">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-center pb-1">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mb-4"
            >
              <>
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
              </>
            </Link>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First Name<span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your first name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  onChange={handleChange}
                  onBlur={validateForm}
                  value={formData.fname}
                />
                {errors.fname && (
                  <p className="mt-1 text-sm text-error-500">{errors.fname}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last Name<span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your last name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  onChange={handleChange}
                  onBlur={validateForm}
                  value={formData.lname}
                />
                {errors.lname && (
                  <p className="mt-1 text-sm text-error-500">{errors.lname}</p>
                )}
              </div>
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
                onBlur={validateForm}
                value={formData.email}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-error-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number<span className="text-error-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                onChange={handleChange}
                onBlur={validateForm}
                value={formData.phoneNumber}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-error-500">{errors.phoneNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password<span className="text-error-500">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  onChange={handleChange}
                  onBlur={validateForm}
                  value={formData.password}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-error-500">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password<span className="text-error-500">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder="Confirm your password"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  onChange={handleChange}
                  onBlur={validateForm}
                  value={formData.confirmPassword}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-error-500">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 w-6 h-6 text-brand-500 border-gray-300 rounded focus:ring-brand-500 dark:bg-gray-800 dark:border-gray-600"
                checked={isChecked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)}
              />
              <p className="font-normal text-gray-500 dark:text-gray-400 text-sm">
                By creating an account means you agree to the{" "}
                <span className="text-gray-800 dark:text-white/90">
                  Terms and Conditions,
                </span>{" "}
                and our{" "}
                <span className="text-gray-800 dark:text-white">
                  Privacy Policy
                </span>
              </p>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md transition ${
                isFormValid
                  ? "bg-brand-500 hover:bg-brand-600 focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}