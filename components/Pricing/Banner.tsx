// pages/index.tsx
import React from "react";
import Header2 from "../common/Header/header2";
import OnboardingForm from "../common/OnboardingForm";

export default function Banner() {

    const customHeadings = {
        step1: "We'll need some info to customize your pricing.",
        step2: "What's your enrollment capacity?",
        step3: "How long has your program been in business?",
        step4: "What's your email address?",
        step5: "Lastly, what's your contact information?",
      };
  return (
    <div className=" bg-[#5463d6] min-h-screen">
      <Header2 />
      <div className="  flex flex-col items-center py-10  text-center bg-[#5463d6]">
        <h1 className="text-6xl font-bold text-center text-white leading-20 mb-5 max-w-6xl">
          Discover the #1 rated platform for early education with our best
          pricing ever.
        </h1>
        <OnboardingForm showPurposeStep={false }  headings={customHeadings}/>
      </div>
    </div>
  );
}
