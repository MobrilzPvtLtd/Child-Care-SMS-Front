import { Link } from "react-router-dom";

const Footer= () => {
  return (
    <div className=" bg-primary-background-color flex flex-col justify-center items-end font-semibold text-white  h-[5vh] w-full">
    
        <div className="w-full px-20 flex justify-between">
          {" "}
          <span><a href="https://www.mobrilz.com" target="_blank">Mobrilz</a> @ 2025 All Rights Reserved.</span>{" "}
          <div className="flex gap-5">
            <Link to="/terms-and-conditions"><span>Terms & Conditions</span></Link>
            <Link to="/contact-us"><span>Contact Us</span></Link>
          </div>
        </div>
     
    </div>
  );
};

export default Footer;
