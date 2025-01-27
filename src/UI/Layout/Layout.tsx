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
    <div className="flex w-full h-screen overflow-hidden bg-white">
      <div className="w-1/6">
      <Sidebar mode={"/"} />
      </div>
      <div className={`w-[1px] opacity-80 h-full ${currentLocation == "/" ? "bg-white":"bg-primary-background-color" }`}></div>
      <div className="w-5/6 h-screen flex flex-col justify-between">
      {children}
      <Footer  />
      </div>
    </div>
  );
};

export default Layout;
