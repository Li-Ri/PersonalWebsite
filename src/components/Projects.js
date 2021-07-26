import React from "react";
import Project from "./Project";
import "../projects.css";
import projects from "../projectInfo";

const Projects = () => {
  const projectList = projects.map((project, index) => {
    return (
      <Project
        key={index}
        id={index}
        title={project.title}
        about={project.about}
        link={project.link}
        image={project.image}
        techStack={project.techStack}
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
