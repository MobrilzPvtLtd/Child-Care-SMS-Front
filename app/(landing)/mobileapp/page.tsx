import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer"; 
import TestimonialsCarousel from "@/components/home/Testimonial";
import TabSection from "@/components/mobileapp/AppTab";
import Banner from "@/components/mobileapp/Banner"; 
import React from "react";
import { DollarSign, MessageCircle, Zap, Shield } from "lucide-react";
import Review from "@/components/common/Review";

function page() {
  const reviewData = {
    title: "All-in-one childcare management app",
    features: [
      {
        icon: DollarSign,
        bgColor: "bg-teal-500",
        title: "Get paid on time, every time",
        description:
          "Enable families to view invoices, manage autopay, and much more, all on their phone.",
      },
      {
        icon: MessageCircle,
        bgColor: "bg-purple-500",
        title: "Message families from your phone",
        description:
          "95% of admins and staff report that Flowysis improves communication with families.",
      },
      {
        icon: Zap,
        bgColor: "bg-orange-400",
        title: "Boost productivity on the go",
        description:
          "Save up to 20 hrs per month on admin tasks with Flowysis's all-in-one solution.",
      },
      {
        icon: Shield,
        bgColor: "bg-blue-400",
        title: "Keep data private and protected",
        description:
          "Enhance your account safety with 2FA, data encryption, and 24x7 fraud monitoring.",
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
      <TestimonialsCarousel />
      <FAQAccordion />
      <BlogPostCards />
      <Footer />
    </>
  );
}

export default page;
