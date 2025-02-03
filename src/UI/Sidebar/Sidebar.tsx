import { useEffect, useState } from "react";
import data from "../../Data/Navigation.json";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/child-logo.png"
const Sidebar = () => {
  const [active, setActive] = useState<number>(() => {
    const savedActive = localStorage.getItem("activeIndex");
    return savedActive ? parseInt(savedActive, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("activeIndex", active.toString());
  }, [active]);

  const location = useLocation();
  const currentLocation = location.pathname;

  const handleActiveIndex = (item:number)=>{
setActive(item);
  }
  console.log("currentLocation", active);
  return (
    <div
      className={` w-1/6 fixed overflow-hidden h-full ${
        currentLocation === "/"
          ? "bg-[var(--primary-background-color)] text-white"
          : "bg-[var(--primary-background-color)] text-white"
      }`}
    >
      <div className="flex flex-col items-center w-full py-5">
        <div className="flex justify-center text-xl sm:text-3xl md-text-auto lg:text-5xl xl:text-7xl font-bold text-center p-1 mb-5 w-5/6 text-white">
          {/* <h1
            className={`${
              currentLocation == "/"
                ? "text-white"
                : "text-primary-background-color"
            }`}
          >
            LOGO
          </h1> */}
          <img src={logo} alt="logo" className="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          {data.map((item, index) => (
            <Link
              to={item.to}
              className={`w-full flex justify-center`}
              key={index}
            >
              <div
                className={` text-xs md:text-[0.6rem] xl:text-base 2xl:text-base font-bold text-left pl-4 py-1 xl:py-2 w-5/6 transition-all cursor-pointer hover:scale-110 ${
                  active === index
                    ? "bg-white text-[var(--primary-background-color)] "
                    : "hover:bg-white hover:text-[var(--primary-background-color)] "
                }`}
                onClick={() => handleActiveIndex(index)}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
