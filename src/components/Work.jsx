import React from "react";
import video from "../assets/card3.mp4";
import video2 from "../assets/Project2.mp4";
import pro from '../assets/project 4.mp4'

import card1 from "../assets/Project1.png";

import { motion, useAnimation } from "framer-motion";

function Work() {
  const controls = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHover = (index) => {
    controls[index].start({ y: "0%", opacity: 1 });
  };

  const handleHoverEnd = (index) => {
    controls[index].start({ y: "100%", opacity: 0 });
  };

  return (
    <div className="w-screen">
      <div className="flex flex-col lg:flex-row justify-between pt-20 gap-10 lg:gap-36 px-6 lg:px-20">
        <h1 className="uppercase text-5xl lg:text-8xl font-[Roboto] text-[#1d1d1f]">
          FEATURED <br />
          work
        </h1>
        <h3 className="text-lg lg:text-3xl p-4 lg:p-10 lg:pl-56">
          My creative spirit comes alive in the digital realm. With nimble
          fingers flying across the keyboard, I craft clear experiences out of
          nothing but ones and zeroes.
        </h3>
      </div>

      <div className="px-6 lg:px-20">
        {/* First Row: Two Cards */}
        <div className="cards w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10">
          {/* First Card */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full lg:w-1/2 h-[50vh] lg:h-[70vh]"
          >
            <h1 className="absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] uppercase text-[#CDEA68] font-['FoundersGroteskSemibold'] text-4xl lg:text-6xl">
              {"TWEET_DECK".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={controls[0]}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden bg-zinc-300 relative">
              
                <img
                  className="w-full h-full object-cover"
                  src={card1}
                  alt="Project Card"
                />
              
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full lg:w-1/2 h-[50vh] lg:h-[70vh]"
          >
            <h1 className="absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] uppercase text-[#CDEA68] font-['FoundersGroteskSemibold'] text-4xl lg:text-6xl">
              {"LensCraft".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={controls[1]}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden bg-zinc-300 relative">
              <a href="https://thirty-six-studio-eight.vercel.app/" target="_blank">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                  src={video}
                  alt="Background Video"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Second Row: Two More Cards */}
        <div className="cards w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10">
          {/* Third Card */}
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer relative w-full lg:w-1/2 h-[50vh] lg:h-[70vh]"
          >
            <h1 className="absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] uppercase text-[#CDEA68] font-['FoundersGroteskSemibold'] text-4xl lg:text-6xl">
              {"Saas Page".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={controls[2]}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden bg-zinc-300 relative">
              <a href="https://saa-s-landing-page-sage.vercel.app/" target="_blank">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                  src={video2}
                  alt="Third Card"
                />
              </a>
            </div>
          </motion.div>

          {/* Fourth Card */}
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer relative w-full lg:w-1/2 h-[50vh] lg:h-[70vh]"
          >
            <h1 className="absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] uppercase text-[#CDEA68] font-['FoundersGroteskSemibold'] text-4xl lg:text-6xl">
              {"Snap&book".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={controls[3]}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden bg-zinc-300 relative">
              <video
              autoPlay
              loop
              muted
                className="w-full h-full object-cover"
                src={pro}
                alt="Fourth Card"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Work;
