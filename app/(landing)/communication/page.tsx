import Footer from "@/components/common/Footer/Footer";
import Banner from "@/components/Communication/Banner";
import TabSection from "@/components/Communication/CommunicationTab";
import DetailReview from "@/components/Communication/DetailReview";
import Review from "@/components/Communication/Review";
import FlowysisSection from "@/components/DetailUser/DetailUser"; 
import BrightSupport from "@/components/home/BrightSupport"; 
import TestimonialsCarousel from "@/components/home/Testimonial"; 
import React from "react";

function page() {
  return (
    <>
      <Banner />
      < DetailReview />
      <Review /> 
      <TabSection />
      <BrightSupport />
      <TestimonialsCarousel />
      <FlowysisSection />
      {/* <RoleSelection/> */}
      <Footer />
    </>
  );
}

export default page;
