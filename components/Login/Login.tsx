"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import { axiosInstance } from "@/utils/axios";
import { useUser } from "@/context/UserContext";
import { useRouter, useSearchParams } from "next/navigation";

// Define the form data interface
interface LoginFormData {
  email: string;
  password: string;
}

// Define the errors interface
interface LoginFormErrors {
  email?: string;
  password?: string;
  apiError?: string;
}

// Define touched fields interface
interface TouchedFields {
  email: boolean;
  password: boolean;
}

export default function LoginForm() {
  const { user, setUser, logout } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  const serviceid = searchParams.get("serviceid");
  const billingPeriod = searchParams.get("billingPeriod");
  const price = searchParams.get("price");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({
    email: false,
    password: false,
  });

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

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field being edited and apiError
    if (errors[name as keyof LoginFormErrors] || errors.apiError) {
      setErrors((prev) => {
        const {
          apiError,
          [name as keyof LoginFormErrors]: removed,
          ...rest
        } = prev;
        return rest;
      });
    }
  };

  const validateField = async (field: keyof LoginFormData) => {
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const field = e.target.name as keyof LoginFormData;
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field);
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
      return Object.keys(errorObj).length === 0;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      email: true,
      password: true,
    });

    const isValid = await validateForm();

    if (isValid) {
      try {
        const response = await axiosInstance.post("/auth/login/", formData);
        setUser({
          id: response.data.data.user.userId,
          username: response.data.data.user.username,
          email: response.data.data.user.email,
          isAuthenticated: true,
        });
        if (serviceid && billingPeriod && price ) {
          router.push(
            `/invoice?instituteId=${user?.id || response.data.data.user.userId}&serviceid=${serviceid}&billingPeriod=${billingPeriod}&price=${price}`
          );
        } else {
          router.push(`/`);
        }
        // console.log( "Login successful:", response.data.data);
      } catch (error: any) {
        const apiErrorMessage =
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.message ||
          "Invalid email or password. Please try again.";
        setErrors((prev) => ({
          ...prev,
          apiError: apiErrorMessage,
        }));
        console.error("Login error:", error.response);
      }
    }
  };

  const isFormValid: boolean =
    !!formData.email && !!formData.password && Object.keys(errors).length === 0;

  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-50 dark:bg-gray-900 p-4">
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
                onBlur={handleBlur}
                value={formData.email}
              />
              {touched.email && errors.email && (
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
                  onBlur={handleBlur}
                  value={formData.password}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {touched.password && errors.password && (
                <p className="mt-1 text-sm text-error-500">{errors.password}</p>
              )}
            </div>

            {/* Display API error if it exists */}
            {errors.apiError && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md">
                {errors.apiError}
              </div>
            )}

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
              Don't have an account?{" "}
              <span 
                onClick={() => router.push(`/signup?serviceid=${serviceid}&billingPeriod=${billingPeriod}&price=${price}`)}
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium cursor-pointer "
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
