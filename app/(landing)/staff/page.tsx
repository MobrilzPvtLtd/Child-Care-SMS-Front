import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import ReviewWithImage from "@/components/common/ReviewWithImage";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import Banner from "@/components/Staff/Banner"; 
import TabSection from "@/components/Staff/StaffTab";
import React from "react"; 
import { Clock, Users, DollarSign, BarChart } from "lucide-react";
import Review from "@/components/common/Review";

function Page() {
  const testimonialData = {
    title: "Manage your preschool classroom with ease",
    imageSrc: "/mba.jpg",
    imageAlt: "Childcare professional testimonial",
    quote: "Flowysis helps me manage every aspect of our program from signing in and out to billing to maintaining relationships with families. I love that it's all in one system and centralized.",
    authorName: "Alyssa D.",
    authorTitle: "Executive Director of McNeilly Center for Children in Nashville, TN"
  };

  const reviewData = {
    title: "Why Flowysis is the #1 childcare staff scheduling software",
    features: [
      {
        icon: Clock,
        bgColor: "bg-blue-400",
        title: "Intuitive scheduling interface",
        description: "Create, adjust, and manage staff schedules with just a few clicks. Monitor room ratios and staggered schedules in real time."
      },
      {
        icon: Users,
        bgColor: "bg-purple-500",
        title: "Employee availability tracking",
        description: "Easily track staff availability and preferences, making it simple to assign shifts that accommodate everyone's needs."
      },
      {
        icon: DollarSign,
        bgColor: "bg-teal-500",
        title: "Seamless integration",
        description: "Sync time tracking and payroll with Flowysis's integration with Gusto. Manage staff schedules with the same software you use for billing and communication."
      },
      {
        icon: BarChart,
        bgColor: "bg-pink-500",
        title: "Customizable reporting",
        description: "Gain valuable insights into staffing patterns, attendance, and labor costs. Identify trends and optimize staffing levels to improve efficiency."
      }
    ],
    borderTop: true,
    bgColor: "bg-gray-50"
  };

  return (
    <>
      <Banner />
      <ReviewWithImage {...testimonialData} />
      <Review {...reviewData} />
      <TabSection />
      <FlowysisSection />
      <FAQAccordion />
      <BlogPostCards />
      <Footer />
    </>
  );
}

export default Page;
