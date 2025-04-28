import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import Review from "@/components/common/Review";
import ReviewWithImage from "@/components/common/ReviewWithImage";
import Banner from "@/components/Communication/Banner";
import TabSection from "@/components/Communication/CommunicationTab";
import FamilyEngagementSection from "@/components/Communication/FamilyEngagementSection";
import FlowysisSection from "@/components/DetailUser/DetailUser";
import { MessageCircle, Users, Bell, Phone } from "lucide-react";
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
    title: "How Flowysis streamlines communication",
    features: [
      {
        icon: MessageCircle,
        bgColor: "bg-blue-400",
        title: "Real-time messaging",
        description:
          "Communicate instantly with families and staff. Send messages directly from the app or web platform.",
      },
      {
        icon: Users,
        bgColor: "bg-purple-500",
        title: "Easier staff communication",
        description:
          "Enable select staff to message families quickly and easily. Offer real-time support to your staff and respond to questions instantly.",
      },
      {
        icon: Bell,
        bgColor: "bg-teal-500",
        title: "SMS alerts and newsletters",
        description:
          "Send SMS alerts, reminders, or newsletters. Communicate with an individual family, a whole classroom, or the entire program.",
      },
      {
        icon: Phone,
        bgColor: "bg-pink-500",
        title: "Centralized communication",
        description:
          "Simplify family communication. Make it easy for families to get in touch with you and access messages in one place.",
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
      <FamilyEngagementSection />
      <FlowysisSection />
      <FAQAccordion />

      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
