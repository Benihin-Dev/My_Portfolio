import React, { useEffect } from "react";
import { ReactTyped } from "react-typed";
import bgimage from "../img/bgOfPic.png";
import profilPic from "../img/profilePic.png";
import profilPic1 from "../img/profilePic1.png";
import exampleimage from "../img/example.png";

export default function About({ aboutData }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      const elements = document.querySelectorAll(".userProfileImg");
      const element1 = document.querySelector(".aboutUser");

      elements.forEach((element) => {
        element.classList.remove("visibleAnimation");
      });
      element1.classList.remove("upFromDown");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="block sm:flex w-9/12 mt-12 mx-auto md:mt-5 overflow-hidden">
      <div className="sm:hidden w-full  flex justify-end items-center">
        <img
          src={profilPic}
          className=" h-48 userProfileImg visibleAnimation items-start  mt-10  flex justify-center overflow-hidden"
        />
      </div>
      <div className="w-full aboutUser upFromDown mt-1 mt sm:mt-12 md:mt-32  lg:mt-48 xl:mt-64 md:w-7/12 ">
        <span className="text-lg text-slate-600 tracking-widest">hello...</span>
        <h1 className="text-4xl md:text-5xl ">
          I'm <span className="name tracking-normal">Benihin Mahendra </span>
          <p className=" text-lg sm:text-2xl p-0 text-orange-400 tracking-widest">
            {" "}
            <ReactTyped
              strings={[
                "Web Developer.",
                "Software Engineer.",
                "MERN Stack Developer.",
              ]}
              typeSpeed={100}
              backSpeed={40}
              loop
            />
          </p>
          <p className=" text-sm text-justify text-slate-500">
            I am a passionate and innovative undergraduate student at the
            University of Sri Jayewardenapura, driven by a profound enthusiasm
            for technology. My goal is to become a proficient professional,
            leveraging my skills to create impactful solutions. I approach tasks
            with enthusiasm and welcome the opportunity to collaborate and
            discuss how my abilities align with your needs.
          </p>
        </h1>
        <div className="mt-2 sm:mt-1  flex justify-end items-center">
          <a href="https://drive.google.com/file/d/183vFIVR70KXf6P9IPWwRclr4Rid6xReF/view?usp=sharing">
            <button className=" border rounded-2xl border-orange-400 text-slate-600 hover:bg-orange-400 hover:text-white text-xs sm:text-normal py-1 px-3">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/12"></div>
      <img
        src={profilPic1}
        className="hidden sm:flex visibleAnimation object-contain md:mt-16 md:w-4/12 justify-center overflow-hidden"
      />
    </div>
  );
}
