import ChildcareOperationsSection from "@/components/Childcare/ChildcareOperationsSection";
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import ReviewWithImage from "@/components/common/ReviewWithImage";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import Banner from "@/components/Enrollment/Banner";
import TabSection from "@/components/Enrollment/EnrollmentTab";
import React from "react";
import { Clock, Building, Settings, Heart } from "lucide-react";
import Review from "@/components/common/Review";

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
    title: "Flowysis makes it easy to manage your childcare center",
    features: [
      {
        icon: Clock,
        bgColor: "bg-blue-400",
        title: "Save hours every week",
        description:
          "Reduce manual work and streamline your check-in, scheduling, and reporting.",
      },
      {
        icon: Building,
        bgColor: "bg-blue-400",
        title: "Easily scale your program",
        description:
          "Oversee student and staff information across multiple schools or locations.",
      },
      {
        icon: Settings,
        bgColor: "bg-teal-500",
        title: "Customize to fit your needs",
        description:
          "Tailor reports, schedules, observations, and more to suit your business needs.",
      },
      {
        icon: Heart,
        bgColor: "bg-pink-500",
        title: "Increase enrollment",
        description:
          "Manage your admissions process digitally and keep your waitlist organized.",
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
