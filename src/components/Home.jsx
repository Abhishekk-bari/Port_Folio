import React, { useState, useEffect } from "react";
import video from "../assets/v_bg.mp4";
import shape from "../assets/shape.png";
import Work from "./Work";
import About from "./About";
import Exp from "./Exp";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="animate-slidein300 w-screen scrollbar-hide">
      <div className="text-center pt-10">
        <div className="flex items-center justify-center">
          <span className="bg-green-600 w-3 h-3 rounded-full inline-block mr-2"></span>
          <p className="text-xl uppercase">Available For Work</p>
        </div>

        <h1 className="text-[#1d1c1f] text-9xl font-[Roboto] relative">
          <img
            src={shape}
            className="absolute top-50 left-[20vw] w-52 h-52 object-cover -z-50 bounce-effect"
            alt="shape"
          />
          {isMobile ? "ABHI" : (
            <>
              ABHISHEK
              <br />
              BARI
            </>
          )}
        </h1>
      </div>
      <div className="pt-32 pb-5">
        <h2 className="uppercase text-lg pl-5">Based in Pune</h2>
      </div>

      <div className="pt-2">
        <video src={video} className="w-screen h-auto" autoPlay muted loop />
      </div>
      <Work />
      <About />
      <Exp />
    </div>
  );
}

export default Home;