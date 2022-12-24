import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Apply.module.scss";

const Apply = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Text_Box}>
        <p className={Styles.Title}>Interested In Becoming A Scholar?</p>

        <p className={Styles.Text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nemo
          delectus hic non recusandae officiis <br /> magni at cumque, est saepe
          dolorem, fugit expedita culpa laboriosam ipsa.
        </p>

        <Link to={"Contact"}>
          <button className={Styles.Contact_Button}>Contact US</button>
        </Link>
      </div>
    </div>
  );
};

export default Apply;
