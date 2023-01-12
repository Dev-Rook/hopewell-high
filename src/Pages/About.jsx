import React from "react";
import Styles from "../Styles/Page-Styles/About.module.scss";

import { TabTitle } from "../Utilities/TabTitle";

import History from "../Page-Sections/History";
import Tour from "../Page-Sections/Tour";
import Staff from "../Page-Sections/Staff";
import PageHead from "../Components/Secondary/PageHead";

import Crest from "../Assets/Images/Crest.png";

const About = () => {
  TabTitle("HHS | About");
  return (
    <div className={Styles.Page}>
      <PageHead Title={"About"} />

      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}>- Who We Are</p>
            <p className={Styles.Brand}>Hopewell Highschool</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              cupiditate, <br /> repellendus quas optio porro labore, facere
              dolor nemo non, totam saepe aliquam <br /> nulla accusamus velit
              animi placeat! Maxime, necessitatibus dolorem.
            </p>
          </div>
          <div className={Styles.Image_Container}>
            <img src={Crest} alt="" className={Styles.Image} />
          </div>
        </div>
      </div>

      <History />
      <Tour />
      <Staff />
    </div>
  );
};

export default About;
