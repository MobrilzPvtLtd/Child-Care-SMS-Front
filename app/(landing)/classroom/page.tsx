import Banner from "@/components/Childcare/Banner";
import ChildcareOperationsSection from "@/components/Childcare/ChildcareOperationsSection";
import TabSection from "@/components/Classroom/ClassroomTab";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import React from "react";
import { Clock, ClipboardCheck, BookOpen, Heart } from "lucide-react";
import ReviewWithImage from "@/components/common/ReviewWithImage";
import Review from "@/components/common/Review";
``;

function page() {
  const testimonialData = {
    title: "Manage your preschool classroom with ease",
    imageSrc: "/mba.jpg",
    imageAlt: "Childcare professional testimonial",
    quote:
      "Flowysis helps me manage every aspect of our program from signing in and out to billing to maintaining relationships with families. I love that it's all in one system and centralized.",
    authorName: "Alyssa D.",
    authorTitle:
      "Executive Director of McNeilly Center for Children in Nashville, TN",
  };

  const reviewData = {
    title: "Why Flowysis is the top choice for classroom organization",
    features: [
      {
        icon: Clock,
        bgColor: "bg-blue-400",
        title: "Manage your classroom",
        description:
          "Assign staff and children to specific rooms, check ratios, and manage absences.",
      },
      {
        icon: ClipboardCheck,
        bgColor: "bg-blue-400",
        title: "Track attendance and progress",
        description:
          "Eliminate manual check-in processes and record observations with a few taps.",
      },
      {
        icon: BookOpen,
        bgColor: "bg-teal-500",
        title: "Simplify lesson planning",
        description:
          "Integrate your curriculum with user-friendly lesson planning tools.",
      },
      {
        icon: Heart,
        bgColor: "bg-pink-500",
        title: "Foster family engagement",
        description:
          "Create strong partnerships with families and share updates in real-time.",
      },
    ],
    borderTop: false,
    bgColor: "",
  };
  return (
    <>
      <Banner />
      <ReviewWithImage {...testimonialData} />
      <Review {...reviewData} />
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
