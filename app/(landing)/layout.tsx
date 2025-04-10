import React from "react";
import Header1 from "@/components/common/Header1/Header1";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header1 />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

    </div>
  );
}