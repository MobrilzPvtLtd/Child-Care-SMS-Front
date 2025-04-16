import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import Banner from "@/components/home/Banner";
import BrightSupport from "@/components/home/BrightSupport";
import TabSection from "@/components/home/TabSection";
import TestimonialsCarousel from "@/components/home/Testimonial";
import BrightReview from "@/components/review/Review";
import React from "react";

function page() {
  return (
    <>
      <Banner />
      <BrightReview />
      {/* <Banner2/> */}
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
