import React, { useState } from "react";
import "../about.css";
import "../App.css";
import pythonLogo from "../images/python-logo.png";
import jsLogo from "../images/js-logo.png";
import javaLogo from "../images/java-logo.png";
import photographerImage from "../images/photographer.png";
import glasgowImage from "../images/glasgow.png";
import mongoDB from "../images/mongoDB.png";
import nodeImg from "../images/nodeJS.png";
import postgresImg from "../images/postgres.png";
import piImg from "../images/pi.png";
import mechKeyboardImg from "../images/mech-keyboard.png";

const About = () => {
  const [scrollHeight, setScrollheight] = useState(0);
  window.addEventListener("scroll", () => {
    const newScrollHeight = window.scrollY;
    setScrollheight(newScrollHeight);
  });
  const parallax = {
    height: "20%",
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

  const keyboardStyle = {
    height: "23%",
    backgroundImage: `url("${mechKeyboardImg}")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "top right",
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
              <a href="#bio" className="nav-link">
                Biography
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#interests" className="nav-link">
                Interests
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me">
          <div className="about-text" id="bio">
            <p>
              My name is Liam and I am a Software Developer. I began my journey
              into software development while undertaking my master’s degree in
              Aerospace Engineering. I decided to learn python for academic
              projects which led me to create small personal projects to help my
              work flow.
            </p>
            <p>
              From this initial exposure to programming I was hooked and so I
              began to learn JavaScript to build on the foundation I had learnt
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
        <div className="interests" id="interests">
          <div className="keyboard-section">
            <h2>Hobbies & Interests.</h2>
            <p>
              I also have love for Film, Photography and have a fondness for
              mechanical keyboards.
            </p>
          </div>
          <div className="pi-section">
            <p>
              Outside of web development I enjoy sports such as weightlifting,
              Rugby, and Table Tennis. In my free time I like working on my home
              projects with Raspberry Pi.
            </p>
            <div className="pi-container">
              <img src={piImg} alt="" />
            </div>
          </div>
        </div>
        <div className="keyboard-img" style={keyboardStyle}></div>

        <div className="skills" id="skills">
          <h2>Skills</h2>
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
            <div className="database image__container">
              <img src={mongoDB} alt="" />
              <div className="related-tech">
                <p>MongoDB</p>
              </div>
            </div>
            <div className="image__container">
              <img src={nodeImg} alt="" />
              <div className="related-tech">
                <p>Node.JS</p>
              </div>
            </div>
            <div className="image__container">
              <img src={postgresImg} alt="" />
              <div className="related-tech">
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
