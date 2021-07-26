import React from "react";

const Project = ({ title, about, link, image, techStack }) => {
  return (
    <>
      <div className="project__container">
        <div className="image__container">
          <img src={image} alt="" />
        </div>
        <h3>
          <a href={link}>
            {title} {techStack}
          </a>
        </h3>
        <p className="project-desc">{about}</p>
      </div>
    </>
  );
};

export default Project;
