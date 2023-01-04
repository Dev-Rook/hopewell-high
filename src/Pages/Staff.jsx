import React from "react";
import {TabTitle} from "../Utilities/TabTitle"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Styles/Staff.module.scss";

const Staff = () => {
  TabTitle("HHS | Staff");
  return (
    <div>
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>About Page</div>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>
    </div>
  );
};

export default Staff;
