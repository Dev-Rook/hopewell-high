import React, { useState } from "react";
import Styles from "../Styles/Page-Styles/Home.module.scss";

import {TabTitle} from "../Utilities/TabTitle"

import Hero from "../Page-Sections/Hero";
import Offer from "../Page-Sections/Offer";
import Introduction from "../Page-Sections/Introduction";
import Tour from "../Page-Sections/Tour";
import Updates from "../Page-Sections/Updates";
import Staff from "../Page-Sections/Staff";
import Sponsors from "../Page-Sections/Sponsors";


const Home = () => { 
  TabTitle("HHS | Home");
  return (
    <div className={Styles.Page}>
      <Hero />
      <Introduction />
      <Offer />
      <Tour />
      <Updates />
      <Staff />
      <Sponsors />
    </div>
  )
}

export default Home