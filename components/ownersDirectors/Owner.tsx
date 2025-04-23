"use client";
import React, { useState, useRef } from "react";

import Banner from "./Banner";
import Navbar from "./Navbar";
import Features from "./Features";
import BillingPayments from "./BillingPayments";
import Communication from "./Communication";
import CenterManagement from "./CenterManagement";
import Learning from "./Learning";
import DailyActivityReport from "./DailyActivityReport";
import Footer from "../common/Footer/Footer";
import CTA from "./CTA";

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

function Owner() {
  const [activeTab, setActiveTab] = useState<string>("billing");

  // Add refs for each section
  const billingRef = useRef<HTMLDivElement>(null);
  const communicationRef = useRef<HTMLDivElement>(null);
  const centerManagementRef = useRef<HTMLDivElement>(null);
  const learningRef = useRef<HTMLDivElement>(null);
  const dailyActivityRef = useRef<HTMLDivElement>(null);

  const navigationItems: NavItem[] = [
    { id: "billing", label: "Billing & Payments" },
    { id: "communication", label: "Communication" },
    { id: "centerManagement", label: "Center Management" },
    { id: "learning", label: "Learning" },
    { id: "dailyActivity", label: "Daily Activity Report" },
  ];

  const handleNavItemClick = (id: string) => {
    setActiveTab(id);

    // Scroll to the corresponding section
    const refs = {
      billing: billingRef,
      communication: communicationRef,
      centerManagement: centerManagementRef,
      learning: learningRef,
      dailyActivity: dailyActivityRef,
    };

    refs[id as keyof typeof refs]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Banner />
      <Navbar
        items={navigationItems}
        onItemClick={handleNavItemClick}
        activeItemId={activeTab}
      />
      <Features />
      <div ref={billingRef} className="scroll-mt-28 ">
        <BillingPayments />
      </div>
      <div ref={communicationRef} className="scroll-mt-28 ">
        <Communication />
      </div>
      <div ref={centerManagementRef} className="scroll-mt-28 ">
        <CenterManagement />
      </div>
      <div ref={learningRef} className="scroll-mt-28 ">
        <Learning />
      </div>
      <div ref={dailyActivityRef} className="scroll-mt-28">
        <DailyActivityReport />
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default Owner;
