import React, { useState } from "react";
import "../about.css";
import backgroundImage from "../images/background-image.jpg";
import pythonLogo from "../images/python-logo.png";
import jsLogo from "../images/js-logo.png";
import javaLogo from "../images/java-logo.png";
import photographerImage from "../images/photographer.png";
import glasgowImage from "../images/glasgow.png";
import mongoDB from "../images/mongoDB.png";

const About = () => {
  const [scrollHeight, setScrollheight] = useState(0);
  window.addEventListener("scroll", () => {
    const newScrollHeight = window.scrollY;
    setScrollheight(newScrollHeight);
  });
  const parallax = {
    height: "28%",
    backgroundImage: `linear-gradient(to top, black 40%, transparent 90%), url("${glasgowImage}")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: Math.min(100 / scrollHeight),
  };

  const bioPhotoStyles = {
    height: "28%",
    backgroundImage: `url("${photographerImage}")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="about-section">
        <div className="about" style={parallax}>
          <h1>Who am I?</h1>
          <ul>
            <li>
              <a href="" className="nav-link">
                Biography
              </a>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <a href="" className="nav-link">
                Software Skills
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me">
          <div className="about-text">
            <h2>Biography</h2>
            <p>
              My name is Liam and I am a Software Developer. I began my journey
              into software development while undertaking my master’s degree in
              Aerospace Engineering. I decided to learn python for academic
              projects which led me to create small personal projects to help my
              work flow.
            </p>
            <p>
              From this initial exposure to programming I was hooked and so I
              began to learn JavaScript to build on the foundation i had learnt
              with Python and begin building more ambitious web applications
              with frameworks and libraries such as Express and React.
            </p>
            <p>
              I found a sincere passion for software development and what it
              means to be a software engineer. Although I am at the beginning of
              my Software Development Journey, I am fully committed to being a
              great engineer.
            </p>
          </div>
        </div>
        <div className="bio-photo" style={bioPhotoStyles}></div>

        <div className="skills">
          <h2>Software Knowledge</h2>
          <div className="images__container">
            <div className="image__container">
              <img src={pythonLogo} alt="" />
              <div className="related-tech">
                <p>Flask, Scipy, NumPy, Pandas</p>
              </div>
            </div>
            <div className="image__container">
              <img src={jsLogo} alt="" />
              <div className="related-tech">
                <p>React, Express, Chart.JS, </p>
              </div>
            </div>
            <div className="image__container">
              <img src={javaLogo} alt="" />
              <div className="related-tech">
                <p>Spring</p>
              </div>
            </div>
            <div className="database">
              <img src={mongoDB} alt="" />
              <div className="related-tech">
                <p>MongoDB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="interests">
          <h2>Interests</h2>
          <ul>
            <li>
              I love science fiction and i am fascinated by space, specifically
              how travel works in space
            </li>
            <li>All things Film</li>
            <li>
              I'm also into mechanical keyboards, currently rocking the Keychron
              K2V2, here's a pic of us together
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
