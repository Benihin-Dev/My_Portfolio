import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    about: {
      name: "John Doe",
      titleName: ["Web Developer", "Software Engineer"],
      Description:
        "Experienced software dsoftware Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam reprehenderit repellat odit expedita soluta molestiae numquam, rem esse, repellendus, maiores nulla architecto facilis? Hic rem repellendus reiciendis sint recusandae quae. develope ",
      Profile:
        "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-picture-png-image_6985293.png",
      cv: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-profile-picture-png-image_6985293.png",
    },
    eduSkills: {
      Education: [
        {
          title: "Bachelor of Science in Computer Science",
          place: "University of Example, 2014-2018",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Voluptate fugiat ",
          _id: "65af790322c1b8355890c117",
        },
        {
          title: "Bachelor of Science in Ctber Security",
          place: "Jaffna, 2014-2018",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Voluptat",
          _id: "65af790322c1b8355890c118",
        },
        {
          title: "Advance level",
          place: "Jaffna, 2014-2018",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Voluptaofficia nesciunt?",
          _id: "65af7903d22c1b8355890c118",
        },
      ],
      Skills: [
        {
          title: "JavaScript",
          description:
            "Proficient in both frontend frontend and backend development.",
          _id: "65af790322c1b8355890c119",
        },
        {
          title: "Node.js",
          description:
            "Extensive experience in building scalable server-side applications.",
          _id: "65af790322c1b8355890c11a",
        },
        {
          title: "React.js",
          description:
            "Extensive experience in building scalable server-side applications.",
          _id: "65af790322c1bds8355890c11a",
        },
      ],
      Projects: [
        {
          title: "Project 1",
          description:
            "Proficient in both frontend frontend and backend development.",
          projectLink: "erhg9 grghierughw9g rguierwhg wg",
          _id: "65af790322c1b8355sa890c119",
        },
        {
          title: "project 2",
          description:
            "Extensive experience in building scalable server-side applications.",
          projectLink: "erhg9 grghierughw9g rguierwhg wg",
          _id: "65af790322c1bsaw8355890c11a",
        },
        {
          title: "project 3",
          description:
            "Extensive experience in building scalable server-side applications.",
          projectLink: "erhg9 grghierughw9g rguierwhg wg",
          _id: "65af790322cfd1b8355890c11a",
        },
      ],
    },
    contacts: {
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
      socialMedias: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/johndoe/",
          _id: "65af790322c1b8355tyj890c11d",
        },
        {
          name: "GitHub",
          link: "https://github.com",
          _id: "65af790322c1utyrb8355890c11e",
        },
        {
          name: "Whatsapp",
          link: "https://whatsapp.com",
          _id: "65af7erg90322c1b8355890c11e",
        },
        {
          name: "Instagram",
          link: "https://instagram.com",
          _id: "65af790322c1b83y55890c11e",
        },
      ],
    },
    experience: [
      {
        title: "Software Developer",
        year: "2021-2023",
        description:
          "XYZ Tech Solutions - Worked on the development of innovative software solutions.",
        _id: "65af790322c1b83558re90c11b",
      },
      {
        title: "Senior Developer",
        year: "2021-2023",
        description:
          "ABC Software Co. - Led a team of developers in building robust web applications.",
        _id: "65af790322c1b8355retr890c11c",
      },
      {
        title: "Network Security",
        year: "2021-2023",
        description:
          "Sathurakondan batticaloa in building robust web applications.",
        _id: "65af790322cer1b8355890c11c",
      },
      {
        title: "Network Security",
        year: "2021-2023",
        description:
          "Sathurakondan batticaloa in building robust web applications.",
        _id: "65af790322c1b8355ter890c11c",
      },
    ],
  });

  const contactData = data.contacts;

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

      <Footer contactData={contactData} />
    </div>
  );
}

export default App;
