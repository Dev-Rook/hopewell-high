import React, { useState } from "react";
import Styles from "../Styles/Page-Styles/Landing.module.scss";

import Hero from "../Page-Sections/Hero";
import Programs from "../Page-Sections/Programs";
import About from "../Page-Sections/About";
import Blog from "../Page-Sections/Blog";
import Apply from "../Page-Sections/Apply";
import Staff from "../Page-Sections/Staff";
import Map from "../Page-Sections/Map";

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <Programs />
      <About />
      <Blog />
      <Staff />
      <Apply />
      <Map />
    </div>
  )
}

export default Landing