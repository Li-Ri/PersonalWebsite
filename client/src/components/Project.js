import React from "react";

const Project = ({ title, about, link }) => {
  return (
    <>
      <div className="project__container">
        <h3>{title}</h3>
        <p>
          {about}
          <a href={link}>Repo</a>
        </p>
      </div>
    </>
  );
};

export default Project;
