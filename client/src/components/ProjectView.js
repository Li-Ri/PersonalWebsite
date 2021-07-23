import React from "react";

const ProjectView = ({ project }) => {
  return (
    <>
      <div className="project-desc">
        <h1>{project.title}</h1>
        <img src={project.image} alt="" />
        <p>{project.about}</p>
      </div>
    </>
  );
};

export default ProjectView;
