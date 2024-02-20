import React from "react";
import { useState, useEffect, useRef } from "react";
import projectSchoolBus from "../img/projectSchoolBus.png";
import linkHub from "../img/linkHub.png";
import { useInView } from "react-intersection-observer";

export default function InnerProjects() {
  const [project1IsHovered, setProject1IsHovered] = useState(false);
  const [project2IsHovered, setProject2IsHovered] = useState(false);
  const [project3IsHovered, setProject3IsHovered] = useState(false);
  const [project4IsHovered, setProject4IsHovered] = useState(false);
  const [project5IsHovered, setProject5IsHovered] = useState(false);

  const [showProject1Details, setShowProject1Details] = useState(false);
  const [showProject2Details, setShowProject2Details] = useState(false);
  const [showProject3Details, setShowProject3Details] = useState(false);
  const [showProject4Details, setShowProject4Details] = useState(false);
  const [showProject5Details, setShowProject5Details] = useState(false);

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
    } else {
      setProject5IsHovered(false);
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
    } else {
      setProject5IsHovered(true);
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
    } else {
      setShowProject5Details(!showProject5Details);
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
            <div className=" absolute cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
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
              }   projectSlider absolute h-full w-full opacity-60 bg-black border top-0 left-0 flex justify-center items-center`}
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
                  " LinkHub "
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
                  <p className=" text-justify mt-1 text-sm leading-4 text-slate-500">
                    Users can manage their Social Medias Ids in the webpage and
                    can share their Ids under <b>UNIQUE ID </b>with others.{" "}
                  </p>
                  <p className=" text-justify text-sm leading-4 text-slate-800 my-1">
                    - MERN Stack -
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-1 mt-2 w-full">
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
            <div className=" absolute cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
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
              }   projectSlider absolute h-full w-full opacity-60 bg-black border top-0 left-0 flex justify-center items-center`}
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
                  " MYRA "
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
                  <p className="text-base py-2 text-orange-500">
                    "Project MYRA "
                  </p>
                  <p className=" text-justify py-1 text-sm leading-4 text-slate-500">
                    Users can Track the current location of the School Bus in
                    RealTime using their Mobile Phones.
                  </p>
                  <p className=" text-justify py-1 text-sm leading-4 text-slate-800 my-1">
                    - Electronic Components -
                  </p>

                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-1 mt-2 w-full">
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
            <div className=" absolute cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
              <img
                src={linkHub}
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
              }   projectSlider absolute h-full w-full opacity-60 bg-black border top-0 left-0 flex justify-center items-center`}
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
                  <p className="text-base text-orange-500 my-2">
                    " Health_Guard "
                  </p>
                  <p className=" text-justify text-sm leading-4 py-1 text-slate-500">
                    Revolutionize pharmacy operations with our cutting-edge
                    Pharmacy Management System. Simplify prescription
                    processing, optimize inventory management, and enchance
                    patient care.
                  </p>
                  <p className=" text-justify text-sm leading-4 text-slate-800 my-2">
                    - C# | .NetFramework -
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-1 mt-2 w-full">
                    More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" sm:flex sm:px-12 gap-20">
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
            <div className=" absolute cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
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
              }   projectSlider absolute h-full w-full opacity-60 bg-black border top-0 left-0 flex justify-center items-center`}
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
                  " Portfolio "
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
                  <p className=" text-justify text-sm leading-4 text-slate-500">
                    <span className="text-base text-orange-500">
                      " SnapFolio "
                    </span>
                    <br />
                    website provides various portfolio templates; users can make
                    their own portfolio selecting from any template.
                    <br />
                    <span className=" text-slate-800">- MERN Stack -</span>
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-1 mt-2 w-full">
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
            <div className=" absolute cursor-pointer flex justify-center items-center bottom-0 overflow-hidden mx-auto h-40">
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
              }   projectSlider absolute h-full w-full opacity-60 bg-black border top-0 left-0 flex justify-center items-center`}
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
                  " LinkHub "
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
                  <p className=" text-justify text-sm leading-4 text-slate-500">
                    <span className="text-base text-orange-500">
                      " LinkHub "
                    </span>
                    <br />
                    Users can manage their Social Medias Ids in the webpage and
                    can share their Ids under <b>UNIQUE ID </b>with others.
                    <br />
                    <span className=" text-slate-800">- MERN Stack -</span>
                  </p>
                  <button className="hover:bg-purple-700 hover:text-white border-purple-700 border text-xs rounded text-purple-700 p-1 mt-2 w-full">
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
