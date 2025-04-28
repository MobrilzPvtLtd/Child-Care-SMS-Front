import Banner from "@/components/Childcare/Banner";
import ChildcareOperationsSection from "@/components/Childcare/ChildcareOperationsSection";  
import Review from "@/components/Classroom/Banner";
import TabSection from "@/components/Classroom/ClassroomTab";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import React from "react"; 
import ReviewWithImage from "@/components/common/ReviewWithImage";

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
