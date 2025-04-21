
import ChildcareOperationsSection from "@/components/Childcare/ChildcareOperationsSection";  
import Review from "@/components/Childcare/Review";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import Banner from "@/components/Enrollment/Banner";
import EnrollmentReview from "@/components/Enrollment/EnrollmentReview";
import TabSection from "@/components/Enrollment/EnrollmentTab";
import React from "react";

function page() {
  return (
    <>
      <Banner />
      <EnrollmentReview />
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
