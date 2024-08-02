import { useState } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectSliderBtns from "../projectbuttons/ProjectSliderBtns";
import "./portfolio.css";
import projects from "./portfolio_data";

const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <article id="portfolio">
      <h2 className="heading">Projects</h2>
      <div className="proj">
        <div className="proj-content">
          <div className="proj-num">{project.num}</div>
          <h2 className="proj-category">{project.category} project</h2>
          <p className="proj-desc">{project.description}</p>
          <ul className="proj-stack">
            {project.stack.map((item, index) => {
              return (
                <li key={index}>
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              );
            })}
          </ul>
          <hr />
          <div className="proj-links">
            <button className="link-btn">
              <a href={project.live} target="_blank">
                <i class="bi bi-arrow-up-right"></i>
              </a>
            </button>
            <button className="link-btn">
              <a href={project.github} target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="proj-img">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} style={{ marginBottom: "100px" }}>
                  <img src={project.image} alt="" />
                </SwiperSlide>
              );
            })}
            <ProjectSliderBtns />
          </Swiper>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
