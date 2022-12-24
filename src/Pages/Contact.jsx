import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Contact.module.scss";

import About from  "../Page-Sections/About"
import Staff from "../Page-Sections/Staff"
import Map from "../Page-Sections/Map"

const Contact = () => {
  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

      <About />
      <Staff />
      <Map />
    </div>
  );
};

export default Contact;
