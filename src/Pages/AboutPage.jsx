import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/About.module.scss";

import PageHead from "../Components/Main/PageHead";
import History from "../Page-Sections/History";
import Tour from "../Page-Sections/Tour";
import Staff from "../Page-Sections/Staff";
import GetInTouch from "../Page-Sections/GetInTouch";

const AboutPage = () => {
  return (
    <div className={Styles.Page}>
      {/* <PageHead /> */}
      <div className={Styles.PageHead}>
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
      <GetInTouch />
    </div>
  );
};

export default AboutPage;
