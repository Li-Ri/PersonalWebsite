import React from "react";
import "../App.css";
import github from "../images/git-logo.png";
import linked from "../images/linked.png";

const NavBar = () => {
  return (
    <header>
      <h2 id="logo-title">LR</h2>
      <h4 id="quote">Tech is better with coffee...</h4>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="/">Home</a>
          </li>
          <li className="main-nav__item">
            <a href="/projects">Projects</a>
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
