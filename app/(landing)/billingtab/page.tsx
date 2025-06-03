import Banner from "@/components/Billing/Banner"; 
import TabSection from "@/components/Billing/BillingTab"; 
import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer"; 
import FlowysisSection from "@/components/DetailUser/DetailUser"; 
import TestimonialsCarousel from "@/components/home/Testimonial";
import React from "react";
import { Clock, DollarSign, CreditCard, BarChart } from "lucide-react";
import Review from "@/components/common/Review";


function page() {
  const reviewData = {
    title: "Why millions of educators and families love Flowysis billing",
    features: [
      {
        icon: Clock,
        bgColor: "bg-blue-400",
        title: "Save more time",
        description: "Save hours each week with automated invoicing, payment notifications, and autopay. Get set up fast: 94% of admins say Flowysis billing is easy to set up."
      },
      {
        icon: DollarSign,
        bgColor: "bg-purple-500",
        title: "Get paid on time, every time",
        description: "90% of preschools see an increase in on-time payments. Eliminate late payments with automated billing services and payment reminders."
      },
      {
        icon: CreditCard,
        bgColor: "bg-teal-500",
        title: "Make payments easy for families",
        description: "91% of admins report that families find it easier to pay online with Flowysis. Offer families a simple and secure payment experience."
      },
      {
        icon: BarChart,
        bgColor: "bg-pink-500",
        title: "Track every dollar with ease",
        description: "Keep an eye on money owed and received with the at-a-glance billing dashboard. See customizable billing reports in real-time."
      }
    ],
    borderTop: false,
    bgColor: ""
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
