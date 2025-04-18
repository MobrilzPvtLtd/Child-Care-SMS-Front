import BlogPostCards from "@/components/common/Blog";
import FAQAccordion from "@/components/common/FaqAccordion";
import Footer from "@/components/common/Footer/Footer";
import Banner from "@/components/Communication/Banner";
import TabSection from "@/components/Communication/CommunicationTab";
import DetailReview from "@/components/Communication/DetailReview";
import FamilyEngagementSection from "@/components/Communication/FamilyEngagementSection";
import Review from "@/components/Communication/Review";
import FlowysisSection from "@/components/DetailUser/DetailUser";

import React from "react";

function page() {
  return (
    <>
      <Banner />
      <DetailReview />
      <Review />
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
