import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Section-Styles/Hero.module.scss";

const Video = "Dog Water";
const Image = "Dog Water";

const Hero = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Small_Text}>Forging Towards Excellence</p>
        <p className={Styles.Large_Text}>Hopewell High School</p>

        <button className={Styles.Project_Button}>
          <Link to={"About"}>About Us</Link>
        </button>
      </div>

      <div className={Styles.Diffuser}></div>
      <img src={Image} alt="" className={Styles.Image} />
      <video src={Video} className={Styles.Video}></video>
    </div>
  );
};

export default Hero;
