import React, { useState } from "react";
import "../App.css";
import github from "../images/git-logo.png";
import linked from "../images/linked.png";
import profilePic from "../images/profile_pic.png";

const NavBar = ({ showImg, setShowImg }) => {
  const handleHover = () => {
    setShowImg(!showImg);
  };

  const handleLeave = () => {
    setShowImg(!showImg);
  };

  return (
    <header>
      <div className="header-title">
        <h2 id="logo-title">Liam Richens</h2>
        <div className="profile-pic">
          <img src={profilePic} alt="" />
        </div>
        <h4 id="quote">Full Stack Engineer</h4>
        <div className="contact-info">
          <p>Tel: +44 7801174094</p>
          <p>Email: liam.richens.11@gmail.com</p>
        </div>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="/">Home</a>
          </li>
          <li className="main-nav__item">
            <a
              href="/projects"
              onMouseOver={handleHover}
              onMouseLeave={handleLeave}
            >
              Projects
            </a>
          </li>
          <li className="main-nav__item">
            <a href="/about">Who am I?</a>
          </li>

          <li className="social-link">
            <a href="https://github.com/Li-Ri">
              <img src={github} alt="" />
            </a>
          </li>
          <li className="social-link">
            <a href="https://www.linkedin.com/in/liam-richens-516314144/">
              <img src={linked} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
