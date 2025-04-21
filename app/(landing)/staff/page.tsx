 
import ChildcareOperationsSection from "@/components/Childcare/ChildcareOperationsSection";  
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import Banner from "@/components/Staff/Banner";
import Review from "@/components/Staff/Review";
import StaffReview from "@/components/Staff/StaffReview";
import TabSection from "@/components/Staff/StaffTab";
import React from "react"; 

function page() {
  return (
    <>
      <Banner />
      <StaffReview />
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
