"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { FaBox, FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { MdErrorOutline, MdOutlineDesignServices } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbBrandCake } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoCodeOfConduct } from "react-icons/go";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  {
    icon: <BiHomeAlt2 />,
    name: "Home",
    path: "/",
  },
  {
    icon: <TbBrandCake />,
    name: "Brand Value",
    path: "/brand-value",
  },
  {
    icon: <MdOutlineDesignServices />,
    name: "Services",
    path: "/services",
  },
  {
    icon: <LuContact />,
    name: "Contact us",
    path: "/contactus",
  },
  {
    icon: <GoCodeOfConduct />,
    name: "Terms & Conditions",
    path: "/terms",
  },
  {
    icon: <IoLockClosedOutline />,
    name: "Privacy Policy",
    path: "/privacypolicy",
  },
];

const Sidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  const renderMenuItems = (navItems: NavItem[]) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav) => (
        <li key={nav.name}>
          <Link
            href={nav.path}
            className={`menu-item group ${
              isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
            }`}
          >
            <span
              className={`${
                isActive(nav.path)
                  ? "menu-item-icon-active"
                  : "menu-item-icon-inactive"
              }`}
            >
              {nav.icon}
            </span>
            {(isExpanded || isHovered || isMobileOpen) && (
              <span className={`menu-item-text`}>{nav.name}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed md:mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.png"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            
              {renderMenuItems(navItems)} 
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
