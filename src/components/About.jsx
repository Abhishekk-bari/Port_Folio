import React, { useEffect, useRef } from "react";
import img from '../assets/img.jpg';
import resume from '../assets/Abhishek_Bari-resume.pdf'

function About() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = textRef.current;
      const imageElement = imageRef.current;

      if (!textElement || !imageElement) return;

      const textPosition = textElement.getBoundingClientRect();
      const imagePosition = imageElement.getBoundingClientRect();

      if (
        imagePosition.top < textPosition.bottom &&
        imagePosition.bottom > textPosition.top
      ) {
        textElement.style.zIndex = "5";
        imageElement.style.zIndex = "10";
        textElement.style.filter = "blur(5px)";
      } else {
        textElement.style.zIndex = "10";
        imageElement.style.zIndex = "5";
        textElement.style.filter = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-x-hidden scrollbar-hide">
      {/* Sticky Text Section */}
      <div
        ref={textRef}
        className="text-center pt-32 pb-10 sticky top-0 bg-white transition-all duration-300 z-10"
      >
        <h1 className="text-8xl font-[Roboto] uppercase">
          MORE ABOUT
          <br />
          <span className="hidden md:inline">Abhishek</span>
          <span className="md:hidden">Abhi</span>©
        </h1>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center relative">
        <div
          ref={imageRef}
          className="flex items-center justify-center overflow-hidden rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[150px] rounded-br-[150px] w-[300px] h-[500px] bg-white z-5"
        >
          <img src={img} alt="me" className="w-full h-full object-cover" />
        </div>

        {/* Text Section */}
        <div className="text-center pt-10 z-5 px-4 md:px-20">
          <h3 className="font-bold text-3xl md:text-4xl mb-4">
            I'm <span className="hidden md:inline">Abhishek</span>
            <span className="md:hidden">Abhi</span>, your friendly neighborhood frontend developer,
            <br />
            armed with a keyboard and a passion for creating stunning web experiences.
            <br />
            If you ever need someone to turn coffee into code, I'm your guy! ☕💻
          </h3>

          <p className="text-lg md:text-xl pt-4 pb-10 mr-10 ">
            I graduated with a Bachelor of Computer Applications, where I managed to juggle my studies and still find time to dive deep into the world of web development.
            My journey began with HTML and CSS, but I quickly leveled up to React, Next.js, and Tailwind CSS—because who doesn’t love a little flair in their code?
            I thrive on finding "unexpected solutions" and believe that
            <br />
            design can elevate the human experience.
          </p>

          {/* Download Resume Button */}
          <a href={resume} download>
            <button className="bg-black text-white text-xl font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition duration-300">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;