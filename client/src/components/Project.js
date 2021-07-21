import React from "react";
import gitLogo from "../images/gitlogo.png";

const Project = ({ title, about, link, image, id }) => {
  return (
    <>
      <div className="project__container">
        <div className="image__container">
          <img src={image} alt="" />
        </div>
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p className="project-desc">{about}</p>
      </div>
    </>
  );
};

export default Project;
