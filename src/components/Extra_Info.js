import React from "react";
import { SiBbciplayer } from "react-icons/si";
import { TbPlayVolleyball } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BsWrenchAdjustable } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { RxLapTimer } from "react-icons/rx";
import { GiSoundWaves } from "react-icons/gi";
import { FaPeoplePulling } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiFillAlert } from "react-icons/ai";
import { SiHyperledger } from "react-icons/si";
import { MdLocalHospital } from "react-icons/md";
import { BiConversation } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

export default function Extra_Info() {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  return (
    <div className="sm:w-4/5 mt-20  w-11/12 mx-auto sm:px-10">
      <div className="sm:hidden justify-center items-center flex">
        <SiBbciplayer className="rotateAnimation size-28 text-slate-600" />
      </div>
      <h1 className=" w-3/4 sm:w-2/5  text-orange-500 hover:text-orange-600 mt-5 pb-2 text-xl font-bold border-b-2 border-purple-100/4">
        Extra_Skills
      </h1>
      <div className="sm:flex mt-5">
        <div className="sm:w-2/6 justify-center items-center hidden sm:flex">
          <SiBbciplayer className="rotateAnimation size-28 text-slate-600" />
        </div>
        <div
          ref={ref}
          className={`animated-component ${
            inView ? "is-visible" : ""
          } sm:w-4/6 relative h-96 overflow-hidden border shadow`}
        >
          <div className="flex   z-10 absolute top-20 left-20 w-full rotate-[30deg]">
            <div className="-move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <RiTeamFill className="size-10 mx-auto text-orange-400" />
                <h1 className=" text-center text-sm">Teamwork</h1>
              </div>
            </div>
            <div className="-move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <BsWrenchAdjustable className="size-10 text-green-400    mx-auto" />
                <h1 className=" text-center text-sm">Problem-solving</h1>
              </div>
            </div>
            <div className="-move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <IoWaterOutline className="size-10 mx-auto text-slate-600 " />
                <h1 className=" text-center text-sm">Adaptability</h1>
              </div>
            </div>
            <div className="-move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <RxLapTimer className="size-10 mx-auto text-blue-600" />
                <h1 className=" text-center text-sm">Time Management</h1>
              </div>
            </div>
          </div>
          <div className="flex   z-10 absolute top-40 left-[-50px] w-full rotate-[30deg]">
            <div className="move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <GiSoundWaves className="size-10 mx-auto text-red-500" />
                <h1 className=" text-center text-sm">Communication</h1>
              </div>
            </div>
            <div className="move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <FaPeoplePulling className="size-10 mx-auto text-cyan-600" />
                <h1 className=" text-center text-sm">Leadership</h1>
              </div>
            </div>
            <div className="move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <HiOutlineLightBulb className="size-10 mx-auto text-yellow-400" />
                <h1 className=" text-center text-sm">Creativity</h1>
              </div>
            </div>
            <div className="move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <AiFillAlert className="size-10 mx-auto text-purple-500    " />
                <h1 className=" text-center text-sm">Critical Thinking</h1>
              </div>
            </div>
          </div>
          <div className="flex   z-10 absolute top-60 left-[-150px] w-full rotate-[30deg]">
            <div className="--move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <BiConversation className="size-10 mx-auto text-green-800" />
                <h1 className=" text-center text-sm">Customer Service</h1>
              </div>
            </div>
            <div className="--move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <SiHyperledger className="size-10 mx-auto text-blue-700" />
                <h1 className=" text-center text-sm">Digital Marketing</h1>
              </div>
            </div>
            <div className="--move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <MdLocalHospital className="size-10 mx-auto text-red-700" />
                <h1 className=" text-center text-sm">First-Aid</h1>
              </div>
            </div>
            <div className="--move30 mx-auto ">
              <div className=" border py-1 px-2 shadow mx-auto rotate-[-30deg]">
                <IoGameControllerOutline className="size-10 mx-auto text-pink-400" />
                <h1 className=" text-center text-sm">PC Gamming</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
