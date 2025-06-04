// "use client";
// import React, { useState, useCallback } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useSidebar } from "@/context/SidebarContext";
// import { FaBox, FaCalendarAlt, FaUserCircle } from "react-icons/fa";
// import { MdErrorOutline, MdGroupAdd, MdOutlineDesignServices } from "react-icons/md";
// import { BiHomeAlt2 } from "react-icons/bi";
// import { TbBrandCake } from "react-icons/tb";
// import { LuContact } from "react-icons/lu";
// import { IoLockClosedOutline } from "react-icons/io5";
// import { GoCodeOfConduct } from "react-icons/go";
// import { BsChatDots } from "react-icons/bs";

// type NavItem = {
//   name: string;
//   icon: React.ReactNode;
//   path: string;
//     submenu?: { name: string; path: string; pro?: boolean; new?: boolean }[];
// };

// const navItems: NavItem[] = [
//   {
//     icon: <BiHomeAlt2 />,
//     name: "Home",
//     path: "/home",
//   },
//   {
//     icon: <BiHomeAlt2 />,
//     name: "My School",
//     path: "#",
//     submenu: [
//        { name: "Teacher", path: "/institute/dashboard", pro: false },
//       // {
//       //   icon: <FaUserCircle />,
//       //   name: "Teacher",
//       //   path: "/class-teacher",
//       // },
//       // {
//       //   icon: <FaUserCircle />,
//       //   name: "Students",
//       //   path: "/students",
//       // },
//       // {
//       //   icon: <FaCalendarAlt />,
//       //   name: "Attendance",
//       //   path: "/attendance",
//       // }
//     ]
//   },
//   {
//     icon: <MdGroupAdd />,
//     name: "Admission",
//     path: "/admission-dashboard",
//   },
//   {
//     icon: <BsChatDots />,
//     name: "Messaging",
//     path: "/chat",
//   },
//   {
//     icon: <BsChatDots />,
//     name: "Billing",
//     path: "#",
//   },
//   {
//     icon: <LuContact />,
//     name: "Contact us",
//     path: "/contactus",
//   }
// ];

// const Sidebar: React.FC = () => {
//   const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
//   const pathname = usePathname();

//   const isActive = useCallback((path: string) => path === pathname, [pathname]);

//   const  renderMenuItems = (navItems: NavItem[]) => (
//     <ul className="flex flex-col gap-4">
//       {navItems.map((nav) => (
//         <li key={nav.name}>
//           <Link
//             href={nav.path}
//             className={`menu-item group ${
//               isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
//             }`}
//           >
//             <span
//               className={`${
//                 isActive(nav.path)
//                   ? "menu-item-icon-active"
//                   : "menu-item-icon-inactive"
//               }`}
//             >
//               {nav.icon}
//             </span>
//             {(isExpanded || isHovered || isMobileOpen) && (
//               <span className={`menu-item-text`}>{nav.name}</span>
//             )}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <aside
//       className={`fixed md:mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
//         ${
//           isExpanded || isMobileOpen
//             ? "w-[290px]"
//             : isHovered
//             ? "w-[290px]"
//             : "w-[90px]"
//         }
//         ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0`}
//       onMouseEnter={() => !isExpanded && setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         className={`py-8 flex  ${
//           !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
//         }`}
//       >
//         <Link href="/">
//           {isExpanded || isHovered || isMobileOpen ? (
//             <>
//               <Image
//                 className="dark:hidden"
//                 src="/images/logo/logo.svg"
//                 alt="Logo"
//                 width={150}
//                 height={40}
//               />
//               <Image
//                 className="hidden dark:block"
//                 src="/images/logo/logo-dark.svg"
//                 alt="Logo"
//                 width={150}
//                 height={40}
//               />
//             </>
//           ) : (
//             <Image
//               src="/images/logo/logo-icon.png"
//               alt="Logo"
//               width={32}
//               height={32}
//             />
//           )}
//         </Link>
//       </div>
//       <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
//         <nav className="mb-6">
//           <div className="flex flex-col gap-4">
            
//               {renderMenuItems(navItems)} 
//           </div>
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { FaBox, FaCalendarAlt, FaChevronDown, FaChartPie, FaTable, FaUserCircle, FaListAlt, FaPage4, FaPlug, FaPaypal, FaCheckSquare } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { PiChatsCircle } from "react-icons/pi";
import { HiOutlineAnnotation } from "react-icons/hi";
import { RiCheckboxMultipleFill } from "react-icons/ri";


type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[]; 
};

const navItems: NavItem[] = [
  {
    icon: <FaBox />,
    name: "Home",
    path: "/home",
   
  },
  {
    icon: <FaCalendarAlt />,
    name: "My School",
    path: "/school",
    subItems: [
     

      { name: "Teacher", path: "/school/teacher", pro: false },
      { name: "Parent", path: "/school/parent", pro: false },
     
      { name: "Classes", path: "/school/classes", pro: false },
      { name: "Student", path: "/school/students", pro: false },
      { name: "Calendar", path: "/school/calendar", pro: false },
     
      
    ],
  },
  {
    name: "Messaging",
    icon: <PiChatsCircle  />,
    path:"/chat"
  },
   {
    name: "Billing",
    icon: <RiCheckboxMultipleFill  />,
    path:"/billing"
  },
  {
    icon: <FaBox/>,
    name: "Expenses",
    path: "/expenses",
  },
  
  {
    name: "Staff & Payroll",
    icon: <FaPaypal />,
    path:"/staff-payroll",
  },
   
  {
    name: "Learning",
    icon: <PiChatsCircle  />,
    path:"/learning-inst"
  },
   {
    icon: <FaUserCircle />,
    name: "Admission",
    path: "/admission-dashboard",
  },
 

 
 
 
  {
    name: "Paperwork",
    icon: <HiOutlineAnnotation /> ,
    path:"/paperwork-inst"
  },
   {
    name: "Annoucement",
    icon: <HiOutlineAnnotation /> ,
    path:"/annoucement"
  },
 
];

const othersItems: NavItem[] = [
  {
    icon: <FaChartPie />,
    name: "Reports",
    subItems: [
      { name: "Reports", path: "#", pro: false },
      { name: "Custom Reports", path: "#", pro: false },
    ],
  },
  
];

const Sidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                } `}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <FaChevronDown
                  className={`ml-auto w-4 h-3 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
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
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge `}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-[#5463D6] dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[250px]"
            : isHovered
            ? "w-[247px]"
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
                src="/images/logo/whitelogo.png"
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
              src="/images/logo/white_logo1.png"
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
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-white ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <MdErrorOutline />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>

            <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-white ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {/* {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <MdErrorOutline />
                )} */}
              </h2>
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
