import React from 'react'
import data from "../../Data/Navigation.json"
import { Link } from 'react-router-dom';
interface SidebarProps{
    mode : string;
}
const Sidebar: React.FC<SidebarProps> = ({mode}) => {
    
  return (
    <div className={`w-full overflow-hidden h-screen ${(mode === '/') ? 'bg-[var(--primary-background-color)] text-white '  : "'bg-[var(--primary-background-color)] text-[var(--primary-bacground-color)]'  " }`}>
      <div className="flex flex-col w-full">
        <div className="text-xl md:text-7xl font-bold text-center p-2 w-5/6 text-white">
        <h1>LOGO</h1>
        {/* <img src={logo} alt='logo'></img> */}
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {data.map((item , index)=>(

        
            <Link to={item.to} className='w-5/6'><div className="text-sm md:text-2xl font-bold text-left p-2 w-5/6 transition-all hover:bg-white hover:text-[var(--primary-background-color)] hover:scale-110 cursor-pointer" key={index}>{item.title}</div></Link>
          ))}
            {/* <div className="text-2xl font-bold text-left p-2 w-5/6 transition-all hover:bg-white hover:text-[var(--primary-background-color)] hover:scale-110 cursor-pointer">Brand Value</div>
            <div className="text-2xl font-bold text-left p-2 w-5/6 transition-all hover:bg-white hover:text-[var(--primary-background-color)] hover:scale-110 cursor-pointer">Services</div>
            <div className="text-2xl font-bold text-left p-2 w-5/6 transition-all hover:bg-white hover:text-[var(--primary-background-color)] hover:scale-110 cursor-pointer">Contact Us</div>
            <div className="text-2xl font-bold text-left p-2 w-5/6 transition-all hover:bg-white hover:text-[var(--primary-background-color)] hover:scale-110 cursor-pointer">Terms & Conditions</div>
            <div className="text-2xl font-bold text-left p-2 w-5/6 transition-all hover:bg-white hover:text-[var(--primary-background-color)] hover:scale-110 cursor-pointer">Privacy Policy</div> */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
