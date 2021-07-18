import React from "react";
import Project from "./Project";
import crytoImg from "../images/crypto.png";
import gymImg from "../images/gymclub.png";
import planeImg from "../images/spaceplane.png";
import scrapbookImg from "../images/scrapbook.png";
import "../projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Spaceplane Project",
      about:
        "This project looks at spacecrafts in Low Earth Orbit using Rocket theory and Orbital Mechanics Optimizes the fuel requirements in order to reach a target orbit.",
      link: "https://github.com/Li-Ri/Spaceplane-Project",
      image: planeImg,
    },
    {
      title: "CryptoBite",
      about:
        "Crypto tracker that allows users to track the current trends in multiple currencies, add them to their portfolio and invest. This app also streams live data on the current and historical price on the coins to track overall portfolio performance with time.",
      link: "https://github.com/Li-Ri/Crypto_Wallet_React_App",
      image: crytoImg,
    },
    {
      title: "ScrapBook",
      about:
        "Scrapbook is a social media app that allows users to create private rooms on their profile for groups to share content such as images and captioned posts as well live chat.",
      link: "https://github.com/Li-Ri/ScrapBook_Frontend",
      image: scrapbookImg,
    },
    {
      title: "Gym Booking App",
      about:
        "A booking app to manage the classes that instructors and members are booked onto as well as managing customer and employee data",
      link: "https://github.com/Li-Ri/gym_app_Flask_Postgresql",
      image: gymImg,
    },
  ];

  const projectList = projects.map((project, index) => {
    console.log(index);
    return (
      <Project
        id={index}
        title={project.title}
        about={project.about}
        link={project.link}
        image={project.image}
      />
    );
  });
  return (
    <>
      <div className="projects__container">
        <h1 id="title">Personal Projects</h1>
        {projectList}
      </div>
    </>
  );
};

export default Projects;
