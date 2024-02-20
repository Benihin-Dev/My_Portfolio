import React from "react";
import footer from "../img/footer.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer({ contactData }) {
  return (
    <div className="h-20  w-10/12 sm:w-4/5 sm:px-5 pb-1 sm:flex justify-center items-center mt-10 sm:mt-20 mx-auto border-t footer">
      <button className=" bg-purple-800 hover:bg-purple-900 text-white w-full sm:hidden py-1 mt-1 rounded">
        Hire me
      </button>{" "}
      <div className="flex mt-3  justify-center sm:justify-start sm:items-start items-center gap-5 w-full sm:w-4/5">
        <a href="">
          <BsFillTelephoneFill className=" text-slate-500 hover:text-black size-4" />
        </a>
        <a href="">
          <MdAlternateEmail className=" text-slate-500 hover:text-black size-5" />
        </a>
        <a href="">
          <FaLinkedin className=" text-slate-500 hover:text-black size-5" />
        </a>
        <a href="">
          <FaGithub className=" text-slate-500 hover:text-black size-5" />
        </a>
        <a href="">
          <FaWhatsapp className=" text-slate-500 hover:text-black size-5" />
        </a>
      </div>
      <button className="hidden sm:block h-8  bg-purple-800 hover:bg-purple-900 text-white w-1/5  py-1 mt-1 rounded">
        Hire me
      </button>
    </div>
  );
}
