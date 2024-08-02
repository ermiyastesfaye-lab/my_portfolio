import React from "react";
import Home from "../components/home/Home";
import Education from "../components/education/Education";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Portfolio_website = () => {
  return (
    <>
      <main>
        <Home />
        <Education />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio_website;
