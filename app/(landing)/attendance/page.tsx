
import AttendanceReview from "@/components/Attendance/AttendanceReview";
import TabSection from "@/components/Attendance/AttendenceTab";
import Banner from "@/components/Attendance/Banner"; 
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import Review from "@/components/common/Review";
import ReviewWithImage from "@/components/common/ReviewWithImage";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import { Clock, FileText, Users, DollarSign } from "lucide-react";
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

  const reviewData = {
    title: "How Flowysis makes attendance a breeze",
    features: [
      {
        icon: Clock,
        bgColor: "bg-blue-400",
        title: "Save time with digital check-in and check-out",
      },
      {
        icon: FileText,
        bgColor: "bg-purple-500",
        title: "Easily pull accurate attendance reports",
      },
      {
        icon: Users,
        bgColor: "bg-teal-500",
        title: "Stay in compliance with ratio and capacity tools",
      },
      {
        icon: DollarSign,
        bgColor: "bg-pink-500",
        title: "Integrate your billing with attendance",
      }
    ],
    borderTop: false,
    bgColor: "bg-gray-100"
  };
  return (
    <>
      <Banner /> 
      <ReviewWithImage {... testimonialData}  />
      <Review {...reviewData} />
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
