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

      <About />

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
