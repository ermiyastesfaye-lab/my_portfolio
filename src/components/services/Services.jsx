import React from "react";
import "./services.css";

const Services = () => {
  return (
    <article id="services">
      <h2 className="heading">Services</h2>
      <div className="all-service">
        <section className="service">
          <div className="title">
            <i className="fa-solid fa-laptop title-icon"></i>
            <h3 className="title-name">UI/UX Design</h3>
          </div>
          <p className="service-content">
            As a UI/UX Designer, I focus on creating user-centric designs using
            <span> Figma</span> that enhance the overall experience of digital
            products. I blend functionality with aesthetics to design intuitive
            and engaging interfaces. My approach involves understanding user
            needs, conducting research, and applying best practices in design to
            ensure a seamless and enjoyable user journey.
          </p>
        </section>
        <section className="service">
          <div className="title">
            <i className="fa-brands fa-react title-icon"></i>
            <h3 className="title-name">Front-End Dev</h3>
          </div>
          <p className="service-content">
            As a Front-End Developer, I bring designs to life by implementing
            clean, efficient, and responsive code using{" "}
            <span>Front-End technologies</span>. I work closely with designers
            and back-end developers to ensure a cohesive and optimized web
            experience, emphasizing performance, accessibility, and
            cross-browser compatibility.
          </p>
        </section>
        <section className="service">
          <div className="title">
            <i class="bi bi-phone title-icon"></i>
            <h3 className="title-name">Mobile-App Dev</h3>
          </div>
          <p className="service-content">
            As a Mobile Developer, I create innovative and high-performance
            applications using <span>Flutter</span> for mobile platforms,
            including iOS and Android. My work involves designing intuitive user
            interfaces, optimizing performance, and ensuring a seamless user
            experience on a variety of devices.
          </p>
        </section>
        <section className="service">
          <div className="title">
            <i className="fa-brands fa-node-js title-icon"></i>
            <h3 className="title-name">Back-End Dev</h3>
          </div>
          <p className="service-content">
            As a Back-End Developer specializing in <span>Node.js</span>, I
            focus on creating efficient and scalable server-side applications
            using JavaScript. With Node.js, I build robust APIs, manage
            databases, and handle server-side logic to ensure smooth and secure
            data transactions. I leverage Node.js's asynchronous, event-driven
            architecture to build high-performance applications that can handle
            real-time data and large volumes of requests.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Services;
