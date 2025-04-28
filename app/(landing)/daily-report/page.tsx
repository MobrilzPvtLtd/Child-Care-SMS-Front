import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import Review from "@/components/common/Review";
import ReviewWithImage from "@/components/common/ReviewWithImage";
import Banner from "@/components/DailyReport/Banner";
import TabSection from "@/components/DailyReport/DailyReportTab";
import Template from "@/components/DailyReport/Template";
import FlowysisSection from "@/components/DetailUser/DetailUser";

import { Clock, FileText, Heart, FolderOpen } from "lucide-react";
import React from "react";

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
    title: "Why millions of educators and families love Flowysis daily reports",
    features: [
      {
        icon: Clock,
        bgColor: "bg-blue-400",
        title: "Save more time",
        description:
          "Enable teachers to easily record photos, videos, activities, and learning milestones all from the Flowysis app.",
      },
      {
        icon: FileText,
        bgColor: "bg-teal-500",
        title: "Eliminate pen and paper",
        description:
          "Digitize your daily reports and send automated summaries to families every day.",
      },
      {
        icon: Heart,
        bgColor: "bg-pink-500",
        title: "Boost family engagement",
        description:
          "95% of admins and staff report that Flowysis improves communication with families.",
      },
      {
        icon: FolderOpen,
        bgColor: "bg-blue-400",
        title: "Simplify record keeping",
        description: "Centralize day-to-day documentation in one place.",
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
      <Template />
      <FlowysisSection />
      <FAQAccordion />
      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
