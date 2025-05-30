import React, { useState, useContext } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import Footer from "../Footer";
import "./index.css";
import Header from "../Header";
import EachProjectHome from "../EachProjectHome";
import { ThemeContext } from "../../Context/ThemeContext";
import { useNavigate } from "react-router-dom";
const ProjectsDeatails = [
  {
    id: 0,
    ProjectName: "Doctor Appointment",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1735022724/Screenshot_217_kqjkvi.png",
    LiveLink: "https://doctor-appointment-zeta.vercel.app/",
    GitHubUrl: "https://github.com/shivasai2828",
    TechnologiesUsed: ["React-js", "Node-js", "Express-js", "Mongo-db"],
    VIEW: "https://doctor-appointment-zeta.vercel.app/",
  },
  {
    id: 1,
    ProjectName: "JOBBY APP",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/JOBBY-APP-IMG_peos85.png",
    LiveLink: "https://shivasaipr22.ccbp.tech/login",
    GitHubUrl: "https://github.com/shivasai2828",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },

  {
    id: 2,
    ProjectName: "NXT TRENDS",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/NXT-TRENDS-IMG_jqibix.png",
    LiveLink: "https://shivasaipr22.ccbp.tech/login",
    GitHubUrl: "https://github.com/shivasai2828",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
  {
    id: 3,
    ProjectName: "NXT WATCH",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/NXT-WACTH-IMG_dylayf.png",
    LiveLink: "https://shivasaipr22.ccbp.tech/login",
    GitHubUrl: "https://github.com/shivasai2828/Nxt-Watch-Mini-Project.git",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
  {
    id: 4,
    ProjectName: "Rock-Paper-ScissorsRock-Paper-Scissor",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/ROCK-PAPER_p70f69.png",
    LiveLink: "https://shivasaipr22.ccbp.tech/login",
    GitHubUrl: "https://github.com/shivasai2828/Rock-Paper-Scissors.git",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
  {
    id: 5,
    ProjectName: "Wikipedia Search Aplication",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/WIKI-IMG_cbi5e3.png",
    LiveLink: "https://shivasaiwikipr1.ccbp.tech/",
    GitHubUrl: "https://github.com/shivasai2828/",
    TechnologiesUsed: ["HTML5", "CSS3", "JS"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
  {
    id: 6,
    ProjectName: "Todo Application",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/TODO-APP-IMG_dterc8.png",
    LiveLink: "https://shivasailudo.ccbp.tech/",
    GitHubUrl: "https://github.com/shivasai2828/",
    TechnologiesUsed: ["HTML5", "CSS3", "JS"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
];

const Home = () => {
  const [projectsData, setProjectsData] = useState(ProjectsDeatails);
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div id="home" className={` ${isDarkMode ? "light-home" : "dark-home"}`}>
        <div className="home-wrapper">
          <div className="home-row-sider">
            <article className="home-content">
              <h1
                className="home-name"
                style={isDarkMode ? null : { color: "#fff" }}
              >
                My Name is{" "}
                <span style={{ color: "#52d1da", fontWeight: "normal" }}>
                  Shiva sai
                </span>
              </h1>
              <p
                className="home-role"
                style={isDarkMode ? null : { color: "#bcccdc" }}
              >
                Mern stack Developer
              </p>

              <ul>
                <li>
                  <a
                    className="links"
                    href="https://linkedin.com/in/shivasai-boddu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="social-icons insta" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/shivasai2828"
                    target="_blank"
                    className="links"
                    rel="noreferrer"
                  >
                    <ImGithub className="social-icons" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kanna__0728/?igsh=cTh4OWp3c2tlaXhq"
                    target="_blank"
                    className="links"
                    rel="noreferrer"
                  >
                    <GrInstagram className="social-icons" />
                  </a>
                </li>
              </ul>

              <button
                onClick={() => navigate("/About")}
                className="btn"
                style={{ width: "50%" }}
              >
                More About Me
              </button>
            </article>
            <article>
              <img
                className="user-img"
                src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user-img"
              />
            </article>
          </div>
        </div>
      </div>
      <div
        className="home-projects"
        style={isDarkMode ? null : { backgroundColor: "#00171a" }}
      >
        <h1
          className="projects-title"
          style={isDarkMode ? null : { color: "#fff" }}
        >
          My Projects
        </h1>
        <ul className="home-projects-section">
          {projectsData.map((eachprojectDetails) => (
            <EachProjectHome
              key={eachprojectDetails.id}
              eachprojectDetails={eachprojectDetails}
            />
          ))}
        </ul>
        <a href="/Projects">
          <button className="btn prg-btn">ALL MY PROJECTS</button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Home;
