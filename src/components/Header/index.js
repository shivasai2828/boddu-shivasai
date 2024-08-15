import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../../Context/ThemeContext";
import "./index.css";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "../../assets/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  console.log(isDarkMode);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(activeItem);
  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className={` ${isDarkMode ? "LightMode" : "DarkMode"}`}>
      <nav className={`navbar ${isDarkMode ? "LightMode" : "DarkMode"}`}>
        <div
          className={`navbar-container ${
            isDarkMode ? "LightMode-links" : "DarkMode-links"
          } `}
        >
          <Link to="/">
            <img src={logo} alt="logo-home navbar-logo" />
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
          <ul
            className={isOpen ? "nav-menu active" : "nav-menu"}
            onClick={toggleMenu}
          >
            <li className="nav-item" onClick={() => handleClick("home")}>
              <Link
                to="/"
                className={`nav-links ${
                  isDarkMode ? "LightMode-links" : "DarkMode-links"
                } `}
              >
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={() => handleClick("about")}>
              <Link
                to="/about"
                className={`nav-links ${
                  isDarkMode ? "LightMode-links" : "DarkMode-links"
                } `}
              >
                About
              </Link>
            </li>
            <li className="nav-item" onClick={() => handleClick("projects")}>
              <Link
                to="/Projects"
                className={`nav-links ${
                  isDarkMode ? "LightMode-links" : "DarkMode-links"
                } `}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item" onClick={() => handleClick("learnWithMe")}>
              <Link
                to="/LearnWithme"
                className={`nav-links ${
                  isDarkMode ? "LightMode-links" : "DarkMode-links"
                } `}
              >
                LearnwithMe
              </Link>
            </li>
            <li className="nav-item nav-links" onClick={toggleTheme}>
              <button className="theme-Btn">
                {isDarkMode ? (
                  <MdDarkMode className="icon-theme dark-icon" />
                ) : (
                  <MdOutlineLightMode className="icon-theme light-icons" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
