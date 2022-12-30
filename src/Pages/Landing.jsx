import React, { useState } from "react";
import Styles from "../Styles/Page-Styles/Landing.module.scss";

import Hero from "../Page-Sections/Hero";
import Offer from "../Page-Sections/Offer";
import Programs from "../Page-Sections/Programs";
import About from "../Page-Sections/About";
import Blog from "../Page-Sections/Blog";
import GetInTouch from "../Page-Sections/GetInTouch";
import Staff from "../Page-Sections/Staff";
import Map from "../Page-Sections/Map";
import Sponsors from "../Page-Sections/Sponsors";

import MediumTest from "../Page-Sections/MediumTest";

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <About />
      <Offer />
      {/* <Programs /> */}
      <Blog />
      <MediumTest />
      <Staff />
      <Sponsors />
      <GetInTouch />
      <Map />
    </div>
  )
}

export default Landing