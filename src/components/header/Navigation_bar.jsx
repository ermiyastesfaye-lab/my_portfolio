import React, { useState } from "react";
import "./navigation_bar.css";
export function Navigation_bar({}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(true);
  };

  const handleXburgerClick = () => {
    setMenuOpen(false);
  };
  return (
    <article className="header">
      <h1 className="logo">
        Ermi<span className="special">.</span>
      </h1>
      <nav className="navBar">
        <ul>
          <li>
            <a href="#home" id="home-link">
              Home
            </a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        id="hamburger_menu"
        onClick={handleHamburgerClick}
        style={{
          display: menuOpen ? "none" : "flex",
        }}
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="menubar" style={{ right: menuOpen ? "0" : "-100%" }}>
        <div id="xburger" onClick={handleXburgerClick}>
          <div id="one"></div>
          <div id="two"></div>
        </div>
        <nav className="navBar" style={{ display: menuOpen ? "flex" : "none" }}>
          <ul>
            <li>
              <a href="#home" id="home-link">
                Home
              </a>
            </li>
            <li>
              <a href="#education">Eductaion</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </article>
  );
}
