import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import Review from "@/components/common/Review";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import TestimonialsCarousel from "@/components/home/Testimonial";
import Banner from "@/components/Learning/Banner";
import TabSection from "@/components/Learning/LearningTab";
import PartnershipBanner from "@/components/Learning/PartnershipBanner"; 
import { BookOpen, Clock, Award, Heart } from "lucide-react";
import React from "react";

function page() {

  const reviewData = {
    title: "Why educators love Flowysis with Experience Curriculum",
    features: [
      {
        icon: BookOpen,
        bgColor: "bg-blue-400",
        title: "All-in-one education platform",
        description:
          "Access lessons, assessments, messaging, billing, admissions, and more",
      },
      {
        icon: Clock,
        bgColor: "bg-purple-500",
        title: "Save educators hours every month",
        description:
          "Complete curriculum system with learning materials and digital lessons.",
      },
      {
        icon: Award,
        bgColor: "bg-teal-500",
        title: "Enhance program quality",
        description:
          "Aligned to all 50 states' early learning standards and NAEYC.",
      },
      {
        icon: Heart,
        bgColor: "bg-pink-500",
        title: "Support child development",
        description:
          "Make observations and share progress updates with families.",
      },
    ],
    borderTop: false,
    bgColor: "",
  };
  return (
    <>
      <Banner />
      <Review {...reviewData} />
      <TabSection />
      <PartnershipBanner />
      <TestimonialsCarousel />
      <FlowysisSection />
      <FAQAccordion />
      <Footer />
    </>
  );
}

export default page;
