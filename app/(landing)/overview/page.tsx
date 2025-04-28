import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import TestimonialsCarousel from "@/components/home/Testimonial";
import Banner from "@/components/Overview/Banner";
import TabSection from "@/components/Overview/OverviewTab"; 
import React from "react";
import { Clock, Users, Heart, MessageSquare } from "lucide-react";
import Review from "@/components/common/Review";

function page() {

  const reviewData = {
    title: "Why Flowysis is the #1 software solution for childcare providers",
    features: [
      {
        icon: Clock,
        bgColor: "bg-blue-400",
        title: "Save up to 20 hours per month",
        description: "Cut down on admin tasks and manage all areas of your program with Flowysis."
      },
      {
        icon: Users,
        bgColor: "bg-teal-500",
        title: "Get paid without chasing parents",
        description: "Enable your staff to easily communicate with families, administrators, and other staff."
      },
      {
        icon: MessageSquare,
        bgColor: "bg-purple-500",
        title: "Build quality connections",
        description: "Enable your staff to easily communicate with families, administrators, and other staff."
      },
      {
        icon: Heart,
        bgColor: "bg-pink-500",
        title: "Increase staff retention",
        description: "2 out of 3 teachers prefer to work at a program that uses Flowysis."
      }
    ]
  };
  return (
    <>
      <Banner />
      <Review {...reviewData} />
      <TabSection />
      <TestimonialsCarousel />
      <FlowysisSection />
      <FAQAccordion />

      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
