import React, { useState } from "react";
import {TabTitle} from "../Utilities/TabTitle"
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Contact.module.scss";

import About from "../Page-Sections/About";
import Staff from "../Page-Sections/Staff";
import Map from "../Page-Sections/Map";
import GetInTouch from "../Page-Sections/GetInTouch"


const Contact = () => {
  TabTitle("HHS| Contact");
  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>Contact</div>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

      {/* <div className={Styles.Section}>
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
      </div> */}

      

      {/* <Staff /> */}
      <GetInTouch />
      <Map />
    </div>
  );
};

export default Contact;
