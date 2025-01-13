import React from "react";
import shape from '../assets/shape4.png';
import project1 from '../assets/Tweet_Desk.mp4';
import pro2 from '../assets/Project2.mp4';
import pro3 from '../assets/card3.mp4';
import pro4 from '../assets/project 4.mp4';
import Footer from './../components/Footer';
import dash from '../assets/dasboard.png'


function Project() {
  return (
    <div className="p-5">
      <div className="text-center">
        <img 
          src={shape} 
          className="absolute top-32 left-[27vw] w-56 h-56  object-cover -z-50 bounce-effect" 
          alt="shape"
        />
        <h1 className="text-4xl md:text-8xl text-[#fe3c00] font-[Roboto] tracking-widest">Projects</h1>
      </div>

      <div className="mt-16 md:mt-28 grid grid-cols-1 gap-10">
        {/* First car: Image on left, text on right */}
        <div className="flex flex-col md:flex-row items-center pt-10 md:pt-20">
          <video autoPlay 
            loop 
            muted  src={project1} alt="pro 1" className="w-full md:w-1/2 rounded-xl" />
          <div className="mt-5 md:mt-0 md:ml-5 text-left">
            <h2 className="text-2xl md:text-4xl font-semibold">TweetDeck | Full Stack</h2>
            <p className="text-sm md:text-lg text-gray-600 pt-2">TweetDeck is a full-stack application for managing tweets,
              providing a dynamic interface for users to view and post tweets
              efficiently.
            </p>
            <p className="text-sm md:text-base">ReactJS, Tailwind, NodeJS, GraphQL, Prisma, TypeScript, Google OAuth, Redis</p>
          </div>
        </div>

        {/* Second car: Text on left, image on right */}
        <div className="flex flex-col md:flex-row-reverse items-center pt-10 md:pt-20">
          <video 
            autoPlay 
            loop 
            muted 
            src={pro2} 
            alt="Car 2" 
            className="w-full md:w-1/2 rounded-xl" 
          />
          <div className="mt-5 md:mt-0 md:mr-5 text-left md:text-right">
            <h2 className="text-2xl md:text-4xl font-semibold">SaaS Landing Page | Front End</h2>
            <p className="text-sm md:text-lg text-gray-600 pt-2 md:pt-5">This project focuses on developing a dark-themed SaaS landing
              page that showcases your abilities in front-end technologies. By
              the end of the tutorial, you'll have a fully functional landing
              page equipped with smooth animations and responsive design,
              ready to impress potential employers.
            </p>
            <p>TypeScript, TailwindCSS, ReactJS, AWS</p>
          </div>
        </div>

        {/* Third car: Image on left, text on right */}
        <div className="flex flex-col md:flex-row items-center pt-10 md:pt-20">
          <video 
            autoPlay 
            loop 
            muted 
            src={pro3} 
            alt="Car 3" 
            className="w-full md:w-1/2 rounded-xl" 
          />
          <div className="mt-5 md:mt-0 md:ml-5 text-left">
            <h2 className="text-2xl md:text-4xl font-semibold">LensCraft | Frontend</h2>
            <p className="text-sm md:text-lg text-gray-600 pt-2 md:pt-5">Design website that gives Interactive User Experience fully
              animated and interactive and add some spice using javascript,
              landing page equipped with smooth animations and responsive
              design.
            </p>
            <p>Next.js, TailwindCSS, TypeScript, AWS</p>
          </div>
        </div>

        {/* Fourth car: Text on left, image on right */}
        <div className="flex flex-col md:flex-row-reverse items-center pt-10 md:pt-20">
          <video 
            autoPlay 
            loop 
            muted 
            src={pro4} 
            alt="Car 4" 
            className="w-full md:w-1/2 rounded-xl" 
          />
          <div className="mt-5 md:mt-0 md:mr-5 text-left md:text-right">
            <h2 className="text-2xl md:text-4xl font-semibold">Snap_Book | Full Stack</h2>
            <p className="text-sm md:text-lg text-gray-600 pt-2 md:pt-5">Designed a feature-rich booking platform for photographers,
              integrating React, Node.js, Express, and MongoDB for secure data
              handling and management and animations using GSAP. Developed a
              custom admin panel with secure login/logout functionality,
              enabling photographers to monitor booking sessions and
              communicate with clients directly.
            </p>
            <p>Angular, TailwindCSS, Lenis, Nodejs, ExpressJS, MongoDB, Vercel</p>
          </div>
        </div>
      
      {/* five car: Image on left, text on right */}
      <div className="flex flex-col md:flex-row items-center pt-10 md:pt-20">
          <img 
            src={dash} 
            alt="dash" 
            className="w-full md:w-1/2 rounded-xl" 
          />
          <div className="mt-5 md:mt-0 md:ml-5 text-left">
            <h2 className="text-2xl md:text-4xl font-semibold">DashBoard | Assignment_Task</h2>
            <p className="text-sm md:text-lg text-gray-600 pt-2 md:pt-5">Figma design into a functional web project
            implement a visually appealing and interactive web application that meets your project requirements.
            </p>
            <p>React+Vite, TailwindCSS, React-DOM, React Icons, Vercel, Axios, Supabase, Prisma ORM</p>
          </div>
        </div>
      
      
      
      </div>
      <Footer />
    </div>
  );
}

export default Project;