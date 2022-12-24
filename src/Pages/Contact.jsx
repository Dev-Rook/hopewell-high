import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Contact.module.scss";

import About from "../Page-Sections/About";
import Staff from "../Page-Sections/Staff";
import Map from "../Page-Sections/Map";

const Contact = () => {
  return (
    <div className={Styles.Page}>
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

      <div className={Styles.Form_Container}>
        <form action="" className={Styles.Form}>
          <fieldset className={Styles.Name__Eamil}>
            <input
              type="text"
              placeholder="Name"
              required
              className={Styles.Input}
            />
            <input
              type="Email"
              placeholder="Email"
              required
              className={Styles.Input}
            />
          </fieldset>
          <input
            type="Text"
            placeholder="Subject"
            required
            className={`${Styles.Input} ${Styles.Subject}`}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
            className={`${Styles.Input} ${Styles.Message}`}
          ></textarea>

          <button type={"submit"} className={Styles.Submit_Button}>
            Submit
          </button>
        </form>
      </div>

      {/* <Staff /> */}
      <Map />
    </div>
  );
};

export default Contact;
