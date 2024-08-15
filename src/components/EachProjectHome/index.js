import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./index.css";
const EachProjectHome = (props) => {
  const { eachprojectDetails } = props;

  const { ProjectName, GitHubUrl, LiveLink, ImageUrl, TechnologiesUsed } =
    eachprojectDetails;
  return (
    <li className="each-project-list-item" key={eachprojectDetails.id}>
      <img className="each-project-home-img" src={ImageUrl} alt="projectImg" />
      <div className="each-project-content">
        <h4 className="each-project-name">{ProjectName}</h4>
        <ul className="tech-names-ul">
          {TechnologiesUsed.map((eachTech) => (
            <li className="names-of-techs" key={eachTech.id}>
              {eachTech}
            </li>
          ))}
        </ul>
        <div className="each-projects-links">
          <a
            className="links tech-names"
            href={LiveLink}
            target="_blank"
            rel="noreferrer"
          >
            LIVE <FaExternalLinkAlt />
          </a>
          <a
            className="links tech-names"
            href={LiveLink}
            target="_blank"
            rel="noreferrer"
          >
            VIEW
          </a>
          <a
            className="links tech-names"
            href={GitHubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </li>
  );
};

export default EachProjectHome;
