import React from "react";
import { useState, useEffect, useRef } from "react";
import projectSchoolBus from "../img/projectSchoolBus.png";
import linkHub from "../img/linkHub.png";
import healthGurad from "../img/healthGurad.png";
import { useInView } from "react-intersection-observer";

export default function InnerProjects() {
  const [project1IsHovered, setProject1IsHovered] = useState(false);
  const [project2IsHovered, setProject2IsHovered] = useState(false);
  const [project3IsHovered, setProject3IsHovered] = useState(false);
  const [project4IsHovered, setProject4IsHovered] = useState(false);
  const [project5IsHovered, setProject5IsHovered] = useState(false);
  const [project6IsHovered, setProject6IsHovered] = useState(false);

  const [showProject1Details, setShowProject1Details] = useState(false);
  const [showProject2Details, setShowProject2Details] = useState(false);
  const [showProject3Details, setShowProject3Details] = useState(false);
  const [showProject4Details, setShowProject4Details] = useState(false);
  const [showProject5Details, setShowProject5Details] = useState(false);
  const [showProject6Details, setShowProject6Details] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

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

  const handleMouseLeave = (event) => {
    let name = event.currentTarget.getAttribute("name");
    if (name === "project1") {
      setProject1IsHovered(false);
    } else if (name === "project2") {
      setProject2IsHovered(false);
    } else if (name === "project3") {
      setProject3IsHovered(false);
    } else if (name === "project4") {
      setProject4IsHovered(false);
    } else if (name === "project5") {
      setProject5IsHovered(false);
    } else {
      setProject6IsHovered(false);
    }
  };

  const handleMouseEnter = (event) => {
    let name = event.currentTarget.getAttribute("name");
    if (name === "project1") {
      setProject1IsHovered(true);
    } else if (name === "project2") {
      setProject2IsHovered(true);
    } else if (name === "project3") {
      setProject3IsHovered(true);
    } else if (name === "project4") {
      setProject4IsHovered(true);
    } else if (name === "project5") {
      setProject5IsHovered(true);
    } else {
      setProject6IsHovered(true);
    }
  };

  const handleShowProjectDetails = (event) => {
    let name = event.currentTarget.getAttribute("name");
    if (name === "project1") {
      setShowProject1Details(!showProject1Details);
    } else if (name === "project2") {
      setShowProject2Details(!showProject2Details);
    } else if (name === "project3") {
      setShowProject3Details(!showProject3Details);
    } else if (name === "project4") {
      setShowProject4Details(!showProject4Details);
    } else if (name === "project5") {
      setShowProject5Details(!showProject5Details);
    } else {
      setShowProject6Details(!showProject6Details);
    }
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
    <div className="sm:w-4/5  w-11/12 mx-auto">
      <div className="flex justify-end items-end">
        <h1 className=" text-end w-3/4 sm:w-2/5  text-orange-500 hover:text-orange-600 mt-5 pb-2 text-xl font-bold border-b-2 border-purple-100/4">
          Projects
        </h1>
      </div>
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } h-96  sm:h-full projectContent  overflow-y-scroll`}
      >
        <div className=" sm:flex sm:px-5 gap-10 ">
          <div
            onMouseLeave={(event) => {
              handleMouseLeave(event);
            }}
            onMouseEnter={(event) => {
              handleMouseEnter(event);
            }}
            name="project1"
            className=" w-10/12 sm:w-full projectParent relative rounded my-5 h-40 border mx-auto pt-1 shadow-lg"
          >
            <div className=" absolute pt-1 rounded cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
              <img
                src={linkHub}
                className="h-full "
                alt=""
                name="project1"
                onClick={(event) => {
                  handleShowProjectDetails(event);
                }}
              />
            </div>
            <div
              className={`  ${
                project1IsHovered === true ? "upSlider" : "downSlider"
              } ${
                showProject1Details === true ? "upSlider text-black" : ""
              }   projectSlider absolute h-full w-full rounded opacity-80 bg-black border top-0 left-0 flex justify-center items-center`}
            >
              <div
                className={`  ${
                  project1IsHovered === false ? "text-white " : "text-slate-800"
                } ${
                  showProject1Details && "text-slate-800"
                } projectSlider2 leading-4 text-xs text-center px-5`}
              >
                <h1> Social Medias Id Management Web Plateform</h1>
                <h1
                  className={` ${
                    project1IsHovered === true ? " hidden" : ""
                  } text-xl text-purple-300`}
                >
                  "LinkHub"
                </h1>
              </div>
            </div>
            {showProject1Details && (
              <div
                className={`${
                  isMounted ? "slide-in5" : ""
                } shadow-md opacity-0 absolute left-0 z-10 bg-white border py-2 px-3 top-40 w-full`}
              >
                <div className="h-1/2">
                  <p className="text-base my-2 text-orange-500">" LinkHub "</p>
                  <p className=" text-justify my-4 text-sm leading-4 text-slate-400">
                    Users can manage their Social Medias Ids in the webpage and
                    can share their Ids under <b>UNIQUE ID </b>with others.{" "}
                  </p>
                  <p className=" text-justify text-sm leading-4 text-slate-800 my-2">
                    - MERN Stack -
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-2 my-2 w-full">
                    More
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseLeave={(event) => {
              handleMouseLeave(event);
            }}
            onMouseEnter={(event) => {
              handleMouseEnter(event);
            }}
            name="project2"
            className=" w-10/12 sm:w-full projectParent relative rounded my-5 h-40 border mx-auto pt-1 shadow-lg"
          >
            <div className="rounded absolute pt-1 cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
              <img
                src={projectSchoolBus}
                className="h-full "
                alt=""
                name="project2"
                onClick={(event) => {
                  handleShowProjectDetails(event);
                }}
              />
            </div>
            <div
              className={`  ${
                project2IsHovered === true ? "upSlider" : "downSlider"
              } ${
                showProject2Details === true ? "upSlider text-black" : ""
              }   projectSlider absolute h-full w-full rounded opacity-80 bg-black border top-0 left-0 flex justify-center items-center`}
            >
              <div
                className={`  ${
                  project2IsHovered === false ? "text-white " : "text-slate-800"
                } ${
                  showProject2Details && "text-slate-800"
                } projectSlider2 leading-4 text-xs text-center px-5`}
              >
                <h1> School Bus Tracking System</h1>
                <h1
                  className={` ${
                    project2IsHovered === true ? " hidden" : ""
                  } text-xl text-purple-300`}
                >
                  "MYRA"
                </h1>
              </div>
            </div>
            {showProject2Details && (
              <div
                className={`${
                  isMounted ? "slide-in5" : ""
                } shadow-md opacity-0 absolute left-0 z-10 bg-white border py-2 px-3 top-40 w-full`}
              >
                <div className="h-1/2">
                  <p className="text-base py-3 text-orange-500">
                    " Project MYRA "
                  </p>
                  <p className=" text-justify py-3 text-sm leading-4 text-slate-400">
                    Users can Track the current location of the School Bus in
                    RealTime using their Mobile Phones.
                  </p>
                  <p className=" text-justify py-2 text-sm leading-4 text-slate-800 my-1">
                    - Electronic Components -
                  </p>

                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-2 my-2 w-full">
                    More
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseLeave={(event) => {
              handleMouseLeave(event);
            }}
            onMouseEnter={(event) => {
              handleMouseEnter(event);
            }}
            name="project3"
            className=" w-10/12 sm:w-full projectParent relative rounded my-5 h-40 border mx-auto pt-1 shadow-lg"
          >
            <div className=" absolute pt-1 rounded cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
              <img
                src={healthGurad}
                className="h-full "
                alt=""
                name="project3"
                onClick={(event) => {
                  handleShowProjectDetails(event);
                }}
              />
            </div>
            <div
              className={`  ${
                project3IsHovered === true ? "upSlider" : "downSlider"
              } ${
                showProject3Details === true ? "upSlider text-black" : ""
              }   projectSlider absolute h-full rounded w-full opacity-80 bg-black border top-0 left-0 flex justify-center items-center`}
            >
              <div
                className={`  ${
                  project3IsHovered === false ? "text-white " : "text-slate-800"
                } ${
                  showProject3Details && "text-slate-800"
                } projectSlider2 leading-4 text-xs text-center px-5`}
              >
                <h1> Pharmacy Management System</h1>
                <h1
                  className={` ${
                    project3IsHovered === true ? " hidden" : ""
                  } text-xl text-purple-300`}
                >
                  " Health_Guard "
                </h1>
              </div>
            </div>
            {showProject3Details && (
              <div
                className={`${
                  isMounted ? "slide-in5" : ""
                } shadow-md opacity-0 absolute left-0 z-10 bg-white border py-2 px-3 top-40 w-full`}
              >
                <div className="h-1/2">
                  <p className="text-base text-orange-500 my-3">
                    "Health_Guard"
                  </p>
                  <p className=" text-justify text-sm leading-4 py-3 text-slate-400">
                    Revolutionize pharmacy operations with our cutting-edge
                    Pharmacy Management System. Simplify prescription
                    processing, optimize inventory management, and enchance
                    patient care.
                  </p>
                  <p className=" text-justify text-sm leading-4 text-slate-800 my-3">
                    - C# | .NetFramework -
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-2 my-3 w-full">
                    More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" sm:flex sm:px-5 gap-10">
          <div
            onMouseLeave={(event) => {
              handleMouseLeave(event);
            }}
            onMouseEnter={(event) => {
              handleMouseEnter(event);
            }}
            name="project4"
            className=" w-10/12 sm:w-full projectParent relative rounded my-5 h-40 border mx-auto pt-1 shadow-lg"
          >
            <div className=" absolute pt-1 rounded cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
              <img
                src={linkHub}
                className="h-full "
                alt=""
                name="project4"
                onClick={(event) => {
                  handleShowProjectDetails(event);
                }}
              />
            </div>
            <div
              className={`  ${
                project4IsHovered === true ? "upSlider" : "downSlider"
              } ${
                showProject4Details === true ? "upSlider text-black" : ""
              }   projectSlider absolute h-full w-full rounded opacity-80 bg-black border top-0 left-0 flex justify-center items-center`}
            >
              <div
                className={`  ${
                  project4IsHovered === false ? "text-white " : "text-slate-800"
                } ${
                  showProject4Details && "text-slate-800"
                } projectSlider2 leading-4 text-xs text-center px-5`}
              >
                <h1> Protfolio Making Website </h1>
                <h1
                  className={` ${
                    project4IsHovered === true ? " hidden" : ""
                  } text-xl text-purple-300`}
                >
                  "Portfolio"
                </h1>
              </div>
            </div>
            {showProject4Details && (
              <div
                className={`${
                  isMounted ? "slide-in5" : ""
                } shadow-md opacity-0 absolute left-0 z-10 bg-white border py-2 px-3 top-40 w-full`}
              >
                <div className="h-1/2">
                  <p className="text-base text-orange-500 my-3">
                    " SnapFolio "
                  </p>
                  <p className=" text-justify text-sm leading-4 py-3 text-slate-400">
                    website provides various portfolio templates; users can make
                    their own portfolio selecting from any template.
                  </p>
                  <p className=" text-justify text-sm leading-4 text-slate-800 my-3">
                    - MERN Stack -
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-2 my-3 w-full">
                    More
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseLeave={(event) => {
              handleMouseLeave(event);
            }}
            onMouseEnter={(event) => {
              handleMouseEnter(event);
            }}
            name="project5"
            className=" w-10/12 sm:w-full projectParent relative rounded my-5 h-40 border mx-auto pt-1 shadow-lg"
          >
            <div className=" absolute pt-1 rounded cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
              <img
                src={linkHub}
                className="h-full "
                alt=""
                name="project5"
                onClick={(event) => {
                  handleShowProjectDetails(event);
                }}
              />
            </div>
            <div
              className={`  ${
                project5IsHovered === true ? "upSlider" : "downSlider"
              } ${
                showProject5Details === true ? "upSlider text-black" : ""
              }   projectSlider absolute h-full w-full rounded opacity-80 bg-black border top-0 left-0 flex justify-center items-center`}
            >
              <div
                className={`  ${
                  project5IsHovered === false ? "text-white " : "text-slate-800"
                } ${
                  showProject5Details && "text-slate-800"
                } projectSlider2 leading-4 text-xs text-center px-5`}
              >
                <h1> Social Medias Id Management Web Plateform</h1>
                <h1
                  className={` ${
                    project5IsHovered === true ? " hidden" : ""
                  } text-xl text-purple-300`}
                >
                  "LinkHub"
                </h1>
              </div>
            </div>
            {showProject5Details && (
              <div
                className={`${
                  isMounted ? "slide-in5" : ""
                } shadow-md opacity-0 absolute left-0 z-10 bg-white border py-2 px-3 top-40 w-full`}
              >
                <div className="h-1/2">
                  <p className="text-base text-orange-500 my-3">
                    " SnapFolio "
                  </p>
                  <p className=" text-justify text-sm leading-4 py-3 text-slate-400">
                    website provides various portfolio templates; users can make
                    their own portfolio selecting from any template.
                  </p>
                  <p className=" text-justify text-sm leading-4 text-slate-800 my-3">
                    - MERN Stack -
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-2 my-3 w-full">
                    More
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseLeave={(event) => {
              handleMouseLeave(event);
            }}
            onMouseEnter={(event) => {
              handleMouseEnter(event);
            }}
            name="project6"
            className=" w-10/12 sm:w-full projectParent relative rounded my-5 h-40 border mx-auto pt-1 shadow-lg"
          >
            <div className=" absolute pt-1 rounded cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
              <img
                src={linkHub}
                className="h-full "
                alt=""
                name="project6"
                onClick={(event) => {
                  handleShowProjectDetails(event);
                }}
              />
            </div>
            <div
              className={`  ${
                project6IsHovered === true ? "upSlider" : "downSlider"
              } ${
                showProject4Details === true ? "upSlider text-black" : ""
              }   projectSlider absolute h-full w-full opacity-80 rounded bg-black border top-0 left-0 flex justify-center items-center`}
            >
              <div
                className={`  ${
                  project6IsHovered === false ? "text-white " : "text-slate-800"
                } ${
                  showProject6Details && "text-slate-800"
                } projectSlider2 leading-4 text-xs text-center px-5`}
              >
                <h1> Protfolio Making Website </h1>
                <h1
                  className={` ${
                    project6IsHovered === true ? " hidden" : ""
                  } text-xl text-purple-300`}
                >
                  "Portfolio"
                </h1>
              </div>
            </div>
            {showProject6Details && (
              <div
                className={`${
                  isMounted ? "slide-in5" : ""
                } shadow-md opacity-0 absolute left-0 z-10 bg-white border py-2 px-3 top-40 w-full`}
              >
                <div className="h-1/2">
                  <p className="text-base text-orange-500 my-3">
                    " SnapFolio "
                  </p>
                  <p className=" text-justify text-sm leading-4 py-3 text-slate-400">
                    website provides various portfolio templates; users can make
                    their own portfolio selecting from any template.
                  </p>
                  <p className=" text-justify text-sm leading-4 text-slate-800 my-3">
                    - MERN Stack -
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-2 my-3 w-full">
                    More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
