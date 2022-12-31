import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Curriculums.module.scss";

import GetInTouch from "../Page-Sections/GetInTouch";
import ServiceData from "../Assets/Data/Programs.json";
import Skills from "../Page-Sections/Skills";
import Subjects from "../Page-Sections/Subjects";

const Curricumlums = () => {
  const [data, setData] = useState(ServiceData);
  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

      <Subjects />
      <Skills />
      <GetInTouch />
    </div>
  );
};

export default Curricumlums;
