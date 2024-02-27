import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430867.jpg")',
        }}
        className="h-screen w-full sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover 2xl:bg-cover text-white bg-no-repeat sm:whitespace-nowrap"
      >
        <div className=" p-32">
          <p className=" bg-slate-800 font-semibold text-[19px] border border-none rounded-md p-8 tracking-wider shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30  md:text-wrap lg:text-wrap">
            "I'm currently enrolled in a program to become a Computer Engineer,
            which means I'm learning all about computers and how they work. I'm
            really dedicated to my studies. I put in a lot of effort and always
            aim to do my best in everything I undertake. One of the things I
            find most exciting about my field is the constant opportunity to
            learn new things. Whether it's discovering the inner workings of a
            new programming language or diving into the latest advancements in
            technology, I'm always eager to expand my knowledge.!
            <br />
            <br />
            One of my strengths is my ability to adapt to different situations.
            Whether it's working on a team project with classmates or tackling a
            solo coding assignment, I can easily adjust to whatever the
            situation calls for. I also enjoy exploring new experiences. Trying
            out different projects or experimenting with new software not only
            keeps things interesting but also helps me grow as a student and
            future professional.
            <br />
            <br />I firmly believe that my openness to learning and my
            flexibility will serve me well not only in my studies but also in my
            future career. In a field as rapidly evolving as computer
            engineering, being willing to learn and adapt is essential for
            staying relevant and succeeding in any job I may pursue in the
            future."
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
