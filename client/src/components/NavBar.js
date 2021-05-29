import React from "react";
import "../App.css";
const NavBar = () => {
  return (
    <header>
      <h2 id="logo-title">Liam Richens</h2>
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
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
