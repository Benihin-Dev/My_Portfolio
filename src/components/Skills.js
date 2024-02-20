import React, { useEffect } from "react";
import { AiOutlineBuild } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      const elements = document.querySelectorAll(".animate-child2");
      elements.forEach((element) => {
        element.classList.remove("slide-in");
      });
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <div className=" w-11/12 sm:w-4/5 mx-auto sm:mt-20  items-center ">
      <div className="flex items-center justify-center rotate-45 w-full sm:hidden">
        <AiOutlineBuild className="size-32 text-slate-600" />
      </div>

      <h1 className=" w-3/4 sm:w-2/5  text-orange-500 hover:text-orange-600 mt-5 pb-2 text-xl font-bold border-b-2 border-purple-100/4">
        Programming Skills
      </h1>
      <div className="flex w-full  h-96 my-10">
        <div
          ref={ref}
          className={`animated-component ${
            inView ? "is-visible" : ""
          } relative sm:w-8/12`}
        >
          <div className="flex w-full py-10 animate-parent2">
            <div className="size-32 parentOfSkillElement flex justify-center items-center relative animate-child2">
              <div>
                <TiHtml5 className="size-12 text-orange-500" />
                <h2 className=" text-center text-slate-500">HTML</h2>
              </div>
              <div className="childOfSkillElement  absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement flex justify-center items-center relative  animate-child2">
              <div>
                <FaCss3Alt className="size-10  text-blue-700" />
                <h2 className=" text-center text-slate-500">CSS</h2>
              </div>
              <div className="childOfSkillElement  absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement flex justify-center items-center relative  animate-child2">
              <div>
                <IoLogoJavascript className="size-10 mx-auto  text-yellow-300 " />
                <h2 className="  text-center text-sm text-slate-500">
                  JavaScript
                </h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement flex justify-center items-center relative  animate-child2">
              <div>
                <FaPhp className="size-12 mx-auto  text-blue-400 " />
                <h2 className=" text-center text-xs text-slate-500">PHP</h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
          </div>
          <div className=" absolute top-[70px] left-16 flex w-full py-10 animate-parent2">
            <div className="size-32 parentOfSkillElement flex justify-center items-center relative animate-child2">
              <div>
                <FaReact className="size-12 mx-auto text-blue-500" />
                <h2 className=" text-center text-slate-500">ReactJS</h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement flex justify-center items-center relative  animate-child2">
              <div className="">
                <FaNodeJs className="size-10 mx-auto  text-green-500" />
                <h2 className=" text-center text-slate-500">NodeJS</h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement flex justify-center items-center relative  animate-child2">
              <div>
                <FaJava className="size-10 mx-auto text-blue-900 " />
                <h2 className=" text-center text-slate-500">JAVA</h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement  flex justify-center items-center relative  animate-child2">
              <div>
                <SiExpress className="size-10 mx-auto text-green-500 " />
                <h2 className=" text-center text-slate-500">ExpressJS</h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
          </div>
          <div className=" absolute top-[140px] left-[129px] flex w-full py-10 animate-parent2">
            <div className="size-32 parentOfSkillElement flex justify-center items-center relative animate-child2">
              <div>
                <TbFileTypeSql className="size-12 mx-auto text-slate-400" />
                <h2 className=" text-center text-slate-500">SQL</h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement flex justify-center items-center relative  animate-child2">
              <div>
                <FaBootstrap className="size-10 mx-auto text-purple-600" />
                <h2 className="  leading-3 text-center text-sm text-slate-500">
                  Bootstrap <br />
                  CSS
                </h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement flex justify-center items-center relative  animate-child2">
              <div>
                <SiTailwindcss className="size-10 mx-auto  text-blue-400 " />
                <h2 className=" text-center leading-3 text-slate-500">
                  Tailwind <br /> CSS
                </h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
            <div className=" size-32 parentOfSkillElement flex justify-center items-center relative  animate-child2">
              <div>
                <FaPython className="size-10 mx-auto text-yellow-300 " />
                <h2 className=" text-center text-slate-500">Python</h2>
              </div>
              <div className="childOfSkillElement absolute border size-24 rotate-45 rounded top-4 left-4"></div>
            </div>
          </div>
        </div>
        <div className="hidden 0 sm:flex items-center sm:w-4/12 mx-auto justify-center">
          <div className=" w-1/2 rotate-45">
            {" "}
            <AiOutlineBuild className="size-32 text-slate-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
