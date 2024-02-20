import React, { useState, useEffect } from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import profilPic from "../img/profilePic.png";
import profilePic2 from "../img/profilePic2.jpg";
import profilePic3 from "../img/profilePic3.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

export default function NavBar({ aboutData }) {
  const [value, setValue] = useState(true);
  const [showinfo, setShowInfo] = useState(false);
  function handlemenu() {
    setValue(!value);
  }

  const [activeSection, setActiveSection] = useState("about-section");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const setShowInfoFunction = () => {
    setShowInfo(!showinfo);
  };

  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 shadow-sm   rounded-xl  z-10 block md:flex sm:w-4/5 w-11/12 mx-auto mt-5 justify-between items-center">
      <div className="flex mr-2 items-center justify-between">
        <div className=" relative">
          <img
            onClick={setShowInfoFunction}
            src={profilePic2}
            className="navBarImg h-9 border bg-white hover:border-purple-700 border-purple-400 items-start  rounded-full  flex justify-center overflow-hidden"
          />
          {showinfo && (
            <div
              className={`${
                isMounted ? "slide-in5" : ""
              } opacity-0 overflow-auto shadow-lg absolute top-[40px] left-7 w-80 bg-[#ffffffeb] border-b-4 border border-t-transparent px-3 text-justify z-10`}
            >
              <div className="h-40 projectContent relative overflow-auto flex justify-center items-center">
                {" "}
                <img
                  src={profilePic3}
                  alt=""
                  className=" absolute top-0 h-[300px]"
                />
              </div>
              <p className="text-xl text-slate-580 ">Benihin Mahendra</p>
              <div className="flex gap-5 pt-4 py-2">
                <IoLocationOutline className=" text-slate-700" />
                <p className="text-sm text-slate-600 leading-4 ">
                  Beach Road, Saththurakondan,
                  <br />
                  Batticaloa, Estern Province, Sri Lanka
                </p>
              </div>
              <div className="flex gap-5 py-2">
                <MdOutlineDateRange className=" text-slate-700" />
                <p className="text-sm text-slate-600 leading-4 ">
                  19th May 2000
                </p>
              </div>
              <div className="flex gap-5 py-2">
                <FaWhatsapp className=" text-slate-700" />
                <p className="text-sm text-slate-600 leading-4 ">
                  +94 77 220 6069
                </p>
              </div>
              <div className="flex gap-5 py-1">
                <TbBrandLinkedin className=" text-slate-700" />
                <p className="text-sm text-slate-600 leading-4 ">
                  Benihin Mahendra
                </p>
              </div>
              <div className="flex gap-5 py-2">
                <MdAlternateEmail className=" text-slate-700" />
                <p className="text-sm text-slate-600 leading-4 ">
                  mahendrabenihin@gmail.com
                </p>
              </div>
              <div className="flex gap-5 py-2">
                <LuGithub className=" text-slate-900" />
                <p className="text-sm text-slate-600 leading-4 ">Benihin-Dev</p>
              </div>
              <button className=" bg-purple-800 hover:bg-purple-900 text-white w-full py-1 mt-1 rounded">
                Hire me
              </button>
              <p className="h-4"></p>
            </div>
          )}
        </div>

        <div className="block md:hidden">
          {value === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer text-purple-600 hover:text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
                onClick={() => {
                  handlemenu();
                }}
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="  size-7 cursor-pointer hover:text-purple-600 "
              onClick={() => {
                handlemenu();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      <ul
        className={`block  ${
          value
            ? "hidden md:flex w-2/5 gap-10 items-center py-2"
            : "block md:flex md:w-4/5  "
        }transparentwhite shadow-lg  px-5 relative md:gap-10 text-center md:w-4/5 rounded-xl md:bg-white md:bg-opacity-80 md:items-end md:justify-around py-2`}
      >
        <li
          className={
            activeSection === "about-section"
              ? "border-b-2 border-purple-600"
              : ""
          }
        >
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            About
          </Link>
        </li>
        <li
          className={
            activeSection === "education-section"
              ? "border-b-2 border-purple-600"
              : ""
          }
        >
          <Link
            to="education-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            Education
          </Link>
        </li>
        <li
          className={
            activeSection === "skills-section"
              ? "border-b-2 border-purple-600"
              : ""
          }
        >
          <Link
            to="skills-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            Dev_Skills
          </Link>
        </li>
        <li
          className={
            activeSection === "projects-section"
              ? "border-b-2 border-purple-600"
              : ""
          }
        >
          <Link
            to="projects-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            Projects
          </Link>
        </li>
        <li
          className={
            activeSection === "extra-section"
              ? "border-b-2 border-purple-600"
              : ""
          }
        >
          <Link
            to="extra-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onSetActive={handleSetActive}
          >
            Extra_Info
          </Link>
        </li>
      </ul>
    </div>
  );
}
