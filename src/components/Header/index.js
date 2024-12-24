import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../../Context/ThemeContext";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink to="/">
            <img src={logo} alt="logo-home navbar-logo" />
          </NavLink>
          <div className="menu-icon" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
          <ul
            className={isOpen ? "nav-menu active-cls" : "nav-menu"}
            onClick={toggleMenu}
          >
            <li className="nav-item" onClick={() => handleClick("home")}>
              <NavLink
                to="/"
                className={`nav-links ${
                  isDarkMode ? "LightMode-links" : "DarkMode-links"
                } `}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => handleClick("about")}>
              <NavLink
                to="/about"
                className={`nav-links ${
                  isDarkMode ? "LightMode-links" : "DarkMode-links"
                } `}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => handleClick("projects")}>
              <NavLink
                to="/Projects"
                className={`nav-links ${
                  isDarkMode ? "LightMode-links" : "DarkMode-links"
                } `}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => handleClick("learnWithMe")}>
              <NavLink
                to="/LearnWithme"
                className={`nav-links ${
                  isDarkMode ? "LightMode-links" : "DarkMode-links"
                } `}
              >
                LearnwithMe
              </NavLink>
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
