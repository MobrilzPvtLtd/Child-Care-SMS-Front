import Banner from "@/components/Childcare/Banner";
import ChildcareOperationsSection from "@/components/Childcare/ChildcareOperationsSection";
import ChildcareReview from "@/components/Childcare/ChildcareReview";
import TabSection from "@/components/Childcare/ChildcareTab";
import Review from "@/components/Childcare/Review";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import React from "react";

function page() {
  return (
    <>
      <Banner />
      <ChildcareReview />
      <Review />
      <TabSection />
      <ChildcareOperationsSection />
      <FlowysisSection />
      <FAQAccordion />
      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
