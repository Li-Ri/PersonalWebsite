import React from "react";

const Project = ({ title, about, link }) => {
  return (
    <>
      <div className="project__container">
        <h3>{title}</h3>
        <p>{about}</p>
        <a href={link}>Repo</a>
      </div>
    </>
  );
};

export default Project;
