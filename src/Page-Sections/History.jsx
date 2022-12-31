import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/History.module.scss";

// MUI Imports Start
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// MUI Imports End

const History = () => {
  const [position, setPosition] = useState("alternate");

  const viewportWidth = () => {
    if (window.innerWidth === 480) {
      setPosition("right");
      console.log("Working")
    } else {
      setPosition("alternate")
    }
  };

  useEffect(() => {
    viewportWidth();
  }, []);

  
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- School History</p>
        <p className={Styles.Section_Title}>Our Timeline</p>
      </div>

      <Timeline className={Styles.Timeline} position={position}>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <p className={Styles.Year}>1990</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <p className={Styles.Year}>1990</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <p className={Styles.Year}>1990</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <p className={Styles.Year}>1990</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default History;
