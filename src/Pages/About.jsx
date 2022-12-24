import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/About.module.scss";

import PageHead from "../Components/Main/PageHead";
import AboutSection from "../Page-Sections/About";
import Staff from "../Page-Sections/Staff";
import Apply from "../Page-Sections/Apply";

const About = () => {
  return (
    <div className={Styles.Page}>
      {/* <PageHead /> */}
      <div className={Styles.PageHead}>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>
      <AboutSection />
      <Staff />
      <Apply />
    </div>
  );
};

export default About;
