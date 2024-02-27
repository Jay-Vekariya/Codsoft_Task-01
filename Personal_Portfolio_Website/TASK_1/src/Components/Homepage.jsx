import React from "react";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div className="md:text-wrap">
      <Navbar />
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430867.jpg")',
        }}
        className="h-screen w-full sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover 2xl:bg-cover text-white bg-no-repeat sm:whitespace-nowrap"
      >
        <div className=" p-[200px] pl-[300px] whitespace-nowrap md:flex flex-col md:flex-wrap md:pt-72">
          <h2 className="text-[25px]">React.JS-developer</h2>
          <h1 className="text-[50px]">
            Hi i'm <i className="text-blue-500 text-[50px]">Jay Vekariya</i>
          </h1>
          <h1 className="text-[50px]">From India</h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
