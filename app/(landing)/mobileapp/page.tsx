import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser"; 
import TestimonialsCarousel from "@/components/home/Testimonial"; 
import TabSection from "@/components/mobileapp/AppTab";
import Banner from "@/components/mobileapp/Banner";
import Review from "@/components/mobileapp/Review"; 
import React from "react";

function page() {
  return (
    <>
      <Banner />
      <Review />
      <TabSection />
      <TestimonialsCarousel /> 
      <FAQAccordion />
      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
