import Banner from "@/components/Childcare/Banner";
import ChildcareOperationsSection from "@/components/Childcare/ChildcareOperationsSection";  
import Review from "@/components/Classroom/Banner";
import TabSection from "@/components/Classroom/ClassroomTab";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import React from "react";
import ClassReview from "./ClassReview";

function page() {
  return (
    <>
      <Banner />
      <ClassReview />
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
