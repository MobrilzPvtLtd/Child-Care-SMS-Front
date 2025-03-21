import ComponentCard from "@/components/common/componentcard/ComponentCard";
import AnalyticsCards from "@/components/dashboard/AnalyticsCard";
import BarChartOne from "@/components/dashboard/BarChart";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="bg-white flex justify-start items-start py-20 bg-primary-background-color ">
      {" "}
      <div className=" flex flex-col item-start justify-start p-20">
        <Image
          className="dark:hidden"
          src="/images/logo/logo.svg"
          alt="Logo"
          width={800}
          height={40}
        />
        <Image
          className="hidden dark:block"
          src="/images/logo/logo-dark.svg"
          alt="Logo"
          width={600}
          height={40}
        />
        <h1 className="text-5xl md:text-[4rem] font-bold flex flex-col px-20 mt-4">
          School Management System{" "}
        </h1>{" "}
      </div>{" "}
    </div>
  );
}

export default page;
