import React, { useContext } from "react";
import "./index.css";
import Loader from "react-loader-spinner";
import Footer from "../Footer";
import Header from "../Header";
import { ThemeContext } from "../../Context/ThemeContext";
const LearnWithMe = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <div
        className="course-bg"
        style={
          isDarkMode
            ? { backgroundColor: "#fff", color: "#bbb" }
            : { backgroundColor: "#00171a", color: "#fff" }
        }
      >
        <div className="learn-with-me-section">
          <h1 style={isDarkMode ? null : { color: "#fff" }}>
            Coming Soon &#128526;
          </h1>
          <p style={isDarkMode ? { color: "#222" } : { color: "#fff" }}>
            In just a few days, I’ll be uploading exciting new content to my
            YouTube channel! Stay tuned for a deep dive into WebDev
          </p>
          <Loader type="ThreeDots" color="#0b69ff" height="60" width="60" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LearnWithMe;
