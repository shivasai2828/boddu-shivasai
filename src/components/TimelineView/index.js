// Write your code here
import React, { useContext } from "react";
import { Chrono } from "react-chrono";
import { ThemeContext } from "../../Context/ThemeContext";
import ProjectTimelineCard from "../ProjectTimelineCard";
import CourseTimelineCard from "../CourseTimelineCard";

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from "./styledComponents.js";

const TimelineView = (props) => {
  const { timelineItemsList } = props;
  const { isDarkMode } = useContext(ThemeContext);
  const renderTimelineCard = (item) => {
    if (item.categoryId === "PROJECT") {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />;
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />;
  };

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading style={isDarkMode ? null : { color: "#fff" }}>
            MY JOURNEY OF <br />
            <CCBPHeading style={isDarkMode ? null : { color: "#fff" }}>
              CCBP 4.0
            </CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: "white",
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map((eachItem) => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  );
};

export default TimelineView;
