import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

interface propChildren {
  children: React.ReactNode;
}

const Layout: React.FC<propChildren> = ({ children }) => {
  const location = useLocation();
  const currentLocation = location.pathname;
  return (
    <div className="flex w-full min-h-screen overflow-x-hidden h-full bg-white relative ">
      <div className="w-1/6 relative ">
        <Sidebar />
      </div>
      <div
        className={`w-[2px] opacity-80  ${
          currentLocation == "/" ? "bg-white" : "bg-primary-background-color"
        }`}
      ></div>
      <div className="w-5/6 h-full flex flex-col justify-between min-h-screen">
        <div
          className={`w-full min-h-[calc(100vh-5vh)] h-full ${
            currentLocation == "/" ? "bg-primary-background-color" : "bg-white"
          }`}
        >
          {children}
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
