import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";  
import FlowysisSection from "@/components/DetailUser/DetailUser";
import TestimonialsCarousel from "@/components/home/Testimonial";
import Banner from "@/components/Learning/Banner";
import TabSection from "@/components/Learning/LearningTab";
import PartnershipBanner from "@/components/Learning/PartnershipBanner";
import Review from "@/components/Learning/Review";

import React from "react";

function page() {
  return (
    <>
      <Banner /> 
      <Review />
      <TabSection />
      <PartnershipBanner />
      <TestimonialsCarousel />
      <FlowysisSection />
      <FAQAccordion />
      <Footer />
    </>
  );
}

export default page;
