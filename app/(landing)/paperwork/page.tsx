
import ChildcareReview from "@/components/Childcare/ChildcareReview"; 
import Review from "@/components/Childcare/Review";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import Banner from "@/components/Paperwork/Banner";
import TabSection from "@/components/Paperwork/PaperworkTab";
import React from "react";

function page() {
  return (
    <>
      <Banner />
      <ChildcareReview />
      <Review />
      <TabSection /> 
      <FlowysisSection />
      <FAQAccordion />
      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
