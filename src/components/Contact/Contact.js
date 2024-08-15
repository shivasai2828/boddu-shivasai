/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Contact.css";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className="contact-container"
      style={isDarkMode ? null : { backgroundColor: "#262626" }}
    >
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span
              style={
                isDarkMode
                  ? { backgroundColor: "#bcccdc", color: "#102a42" }
                  : { backgroundColor: "#121212", color: "#fff" }
              }
            >
              +91 8500548260
            </span>
          </div>
          <div className="info-item">
            <i className="fas fa-link"></i>
            <span
              style={
                isDarkMode
                  ? { backgroundColor: "#bcccdc", color: "#102a42" }
                  : { backgroundColor: "#121212", color: "#fff" }
              }
            >
              <a
                href="https://www.linkedin.com/in/shivasai-boddu"
                target="_blank"
                rel="noreferrer"
              >
                shivasaiwebdev
              </a>
            </span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span
              style={
                isDarkMode
                  ? { backgroundColor: "#bcccdc", color: "#102a42" }
                  : { backgroundColor: "#121212", color: "#fff" }
              }
            >
              boddushivasai@gmail.com
            </span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span
              style={
                isDarkMode
                  ? { backgroundColor: "#bcccdc", color: "#102a42" }
                  : { backgroundColor: "#121212", color: "#fff" }
              }
            >
              Hyderabad, Telangana, India
            </span>
          </div>
          <div className="social-icons">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shivasai-boddu-732bb6224/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.github.com/shivasai2828"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <textarea placeholder="Enter Your Message" required></textarea>
            <button
              type="submit"
              // onClick={() => {
              //   alert("thank you for your interest");
              // }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
