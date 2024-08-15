import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./index.css";
const EachProject = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { eachList } = props;
  const { name, imageUrl } = eachList;
  const style = {
    border: "1px solid #222", // Sets the border to 1px solid white

    backgroundColor: "white", // Sets the background color to white
  };
  const style1 = {
    backgroundColor: "#222", // Sets the background color to white
    color: "#fff", // Sets the text color to white
    border: "1px solid #fff", // Sets the border to 1px solid white
  };
  return (
    <li className="each-list-item" style={isDarkMode ? style : style1}>
      <img className="project-img" src={imageUrl} alt={name} />
      <p style={isDarkMode ? null : { color: "#fff" }}>{name}</p>
    </li>
  );
};

export default EachProject;
