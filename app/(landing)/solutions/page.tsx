import BrightReview from "@/components/brightreview/BrightReview";
import FlowysisSection from "@/components/brightwheel/BrightWheel";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import Banner from "@/components/home/Banner";
import RoleSelection from "@/components/home/RoleSeclection";
import TabSection from "@/components/home/TabSection";
import TestimonialsCarousel from "@/components/home/Testimonial";
import React from "react";

function page() {
  return (
    <>
      <Banner />
      <BrightReview />
      {/* <Banner2/> */}
      <TabSection />
      {/* <BrightSupport /> */}
      <TestimonialsCarousel />
      <FlowysisSection />
      < FAQAccordion />
      < BlogPostCards />
      {/* <RoleSelection/> */}
      <Footer />
    </>
  );
}

export default page;
