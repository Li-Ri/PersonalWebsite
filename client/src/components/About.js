import React from "react";
import "../about.css";
const About = () => {
  return (
    <>
      <div className="about-section">
        <h1 id="section-title">Who am I?</h1>
        <div className="about">
          <div className="about-text">
            <p>
              My name is Liam and I am a Software Developer. I began my journey
              into software development while undertaking my master’s degree in
              Aerospace Engineering by deciding to pick up Python for my own
              personal projects.
            </p>
            <p>
              From this initial exposure to programming I was hooked and began
              challenging myself to learn JavaScript and building on that
              knowledge with libraries and frameworks such as React and Express
              in order to build more ambitious web development projects and
              pursue a career as a Fullstack Software Developer.
            </p>
          </div>
          <div className="about-img"></div>
        </div>
      </div>
    </>
  );
};

export default About;
