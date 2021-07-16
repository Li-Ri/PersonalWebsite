import React from "react";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      title: "Spaceplane Project",
      about:
        "This project looks at spacecrafts in Low Earth Orbit using Rocket theory and Orbital Mechanics Optimizes the fuel requirements in order to reach a target orbit.",
      link: "https://github.com/Li-Ri/Spaceplane-Project",
    },
    {
      title: "CryptoBite",
      about:
        "Crypto tracker that allows users to track the current trends in multiple currencies, add them to their portfolio and invest. This app also streams live data on the current and historical price on the coins to track overall portfolio performance with time.",
      link: "https://github.com/Li-Ri/Crypto_Wallet_React_App",
    },
    {
      title: "ScrapBook",
      about:
        "Scrapbook is a social media app that allows users to create private rooms on their profile for groups to share content such as images and captioned posts as well live chat.",
      link: "https://github.com/Li-Ri/ScrapBook_Frontend",
    },
  ];

  const projectList = projects.map((project) => {
    return (
      <Project
        title={project.title}
        about={project.about}
        link={project.link}
      />
    );
  });
  return <div className="projects__container">{projectList}</div>;
};

export default Projects;
