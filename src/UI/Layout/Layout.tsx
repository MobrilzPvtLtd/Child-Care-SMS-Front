import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

interface propChildren {
  children: React.ReactNode;
}

const Layout: React.FC<propChildren> = ({ children }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-white">
      <div className="w-1/6">
      <Sidebar mode={"/"} />
      </div>
      <div className="w-[1px] opacity-10 h-full"></div>
      <div className="w-5/6 h-screen flex flex-col justify-between">
      {children}
      <Footer  />
      </div>
    </div>
  );
};

export default Layout;
