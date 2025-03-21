"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import { axiosInstance } from "@/utils/axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/UserContext";

// Define the form data interface (for UI input fields)
interface FormData {
  fname: string;
  lname: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  instituteName: string;
  address: string; // Updated key
}

// Define the API payload interface
interface ApiPayload {
  name: string;
  email: string;
  password: string;
  role: string;
  instituteName: string;
  address: string;
  phoneNumber: string;
}

// Define the errors interface
interface FormErrors {
  fname?: string;
  lname?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  instituteName?: string;
  address?: string; // Updated key
  apiError?: string;
}

// Define touched fields interface
interface TouchedFields {
  fname: boolean;
  lname: boolean;
  email: boolean;
  phoneNumber: boolean;
  password: boolean;
  confirmPassword: boolean;
  instituteName: boolean;
  address: boolean; // Updated key
}

export default function SignUpForm() {
  const router = useRouter();
  const { user, setUser, logout } = useUser();
  const searchParams = useSearchParams();

  const serviceid = searchParams.get('serviceid');
  const billingPeriod = searchParams.get('billingPeriod');
  const price = searchParams.get('price');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    instituteName: "",
    address: "", // Updated key
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({
    fname: false,
    lname: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
    instituteName: false,
    address: false, // Updated key
  });

  // Validation schema using Yup
  const validationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(
        /^[0-9]{10,15}$/,
        "Phone number must be between 10 and 15 digits"
      )
      .required("Phone number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    instituteName: Yup.string().required("Institute name is required"),
    address: Yup.string().required("Institute address is required"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field being edited and apiError
    if (errors[name as keyof FormErrors] || errors.apiError) {
      setErrors((prev) => {
        const { apiError, [name as keyof FormErrors]: removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const validateField = async (field: keyof FormData) => {
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
    const field = e.target.name as keyof FormData;
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
      fname: true,
      lname: true,
      email: true,
      phoneNumber: true,
      password: true,
      confirmPassword: true,
      instituteName: true,
      address: true,
    });

    const isValid = await validateForm();

    if (isValid && isChecked) {
      const fullName = `${formData.fname} ${formData.lname}`.trim();

      const payload: ApiPayload = {
        name: fullName,
        email: formData.email,
        password: formData.password,
        role: "institute",
        instituteName: formData.instituteName,
        address: formData.address,
        phoneNumber: formData.phoneNumber,
      };

      console.log("Payload sent to API:", payload);

      try {
        const response = await axiosInstance.post("/auth/register/", payload);
        setUser({ id :response.data.data.user.iserId ,
            username: response.data.data.user.username,
            email: response.data.data.user.email,
           isAuthenticated: true }); 
        router.push(`/invoice?instituteId=${response?.data?.data?.user?.userId}&serviceid=${serviceid}&billingPeriod=${billingPeriod}&price=${price}`)
      } catch (error: any) {
        const apiErrorMessage =
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.message ||
          "An error occurred. Please try again.";
        setErrors((prev) => ({
          ...prev,
          apiError: apiErrorMessage,
        }));
        console.error("Signup error:", error.response);
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
    !!formData.instituteName &&
    !!formData.address && // Updated key
    formData.password === formData.confirmPassword &&
    isChecked &&
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
                  onBlur={handleBlur}
                  value={formData.fname}
                />
                {touched.fname && errors.fname && (
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
                  onBlur={handleBlur}
                  value={formData.lname}
                />
                {touched.lname && errors.lname && (
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
                onBlur={handleBlur}
                value={formData.email}
              />
              {touched.email && errors.email && (
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
                onBlur={handleBlur}
                value={formData.phoneNumber}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <p className="mt-1 text-sm text-error-500">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Institute Name<span className="text-error-500">*</span>
              </label>
              <input
                type="text"
                id="instituteName"
                name="instituteName"
                placeholder="Enter your institute name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.instituteName}
              />
              {touched.instituteName && errors.instituteName && (
                <p className="mt-1 text-sm text-error-500">
                  {errors.instituteName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Address<span className="text-error-500">*</span>{" "}
                {/* Updated label */}
              </label>
              <input
                type="text"
                id="address" // Updated id
                name="address" // Updated name
                placeholder="Enter your institute address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.address} // Updated key
              />
              {touched.address && errors.address && (
                <p className="mt-1 text-sm text-error-500">{errors.address}</p>
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
                  onBlur={handleBlur}
                  value={formData.confirmPassword}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="mt-1 text-sm text-error-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 w-6 h-6 text-brand-500 border-gray-300 rounded focus:ring-brand-500 dark:bg-gray-800 dark:border-gray-600"
                checked={isChecked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIsChecked(e.target.checked)
                }
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
            {/* Display API error if it exists */}
            {errors.apiError && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md">
                {errors.apiError}
              </div>
            )}

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
              <span 
                onClick={() => router.push(`/login?serviceid=${serviceid}&billingPeriod=${billingPeriod}&price=${price}`)}
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium cursor-pointer "
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
