
import AttendanceReview from "@/components/Attendance/AttendanceReview";
import TabSection from "@/components/Attendance/AttendenceTab";
import Banner from "@/components/Attendance/Banner";
import Review from "@/components/Attendance/Review";
import ChildcareReview from "@/components/Childcare/ChildcareReview";  
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
      < AttendanceReview />
      <FlowysisSection />
      <FAQAccordion />
      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
