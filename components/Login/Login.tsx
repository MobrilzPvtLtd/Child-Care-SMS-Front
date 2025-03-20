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
interface LoginFormData {
  email: string;
  password: string;
}

// Define the errors interface
interface LoginFormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
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
      const errorObj: LoginFormErrors = {};
      (validationErrors as Yup.ValidationError).inner.forEach((error: any) => {
        errorObj[error.path as keyof LoginFormErrors] = error.message;
      });
      setErrors(errorObj);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateForm();

    if (isValid) {
      try {
        const response = await axios.post("http://localhost:3000/api/login", formData);
        console.log("Login successful:", response.data);
        // Handle successful login (e.g., redirect, set auth token)
      } catch (error) {
        console.error("Login failed:", error);
        // Handle error (e.g., show error message)
      }
    }
  };

  const isFormValid: boolean =
    !!formData.email &&
    !!formData.password &&
    Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
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

            <div className="flex items-center justify-between">
              <Link
                href="/forgot-password"
                className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium"
              >
                Forgot Password?
              </Link>
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
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}