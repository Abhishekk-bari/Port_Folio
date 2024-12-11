import React, { useState } from "react";
import Eye from "./Eye";
import Stack from "./Stack";
import Footer from "./Footer";
import shape from '../assets/shape5.png'

function Exp() {
  const [cardText1, setCardText1] = useState("App Design");
  const [cardText2, setCardText2] = useState("Website Design");

  return (
    <div className="w-screen h-auto md:h-screen absolute overflow-x-hidden scrollbar-hide">
      <div className="pt-20 md:pt-40 px-4">
      <img src={shape} className="absolute top-[15vw] left-[8vw] w-56 h-56 object-cover -z-50 bounce-effect" alt="shape"/>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-[Roboto] uppercase text-center md:text-left pl-10">
          MY
          <br /> EXPERTISE
        </h1>
      </div>

      <div className="px-4 md:px-6 lg:px-20">
        {/* First Row: Two Editable Cards */}
        <div className="cards w-full flex flex-col sm:flex-col md:flex-row gap-10 mt-10">
          {/* First Card */}
          <div className="cardcontainer relative w-full sm:w-full md:w-1/2 h-[40vh] md:h-[55vh] lg:h-[65vh]">
            <div className="card w-full h-[40vh] rounded-xl overflow-hidden bg-[#f5f5f7] p-5">
              <input
                type="text"
                value={cardText1}
                onChange={(e) => setCardText1(e.target.value)}
                className="w-full text-center bg-transparent text-3xl sm:text-4xl md:text-5xl font-bold outline-none"
                placeholder="Editable Card 1"
              />
              <p className="pt-2 text-sm sm:text-base md:text-lg p-2">
                Craft intuitive navigation that makes features accessible.
                Choose layouts and graphics that fit your app's personality.
              </p>
              <p className="pt-2 text-sm sm:text-base md:text-lg p-2">
                Enhance user experience by ensuring that every interaction is
                seamless and engaging. Consider user feedback to iterate on
                design.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="cardcontainer relative w-full sm:w-full md:w-1/2 h-[40vh] md:h-[55vh] lg:h-[65vh]">
            <div className="card w-full h-[40vh] rounded-xl overflow-hidden bg-[#f5f5f7] p-5">
              <input
                type="text"
                value={cardText2}
                onChange={(e) => setCardText2(e.target.value)}
                className="w-full text-center bg-transparent text-3xl sm:text-4xl md:text-5xl font-bold outline-none"
                placeholder="Editable Card 2"
              />
              <p className="pt-2 text-sm sm:text-base md:text-lg p-2">
                Polish animations and microinteractions that add delight. Every
                detail matters when sculpting a web.
              </p>
              <p className="pt-2 text-sm sm:text-base md:text-lg p-2">
                Use transitions to guide users through your application, making
                their journey more enjoyable and intuitive. Focus on consistency
                across all elements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Stack />
      <Footer />
    </div>
  );
}

export default Exp;
