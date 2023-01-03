import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Styles/Error.module.scss";

const Error = () => {
  return (
    <div className={Styles.Page}>
      {/* <PageHead /> */}
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>Error</div>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

      <h1>Error</h1>
    </div>
  );
};

export default Error;
