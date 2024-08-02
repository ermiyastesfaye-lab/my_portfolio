import React, { useEffect, useState } from "react";
import "./home.css";
import { Navigation_bar } from "../header/Navigation_bar";
import ColorItem from "./ColorItem";
import my_img from "../../assets/my-img.png";

const Home = () => {
  const colors = ["#10e956", "gold", "#6200ee"];

  const [state, setState] = useState(false);

  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    setTheme(currentColor);
  });

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--PRIMARY", color);
  };
  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("background-color");
    setTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };
  return (
    <article id="home" className="home">
      <Navigation_bar />
      <div className="about_me">
        <div className="about_me_desc">
          <div className="intro">
            <h1>
              Hi, I'm <span className="special">Ermiyas Tesfaye</span>
            </h1>
            <h2 className="text-animation">
              <span className="special"></span>
            </h2>
          </div>
          <p className="detail">
            This website is a showcase of my work, demonstrating my expertise in
            developing dynamic, user-friendly web and mobile applications with a
            focus on intuitive and engaging design. Explore my work and feel
            free to get in touch!
          </p>
          <div className="info_buttons">
            <a
              className="info-btns"
              href="./ErmiyasTesfayeResume_2.pdf"
              download
            >
              <p>
                Download CV <i className="bi bi-download"></i>
              </p>
            </a>
            <a className="info-btns" href="#contact">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="my_img">
          <img src={my_img} alt="Me" />
        </div>
      </div>
      <div className="social_media">
        <button className="btn">
          <a href="https://www.instagram.com/ermi695/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </button>
        <button className="btn">
          <a
            href="https://www.linkedin.com/in/ermiyas-tesfaye-a96190253"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </button>
        <button className="btn">
          <a href="https://github.com/ermiyastesfaye-lab" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </button>
        <button className="btn">
          <a href="https://t.me/black6t" target="_blank">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </button>
      </div>
      <div className={`color-switcher ${state && "color-switcher-open"}`}>
        <button onClick={() => setState(!state)}>
          <i className="fas fa-cog fa-spin"></i>
        </button>
        <h1 className="headingColor">Select color</h1>
        <div className="color-list">
          {colors.map((color, idx) => (
            <ColorItem key={idx} setColor={setColor} color={color} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Home;
