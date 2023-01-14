import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/History.module.scss";

import CourseTimelineAlternate from "../Components/Secondary/CourseTimelineAlternate";
import CourseTimelineRight from "../Components/Secondary/CourseTimelineRight";

const CourseTimeline = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Section_Title}>Course Timeline</p>
      </div>

      <div className={Styles.Timeline_Alternate}>
        <CourseTimelineAlternate />
      </div>

      <div className={Styles.Timeline_Right}>
        <CourseTimelineRight />
      </div>
    </div>
  );
};

export default CourseTimeline;