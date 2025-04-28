  
import ChildcareReview from "@/components/Childcare/ChildcareReview";  
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import Banner from "@/components/DailyReport/Banner";
import TabSection from "@/components/DailyReport/DailyReportTab";
import Review from "@/components/DailyReport/Review";
import Template from "@/components/DailyReport/Template";
import FlowysisSection from "@/components/DetailUser/DetailUser";
 
import React from "react";

function page() {
  return (
    <>
      <Banner />
      <ChildcareReview /> 
      < Review />
      <TabSection /> 
      < Template />
      <FlowysisSection />
      <FAQAccordion />
      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
