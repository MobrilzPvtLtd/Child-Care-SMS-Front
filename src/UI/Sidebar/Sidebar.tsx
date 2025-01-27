import React from 'react'
import data from "../../Data/Navigation.json"
import { Link , useLocation } from 'react-router-dom';
interface SidebarProps{
    mode : string;
}
const Sidebar: React.FC<SidebarProps> = ({mode}) => {
  
const location = useLocation();
const currentLocation = location.pathname;
console.log("currentLocation",currentLocation)
  return (
    <div className={`w-full overflow-hidden h-screen ${currentLocation === '/' ? 'bg-[var(--primary-background-color)] text-white' : 'bg-white text-black'}`}>

      <div className="flex flex-col w-full">
        <div className="text-xl md:text-7xl font-bold text-center p-2 w-5/6 text-white">
        <h1 className={`${currentLocation == "/" ? "text-white":"text-primary-background-color" }`}>LOGO</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {data.map((item , index)=>(

        
            <Link to={item.to} className='w-5/6 '><div className="text-sm md:text-lg font-bold text-left p-2 w-5/6 transition-all hover:bg-white hover:text-[var(--primary-background-color)] hover:scale-110 cursor-pointer" key={index}>{item.title}</div></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
