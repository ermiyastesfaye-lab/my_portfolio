import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social_media footer-icons">
        <button className="btn">
          <a href="https://www.instagram.com/ermi695/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </button>
        <button className="btn">
          <a
            href="https://www.linkedin.com/in/ermiyas-tesfaye-a96190253"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </button>
        <button className="btn">
          <a href="https://github.com/ermiyastesfaye-lab" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </button>
        <button className="btn">
          <a href="https://t.me/black6t" target="_blank">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </button>
      </div>
      <div className="footer-pages">
        <a href="#education">Education</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="copy-right">
        <span className="c-symbol">&copy;</span>Ermiyas Tesfaye | All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
