import React from "react";
import Navbar from "./Navbar";
import img1 from "../Images/image_01.jpg";
import img2 from "../Images/project_img2.jpg";
const Project = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430867.jpg")',
        }}
        className=" w-full sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover 2xl:bg-cover lg:bg-repeat-y sm:whitespace-nowrap"
      >
        <div className="pt-36 text-6xl text-purple-600 font-semibold text-center">
          Projects
        </div>
        <div className="flex flex-row  md:gap-6  sm:gap-6 sm:whitespace-normal m-8 mb-3 ">
          {/* 1st card */}
          <div className="max-w-md mx-auto bg-slate-800 rounded-md shadow-md overflow-hidden md:max-w-2xl border border-none tracking-wider backdrop-filter backdrop-blur-sm bg-opacity-25">
            <div className="md:flex lg:flex-col">
              <div className="md:shrink-0">
                <div>
                  <img
                    className="lg:h-46 lg:w-full object-cover sm:object-cover md:object-cover  md:h-full md:w-48 md:pt-12 p-4"
                    src={img1}
                    alt="Modern building architecture"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase text-[24px] text-center tracking-wide text-sm text-indigo-700 font-semibold">
                  E-Commerce Website
                </div>
                <a
                  href="#"
                  className="block  mt-1 text-[20px] leading-tight font-medium text-black hover:underline"
                >
                  This Project was done in my intership time
                </a>
                <p className="mt-2 text-white font-medium">
                  I gained commercial experience with Amazon and Flipkart
                  projects, learning React.js and building E-commerce sites
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                className=" w-48 mb-4 text-[18px] mt-6 rounded-md bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
                type="submit"
              >
                <a href="https://github.com/Jay-Vekariya/E-commerce-website">
                  Github
                </a>
              </button>
            </div>
          </div>
          {/* 2nd card */}
          <div className="max-w-md mx-auto bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-none tracking-wider backdrop-filter backdrop-blur-sm bg-opacity-25">
            <div className="md:flex lg:flex-col">
              <div className="md:shrink-0">
                <div>
                  <img
                    className="lg:h-46 lg:w-full object-cover sm:object-cover md:object-cover  md:h-full md:w-48 md:pt-12 p-4"
                    src={img2}
                    alt="Modern building architecture"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-800 text-[24px] font-semibold text-center">
                  Online Course Registration
                </div>
                <a
                  href="#"
                  className="block mt-1  text-[20px] leading-tight font-medium text-black hover:underline"
                >
                  I'm currently working on this project
                </a>
                <p className="mt-2 text-white font-medium">
                  It's a MERN Stack project. I have Used MongoDB, Express.js,
                  React.js, Node.js Technologyes in this project.
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                className="w-48 mb-4 text-[18px] mt-6 rounded-md bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
                type="submit"
              >
                <a href="https://github.com/Jay-Vekariya/E-commerce-website">
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
