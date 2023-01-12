import React from "react";
import Styles from "../Styles/Page-Styles/About.module.scss";

import {TabTitle} from "../Utilities/TabTitle"

import History from "../Page-Sections/History";
import Tour from "../Page-Sections/Tour";
import Staff from "../Page-Sections/Staff";

const AboutPage = () => {
  TabTitle("HHS | About");
  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>About Page</div>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

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
            <img
              src={
                "https://github.com/Dev-Rook/dailys-contruction/blob/master/src/Assets/Images/V.jpg?raw=true"
              }
              alt=""
              className={Styles.Image}
            />
          </div>
        </div>
      </div>

      <History />
      <Tour />
      <Staff />
    </div>
  );
};

export default AboutPage;
