import React, { useRef } from "react";
import { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = {};
    if (!formData.firstName.trim()) {
      validationError.firstName = "first name required";
    }
    if (!formData.lastName.trim()) {
      validationError.lastName = "last name required";
    }
    if (!formData.email.trim()) {
      validationError.email = "email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationError.email = "email is invalid";
    }
    if (!formData.phoneNumber.trim()) {
      validationError.phoneNumber = "phone number required";
    }

    if (!formData.message.trim()) {
      validationError.message = "message required";
    }
    setError(validationError);

    if (Object.keys(validationError).length == 0) {
      emailjs
        .sendForm("service_lhj11en", "template_mhgbtyh", form.current, {
          publicKey: "mu1s0LjVC1d07DBBY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      alert("Form Submitted Successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "Select a service",
        message: "",
      });
    }
  };

  return (
    <article id="contact">
      <div className="contact">
        <div className="your-info">
          <h2 className="contact-heading">Let's work together</h2>
          <p className="contact-desc">
            Interested in working together? Fill out the form below and let’s
            get started. I’m excited to collaborate with you!
          </p>
          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="personal-info">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <p className="error">{error.firstName && error.firstName}</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <p className="error">{error.lastName && error.lastName}</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <p className="error">{error.email && error.email}</p>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <p className="error">
                  {error.phoneNumber && error.phoneNumber}
                </p>
              </div>
            </div>
            <div className="business-info">
              <select
                name="service"
                className="contact-category"
                onChange={handleChange}
                value={formData.service}
              >
                <option selected className="select-service">
                  Select a service
                </option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile-App Development">
                  Mobile-App Development
                </option>
              </select>
              <div>
                <textarea
                  className="contact-msg"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Message"
                ></textarea>
                <p className="error">{error.message && error.message}</p>
              </div>
            </div>
            <div className="contact-btn">
              <button type="submit">Send message</button>
            </div>
          </form>
        </div>
        <div className="my-info">
          <section className="info-display">
            <div className="info-icon">
              <i class="bi bi-telephone-fill"></i>
            </div>
            <div className="info-content">
              <p className="info-label">Phone</p>
              <p>(+251) 900 648 503</p>
            </div>
          </section>
          <section className="info-display">
            <div className="info-icon">
              <i class="bi bi-envelope-fill"></i>
            </div>
            <div className="info-content">
              <p className="info-label">Email</p>
              <p>ermiyastesfaye16@gmail.com</p>
            </div>
          </section>
          <section className="info-display">
            <div className="info-icon">
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <div className="info-content">
              <p className="info-label">Address</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Contact;
