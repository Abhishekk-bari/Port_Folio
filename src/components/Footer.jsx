import React from "react";
import { Link } from "react-router-dom";
import shape from "../assets/shape3.png";

function Footer() {
  return (
    <div className="text-center pt-20 px-5">
      <h1 className="p-5 text-4xl md:text-8xl font-[Roboto] relative ">
        LET'S WORK <br />
        TOGETHER
        <img
          src={shape}
          className="absolute left-[10vw] md:left-[28vw] w-20 h-20 md:w-40 md:h-40 object-cover -z-50 bounce-effect"
          alt="shape"
        />
      </h1>
      <Link
        to="/Contact"
        className="bg-black text-white text-lg md:text-xl font-bold py-2 px-4 md:px-6 rounded-full shadow-md hover:bg-gray-100 hover:text-black transition duration-700"
      >
        CONTACT
      </Link>
      <h1 className="text-[12vw] md:text-[15vw] font-[Roboto] uppercase mt-10 md:pt-20 tracking-widest text-[#fe3c00]">
        Abhishek
        <h6 className="text-start text-sm md:text-lg tracking-normal font-mono text-black">©2024 Abhi DESIGN</h6>
      </h1>
      
    </div>
  );
}

export default Footer;
