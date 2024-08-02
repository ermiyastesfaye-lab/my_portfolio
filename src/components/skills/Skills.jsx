import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <article id="skills" className="skills">
      <h2 className="heading">Skills</h2>
      <div className="skill-main">
        <section className="skill-left">
          <h3>Technical Skills</h3>
          <div className="skill-bar">
            <div className="info">
              <p className="skill-detail">UI/UX Design(Pen and paper, Figma)</p>
              <p>92%</p>
            </div>
            <div className="bar">
              <span className="figma"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p className="skill-detail">
                Front-End(Html, CSS, JavaScript, Tailwind css, Bootstrap css,
                React.js)
              </p>
              <p>88%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p className="skill-detail">
                Programming Languages(Python, Java, C)
              </p>
              <p>85%</p>
            </div>
            <div className="bar">
              <span className="javascript"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p className="skill-detail">Mobile-App(Dart, Flutter)</p>
              <p>87%</p>
            </div>
            <div className="bar">
              <span className="flutter"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p className="skill-detail">
                Back-End(Node.js, Express.js NestJs) and Databases(MySQL,
                MongoDB)
              </p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="nest"></span>
            </div>
          </div>
        </section>
        <section className="skill-right">
          <h3>Proffesional Skills</h3>
          <div className="professional">
            <div className="box">
              <div className="circle" style={{ "--progress": 90 }}>
                <div className="percentage">90%</div>
              </div>
              <div className="text">
                <p className="label">Team Work</p>
              </div>
            </div>
            <div className="box">
              <div className="circle" style={{ "--progress": 75 }}>
                <big className="percentage">90%</big>
              </div>
              <div className="text">
                <p className="label">Communication</p>
              </div>
            </div>
            <div className="box">
              <div className="circle" style={{ "--progress": 70 }}>
                <big className="percentage">85%</big>
              </div>
              <div className="text">
                <p className="label">Creativity</p>
              </div>
            </div>
            <div className="box">
              <div className="circle" style={{ "--progress": 50 }}>
                <big className="percentage">95%</big>
              </div>
              <div className="text">
                <p className="label">Time Management</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Skills;
