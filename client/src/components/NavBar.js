import React, { useState } from "react";
import "../App.css";
import github from "../images/git-logo.png";
import linked from "../images/linked.png";

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
        <h2 id="logo-title">LR</h2>
        <h4 id="quote">Tech is better well documented...</h4>
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
            <a href="/about">About</a>
          </li>
          <li className="main-nav__item">
            <a href="/contact">Contact</a>
          </li>
          <li>
            <img src={github} alt="" />
            <img src={linked} alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
