"use client";

import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaCheck, FaUserFriends, FaUserGraduate } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

type UserRole = "center_owner" | "center_user" | "parent";
type EnrollmentCapacity = "1-9" | "10-19" | "20-99" | "100+" | "other";
type BusinessDuration =
  | "1_year_plus"
  | "less_than_1_year"
  | "opening_3_months"
  | "opening_later";
type Purpose = "implement" | "login" | "create_account";

interface FormData {
  role: UserRole | "";
  enrollmentCapacity: EnrollmentCapacity | "";
  businessDuration: BusinessDuration | "";
  email: string;
  firstName: string;
  lastName: string;
  organizationName: string;
  phone: string;
  state: string;
  purpose?: Purpose;
}

interface OnboardingFormProps {
  headings?: {
    step1?: string;
    step2?: string;
    step3?: string;
    step4?: string;
    step5?: string;
    step6?: string;
  };
  showPurposeStep?: boolean;
}

const defaultHeadings = {
  step1: "First, tell us about yourself.",
  step2: "What's your enrollment capacity?",
  step3: "How long has your program been in business?",
  step4: "What's your email address?",
  step5: "Lastly, what's your contact information?",
};

const OnboardingForm = ({
  headings = defaultHeadings,
  showPurposeStep = false,
}: OnboardingFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    role: "",
    purpose: undefined,
    enrollmentCapacity: "",
    businessDuration: "",
    email: "",
    firstName: "",
    lastName: "",
    organizationName: "",
    phone: "",
    state: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = showPurposeStep ? 6 : 5;

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    const {
      role,
      purpose,
      enrollmentCapacity,
      businessDuration,
      email,
      firstName,
      lastName,
      organizationName,
      phone,
      state,
    } = formData;

    if (step === 1 && !role) newErrors.role = "Please select an option";
    if (showPurposeStep && step === 2 && !purpose) {
      newErrors.purpose = "Please select an option";
    }
    if ((showPurposeStep && step === 3) || (!showPurposeStep && step === 2)) {
      if (!enrollmentCapacity)
        newErrors.enrollmentCapacity = "Please select your enrollment capacity";
    }
    if ((showPurposeStep && step === 4) || (!showPurposeStep && step === 3)) {
      if (!businessDuration)
        newErrors.businessDuration = "Please select an option";
    }
    if ((showPurposeStep && step === 5) || (!showPurposeStep && step === 4)) {
      if (!email) newErrors.email = "Email is required";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }
    if ((showPurposeStep && step === 6) || (!showPurposeStep && step === 5)) {
      if (!firstName) newErrors.firstName = "First name is required";
      if (!lastName) newErrors.lastName = "Last name is required";
      if (!organizationName)
        newErrors.organizationName = "Organization name is required";
      if (!phone) newErrors.phone = "Phone number is required";
      else if (!/^[0-9\-\+\(\)\s]+$/.test(phone))
        newErrors.phone = "Invalid phone number";
      if (!state) newErrors.state = "State is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goToNextStep = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const goToPreviousStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Only process submission on final step
    if (step !== totalSteps) {
      return;
    }

    if (!validateStep()) return;

    setSubmitting(true);
    setSubmitted(true);
    alert(JSON.stringify(formData));
    try {
      // Your submission logic here
      const response = await fetch("/api/request-pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (error) {
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center my-20 p-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full text-center">
          <h2 className="text-gray-700 text-2xl mb-6">
            Thank you! A team member will be in touch shortly to provide a
            customized quote.
          </h2>
        </div>
      </div>
    );
  }

  const Progress = ({
    currentStep,
    totalSteps,
  }: {
    currentStep: number;
    totalSteps: number;
  }) => (
    <div className="mb-8">
      <div className="flex justify-center mb-4">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 rounded-full ${
              index + 1 <= currentStep ? "bg-blue-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <p className="text-center text-gray-600">
        {currentStep} of {totalSteps}
      </p>
    </div>
  );

  return (
    <div className=" py-10 flex items-center justify-center w-full p-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-4xl w-full">
        <form onSubmit={onSubmit}>
          {/* Step 1: Role */}
          {step === 1 && (
            <>
              <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                {headings.step1}
              </h1>
              <Progress currentStep={step} totalSteps={totalSteps} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                {[
                  {
                    value: "center_owner",
                    label: "I want Flowysis for my center",
                    icon: (
                      <FaSchoolFlag className="w-20 h-20 p-4  rounded-2xl  text-blue-500" />
                    ),
                  },
                  {
                    value: "center_user",
                    label: "My center already uses Flowysis",
                    icon: (
                      <FaUserGraduate className="w-20 h-20 p-4  rounded-2xl  text-blue-500" />
                    ),
                  },
                  {
                    value: "parent",
                    label: "I am a parent or guardian",
                    icon: (
                      <FaUserFriends className="w-20 h-20 p-4  rounded-2xl  text-blue-500" />
                    ),
                  },
                ].map(({ value, label, icon }) => (
                  <label
                    key={value}
                    className={`border rounded-xl p-6 text-center cursor-pointer relative hover:border-blue-300 transition-colors ${
                      formData.role === value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={` mb-5 rounded-2xl  ${
                          formData.role === value
                            ? " bg-blue-100"
                            : "bg-blue-50"
                        } `}
                      >
                        {icon}
                      </div>
                      <span className="block text-gray-800 font-medium mb-4">
                        {label}
                      </span>
                      <input
                        type="checkbox"
                        name="role"
                        className="absolute top-3 right-3 h-5 w-5"
                        value={value}
                        checked={formData.role === value}
                        onChange={() => handleChange("role", value)}
                      />
                      {formData.role === value && (
                        <FaCheck className="absolute top-3 right-3 text-white w-5 h-5 rounded p-1 bg-blue-500" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
              {errors.role && (
                <p className="text-red-500 mt-2">{errors.role}</p>
              )}
            </>
          )}

          {/* Step 2: Purpose */}
          {showPurposeStep && step === 2 && (
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                What brings you here today?
              </h1>
              <Progress currentStep={step} totalSteps={totalSteps} />
              <div className="grid grid-cols-1 gap-4 w-lg">
                {[
                  {
                    value: "implement",
                    label: "I want to implement Flowysis at my school",
                  },
                  {
                    value: "login",
                    label: "I want to log in to my account",
                  },
                  {
                    value: "create_account",
                    label: "I want to create an account",
                  },
                ].map(({ value, label }) => (
                  <label
                    key={value}
                    className={`border rounded-xl p-6 cursor-pointer relative hover:border-blue-300 transition-colors ${
                      formData.purpose === value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="purpose"
                        className="absolute left-4 h-5 w-5"
                        value={value}
                        checked={formData.purpose === value}
                        onChange={() => handleChange("purpose", value)}
                      />
                      <span className="text-gray-800 text-xl font-medium ml-10">
                        {label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.purpose && (
                <p className="text-red-500 mt-2">{errors.purpose}</p>
              )}
            </div>
          )}

          {/* Step 3: Enrollment Capacity */}
          {((showPurposeStep && step === 3) ||
            (!showPurposeStep && step === 2)) && (
            <>
              <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                {headings.step2}
              </h1>
              <Progress currentStep={step} totalSteps={totalSteps} />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {["1-9", "10-19", "20-99", "100+", "other"].map((capacity) => (
                  <label
                    key={capacity}
                    className={`border rounded-xl p-4  text-center cursor-pointer relative ${
                      formData.enrollmentCapacity === capacity
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="role"
                      className="absolute top-5 left-3 h-5 w-5 "
                      value={capacity}
                      checked={formData.enrollmentCapacity === capacity}
                      onChange={() =>
                        handleChange("enrollmentCapacity", capacity)
                      }
                    />

                    <span className="text-gray-800 text-xl font-medium">
                      {capacity}
                    </span>
                  </label>
                ))}
              </div>
              {errors.enrollmentCapacity && (
                <p className="text-red-500 mt-2">{errors.enrollmentCapacity}</p>
              )}
            </>
          )}

          {/* Step 4: Business Duration */}
          {((showPurposeStep && step === 4) ||
            (!showPurposeStep && step === 3)) && (
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                {headings.step3}
              </h1>
              <Progress currentStep={step} totalSteps={totalSteps} />
              <div className="space-y-4 flex flex-col w-lg">
                {[
                  { value: "1_year_plus", label: "1 year or more" },
                  { value: "less_than_1_year", label: "Less than 1 year" },
                  {
                    value: "opening_3_months",
                    label: "I'm opening in the next 3 months",
                  },
                  {
                    value: "opening_later",
                    label: "I'm opening in more than 3 months",
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`border rounded-xl flex p-4 cursor-pointer relative ${
                      formData.businessDuration === option.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="role"
                      className="absolute top-5 left-3 h-5 w-5"
                      value={option.value}
                      checked={formData.businessDuration === option.value}
                      onChange={() =>
                        handleChange("businessDuration", option.value)
                      }
                    />
                    <span className="text-gray-700 px-9 text-xl font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.businessDuration && (
                <p className="text-red-500 mt-2">{errors.businessDuration}</p>
              )}
            </div>
          )}

          {/* Step 5: Email */}
          {((showPurposeStep && step === 5) ||
            (!showPurposeStep && step === 4)) && (
            <>
              <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                {headings.step4}
              </h1>
              <Progress currentStep={step} totalSteps={totalSteps} />
              <input
                className="w-full border  p-3 rounded-xl text-xl font-medium outline-none focus:border-blue-500"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 mt-2">{errors.email}</p>
              )}
            </>
          )}

          {/* Step 6: Contact Info */}
          {((showPurposeStep && step === 6) ||
            (!showPurposeStep && step === 5)) && (
            <>
              <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                {headings.step5}
              </h1>
              <Progress currentStep={step} totalSteps={totalSteps} />
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border p-3 rounded-xl text-xl font-medium outline-none focus:border-blue-500"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border p-3 rounded-xl text-xl font-medium outline-none focus:border-blue-500"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 mt-2">{errors.firstName}</p>
                )}
                {errors.lastName && (
                  <p className="text-red-500 mt-2">{errors.lastName}</p>
                )}
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="border p-3 rounded-xl mt-4 w-full text-xl font-medium outline-none focus:border-blue-500"
                  value={formData.organizationName}
                  onChange={(e) =>
                    handleChange("organizationName", e.target.value)
                  }
                />
                {errors.organizationName && (
                  <p className="text-red-500 mt-2">{errors.organizationName}</p>
                )}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border p-3 rounded-xl mt-4 w-full text-xl font-medium outline-none focus:border-blue-500"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
                {errors.phone && (
                  <p className="text-red-500 mt-2">{errors.phone}</p>
                )}
                <select
                  className="border p-3 rounded-xl mt-4 w-full text-xl font-medium outline-none focus:border-blue-500"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                >
                  <option value="">Select State</option>
                  {[
                    "AL",
                    "AK",
                    "AZ",
                    "AR",
                    "CA",
                    "CO",
                    "CT",
                    "DE",
                    "FL",
                    "GA",
                    "HI",
                    "ID",
                    "IL",
                    "IN",
                    "IA",
                    "KS",
                    "KY",
                    "LA",
                    "ME",
                    "MD",
                    "MA",
                    "MI",
                    "MN",
                    "MS",
                    "MO",
                    "MT",
                    "NE",
                    "NV",
                    "NH",
                    "NJ",
                    "NM",
                    "NY",
                    "NC",
                    "ND",
                    "OH",
                    "OK",
                    "OR",
                    "PA",
                    "RI",
                    "SC",
                    "SD",
                    "TN",
                    "TX",
                    "UT",
                    "VT",
                    "VA",
                    "WA",
                    "WV",
                    "WI",
                    "WY",
                  ].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              {errors.state && (
                <p className="text-red-500 mt-2">{errors.state}</p>
              )}
            </>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-col w-full justify-center items-center gap-4">
            {step < totalSteps && (
              <button
                type="button"
                className="bg-blue-500 text-white w-fit px-6 py-3 rounded-xl hover:bg-blue-600"
                onClick={goToNextStep}
              >
                Continue
              </button>
            )}
            {step > 1 && (
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={goToPreviousStep}
              >
                Back
              </button>
            )}
            {step === totalSteps && (
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Get Pricing"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingForm;
