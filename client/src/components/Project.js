import React from "react";

const Project = ({ title, about, link, image }) => {
  return (
    <>
      <div className="project__container">
        <div className="image__container">
          <img src={image} alt="" />
        </div>
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
