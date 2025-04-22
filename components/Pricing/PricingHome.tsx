import React from "react";
import Banner from "./Banner";
import CenterManagement from "./Center";
import TestimonialsCarousel from "../home/Testimonial";
import OnboardingForm from "../common/OnboardingForm";
import Footer from "../common/Footer/Footer";

function PricingHome() {
    const customHeadings = {
        step1: "First, tell us about yourself.",
        step2: "What's your enrollment capacity?",
        step3: "How long has your program been in business?",
        step4: "What's your email address?",
        step5: "Lastly, what's your contact information?",
      };
  return (
    <>
      <Banner />
      <CenterManagement />
      <TestimonialsCarousel />
      <div className="w-full flex flex-col items-center pt-6 text-center ">
        <h1 className="text-5xl font-bold text-center leading-12  max-w-4xl">
          Get pricing for the easiest all-in-one childcare and preschool app
        </h1>
      </div>
      <OnboardingForm showPurposeStep={false} headings={customHeadings} />
      <Footer />
    </>
  );
}

export default PricingHome;
