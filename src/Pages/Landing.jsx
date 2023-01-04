import React, { useState } from "react";
import Styles from "../Styles/Page-Styles/Landing.module.scss";

import {TabTitle} from "../Utilities/TabTitle"

import Hero from "../Page-Sections/Hero";
import Offer from "../Page-Sections/Offer";
import About from "../Page-Sections/About";
import Tour from "../Page-Sections/Tour";
import Blog from "../Page-Sections/Blog";
import GetInTouch from "../Page-Sections/GetInTouch";
import Staff from "../Page-Sections/Staff";
import Map from "../Page-Sections/Map";
import Sponsors from "../Page-Sections/Sponsors";


const Landing = () => { 
  TabTitle("HHS | Home");
  return (
    <div className={Styles.Page}>
      <Hero />
      <About />
      <Offer />
      <Tour />
      <Blog />
      <Staff />
      <Sponsors />
      <GetInTouch />
      <Map />
    </div>
  )
}

export default Landing