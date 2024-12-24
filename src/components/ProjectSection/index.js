import React, { useState, useEffect, useContext } from "react";
import Loader from "react-loader-spinner";
import EachProject from "../EachProject";
import EachProjectHome from "../EachProjectHome";
import Header from "../Header";
import Footer from "../Footer";
import Contact from "../Contact/Contact";
import "./index.css";
import { ThemeContext } from "../../Context/ThemeContext";
const categoriesList = [
  { id: "ALL", displayText: "All" },
  { id: "STATIC", displayText: "Static" },
  { id: "RESPONSIVE", displayText: "Responsive" },
  { id: "DYNAMIC", displayText: "Dynamic" },
  { id: "REACT", displayText: "React" },
];

const apiStatusList = {
  initial: "INITIAL",
  inprogress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

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

const ProjectSection = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusList.initial);
  const [dataList, setDataList] = useState([]);
  const [tabId, setTabId] = useState("ALL");
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    const getData = async () => {
      setApiStatus(apiStatusList.inprogress);
      const api = `https://apis.ccbp.in/ps/projects?category=${tabId}`;
      const response = await fetch(api);

      if (response.ok) {
        const data = await response.json();
        const updateData = data.projects.map((eachList) => ({
          id: eachList.id,
          name: eachList.name,
          imageUrl: eachList.image_url,
        }));
        setDataList(updateData);
        setApiStatus(apiStatusList.success);
      } else {
        setApiStatus(apiStatusList.failure);
      }
    };
    getData();
  }, [tabId]);

  const setTab = (event) => {
    setTabId(event.target.value);
  };

  const renderSuccessView = () => {
    return (
      <ul className="success-view">
        {dataList.map((eachList) => (
          <EachProject key={eachList.id} eachList={eachList} />
        ))}
      </ul>
    );
  };

  const renderLoader = () => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  );

  const failureView = () => {
    return (
      <div className="failure-view-box">
        <img
          className="failure-img"
          src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
          alt="failure view"
        />
        <h1>Oops! Something   Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for.</p>
        <button type="button" className="btn">
          Retry
        </button>
      </div>
    );
  };

  const getFinalView = () => {
    switch (apiStatus) {
      case apiStatusList.inprogress:
        return renderLoader();
      case apiStatusList.success:
        return renderSuccessView();
      case apiStatusList.failure:
        return failureView();
      default:
        return null;
    }
  };

  const moreProjects = () => {
    return (
      <div
        className="more-prg-bg"
        style={isDarkMode ? null : { backgroundColor: "#262626" }}
      >
        <h1
          className="more-pr-title"
          style={isDarkMode ? null : { color: "#fff" }}
        >
          More <span>Fav</span> Projects
        </h1>
        <ul className="home-projects-section">
          {ProjectsDeatails.map((eachprojectDetails) => (
            <EachProjectHome
              key={eachprojectDetails.id}
              eachprojectDetails={eachprojectDetails}
            />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div
        style={isDarkMode ? null : { backgroundColor: "#00171a", color: "fff" }}
      >
        <div className="bg-main">
          <h1
            className="project-p-title"
            style={isDarkMode ? null : { color: "#fff" }}
          >
            projects
          </h1>
          <p
            className="project-p-description"
            style={isDarkMode ? null : { color: "#dae2ec" }}
          >
            Filter By Technology
          </p>
          <select
            className="select-input"
            onChange={setTab}
            style={
              isDarkMode ? null : { backgroundColor: "#102a42", color: "#fff" }
            }
          >
            {categoriesList.map((eachList) => (
              <option
                className="options"
                key={eachList.id}
                value={eachList.id}
                style={isDarkMode ? null : { color: "fff" }}
              >
                {eachList.displayText}
              </option>
            ))}
          </select>
          {getFinalView()}
        </div>
      </div>

      {moreProjects()}
      <Contact />
      <Footer />
    </>
  );
};

export default ProjectSection;
