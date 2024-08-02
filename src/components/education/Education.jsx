import React from "react";
import "./education.css";

const Education = () => {
  return (
    <article className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">
        <section className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2019-2021</div>
          <div className="timeline-content">
            <h3>High School</h3>
            <p>
              I completed my high school education at Vision Academy, where I
              developed a strong foundation in various subjects. During my time
              there, My involvement in extracurricular activities enhanced my
              leadership and teamwork skills. My experiences there significantly
              shaped my academic and personal growth.
            </p>
          </div>
        </section>
        <section className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022-2026</div>
          <div className="timeline-content">
            <h3>University</h3>
            <p>
              I am currently pursuing a degree in Software Engineering at Addis
              Ababa University.I am actively involved in various projects and
              collaborative group work, which has enhanced my practical skills
              and understanding of software engineering principles.
              Additionally, I work on personal projects further sharpening my
              problem-solving abilities and technical expertise.
            </p>
          </div>
        </section>
        <section className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>Internship</h3>
            <p>
              During my internship at Prodigy Info Tech, I worked individually
              on web development projects, which involved designing and
              developing web applications. My tasks included coding responsive
              user interfaces, integrating APIs, and optimizing website
              performance. I utilized technologies such as HTML, CSS,
              JavaScript, and various frameworks such as react.js to build
              dynamic and user-friendly web solutions.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Education;
