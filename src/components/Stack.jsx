import React from "react";
import figma from "../assets/logo/figma.png";
import aws from "../assets/logo/AWS.png";
import js from "../assets/logo/js.png";
import react from "../assets/logo/react.png";
import db from "../assets/logo/MongoDB.png";
import cs from "../assets/logo/Tailwind CSS.png";
import html from "../assets/logo/html-5.png";
import vc from "../assets/logo/Vercel.png";
import git from "../assets/logo/Git.png";
import github from "../assets/logo/GitHub.png";
import Angular from "../assets/logo/AngularJS.png";
import shape from '../assets/shape4.png'


function Stack() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      
      {/* Left Fixed Section */}
      <div className="w-full md:w-2/3 h-auto md:h-full p-8">
        <div className="space-y-6 text-center md:text-left">
        <img src={shape} className="absolute top-[65vw] left-[16vw] w-56 h-56 object-cover -z-50 bounce-effect" alt="shape"/>
          {/* Content */}
          <h1 className="text-5xl md:text-8xl font-bold pl-10">
            FAVOURITE <br />
            STACK
          </h1>
        </div>
      </div>

      {/* Right Scrollable Section */}
      <div className="w-full md:w-2/3 h-auto md:h-full p-8 overflow-x-scroll md:overflow-y-scroll scrollbar-hide">
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section */}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={js}
              alt="Figma Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">javascript</h3>
            <p className="font-semibold text-gray-600">programming language</p>
            <p className="text-gray-500">
              JavaScript is the programming language of the Web
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">70%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 2*/}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={aws}
              alt="Figma Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">AWS</h3>
            <p className="font-semibold text-gray-600">Amazon Web Services</p>
            <p className="text-gray-500">
              Amazon Web Services (AWS) is a cloud computing platform offered by
              Amazon.
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">60%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 3*/}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={react}
              alt="Figma Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">React</h3>
            <p className="font-semibold text-gray-600">
              React is a JavaScript library
            </p>
            <p className="text-gray-500">
              popular and powerful JavaScript library used for building dynamic
              and interactive user interfaces, primarily for single-page
              applications (SPAs).
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">85%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 4*/}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={db}
              alt="Figma Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">MongoDB</h3>
            <p className="font-semibold text-gray-600">Database</p>
            <p className="text-gray-500">
              MongoDB is an open-source document database that provides high
              performance, high availability, and automatic scaling.
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">70%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 5 */}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={vc}
              alt="Figma Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">Vercel</h3>
            <p className="font-semibold text-gray-600">cloud platform</p>
            <p className="text-gray-500">
              Vercel is the easiest way to deploy your applications. Simply
              connect your GitHub repository and our platform will automatically
              deploy your changes whenever you push to GitHub.
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">95%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 6*/}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={cs}
              alt="css Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">Tailwind CSS</h3>
            <p className="font-semibold text-gray-600">
              {" "}
              utility-first CSS framework{" "}
            </p>
            <p className="text-gray-500">
              Tailwind CSS is a highly customizable, low-level CSS framework
              that lets you style the elements quickly and efficiently using the
              utility classes.
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">95%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 7 */}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={html}
              alt="html Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">HTML</h3>
            <p className="font-semibold text-gray-600">Programming language</p>
            <p className="text-gray-500">
              HyperText Markup Language, is the foundational language used to
              create web pages.
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">90%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 8 */}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={git}
              alt="Figma Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">Git</h3>
            <p className="font-semibold text-gray-600">Version Control</p>
            <p className="text-gray-500">
              Git is a tool that helps you manage changes to your code over time
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">85%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 9*/}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={github}
              alt="hub Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl uppercase">
            <h3 className="font-bold">GitHub</h3>
            <p className="font-semibold text-gray-600">
              Platform to Manage store code
            </p>
            <p className="text-gray-500">
              GitHub is a developer platform that allows developers to create,
              store, manage, and share their code.
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">80%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 10 */}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={Angular}
              alt="Figma Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl">
            <h3 className="font-bold">Angular</h3>
            <p className="font-semibold text-gray-600">Programming Language</p>
            <p className="text-gray-500">
              Used to Build Interactive Web Pages or UI.
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">75%</div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 h-auto md:h-60">
          {/* Logo Section 10 */}
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-lg shadow bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={figma}
              alt="Figma Logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-lg md:text-2xl">
            <h3 className="font-bold">FRAMER</h3>
            <p className="font-semibold text-gray-600">WEB DESIGN PLATFORM</p>
            <p className="text-gray-500">
              The internet is your canvas. Framer is where you design and
              publish stunning sites based in Amsterdam.
            </p>
          </div>

          {/* Percentage */}
          <div className="text-lg md:text-2xl font-bold text-gray-700">95%</div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
