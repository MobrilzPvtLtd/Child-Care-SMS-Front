    
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import ReviewWithImage from "@/components/common/ReviewWithImage";
import Banner from "@/components/DailyReport/Banner";
import TabSection from "@/components/DailyReport/DailyReportTab";
import Review from "@/components/DailyReport/Review";
import Template from "@/components/DailyReport/Template";
import FlowysisSection from "@/components/DetailUser/DetailUser";
 
import React from "react";

function page() {
  const testimonialData = {
    title: "Manage your preschool classroom with ease",
    imageSrc: "/mba.jpg",
    imageAlt: "Childcare professional testimonial",
    quote: "Flowysis helps me manage every aspect of our program from signing in and out to billing to maintaining relationships with families. I love that it's all in one system and centralized.",
    authorName: "Alyssa D.",
    authorTitle: "Executive Director of McNeilly Center for Children in Nashville, TN"
  };
  return (
    <>
      <Banner /> 
      <ReviewWithImage {... testimonialData}  />
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
