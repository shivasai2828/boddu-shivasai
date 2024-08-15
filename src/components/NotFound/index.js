import React, { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../Context/ThemeContext";
import Header from "../Header";
import Footer from "../Footer";
const ErrorPage = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <div className={`container ${isDarkMode ? "dark" : "light"}`}>
        <h1 className="title">Oops!</h1>
        <h2 className="subtitle">404 - PAGE NOT FOUND</h2>

        <button className="button" onClick={() => (window.location.href = "/")}>
          GO TO HOMEPAGE
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
