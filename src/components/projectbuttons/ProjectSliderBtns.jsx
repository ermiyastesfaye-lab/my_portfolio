import React from "react";
import { useSwiper } from "swiper/react";

const ProjectSliderBtns = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-btn">
      <button className="proj-btn" onClick={() => swiper.slidePrev()}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <button className="proj-btn" onClick={() => swiper.slideNext()}>
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};

export default ProjectSliderBtns;
