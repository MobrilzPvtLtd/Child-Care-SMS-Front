import Banner from "@/components/Billing/Banner"; 
import TabSection from "@/components/Billing/BillingTab";
import Review from "@/components/Billing/Review";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer"; 
import FlowysisSection from "@/components/DetailUser/DetailUser";
import BrightSupport from "@/components/home/BrightSupport";
import TestimonialsCarousel from "@/components/home/Testimonial";
import React from "react";

function page() {
  return (
    <>
      <Banner />
      <Review />
      <TabSection />
      <TestimonialsCarousel />
      <FlowysisSection />
      <FAQAccordion />
      <BlogPostCards /> 
      <Footer />
    </>
  );
}

export default page;
