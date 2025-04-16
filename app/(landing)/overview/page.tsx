import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import TestimonialsCarousel from "@/components/home/Testimonial";
import Banner from "@/components/Overview/Banner";
import TabSection from "@/components/Overview/OverviewTab";
import Review from "@/components/Overview/Review";
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
