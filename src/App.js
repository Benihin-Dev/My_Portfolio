import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Extra_Info from "./components/Extra_Info";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdPodium } from "react-icons/io";

function App() {
  return (
    <div className="font-kanit overflow-hidden">
      <NavBar />
      <Element name="about-section">
        <About />
      </Element>
      <Element name="education-section">
        <Education />
      </Element>
      <Element name="skills-section">
        <Skills />
      </Element>
      <Element name="projects-section">
        <Projects />
      </Element>
      <Element name="extra-section">
        <Extra_Info />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
