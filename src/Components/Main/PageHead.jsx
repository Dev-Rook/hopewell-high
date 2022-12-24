import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Component-Styles/PageHead.module.scss";

const PageHead = () => {
  return (
    <div className={Styles.PageHead}>
      <div className={Styles.Diffuser}></div>
      <img src={``} alt="" className={Styles.Heade_Image} />
    </div>
  );
};

export default PageHead;
