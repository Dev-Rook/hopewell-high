import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Curriculums.module.scss";

import PageHead from "../Components/Secondary/PageHead";
import Skills from "../Page-Sections/Skills";
import Subjects from "../Page-Sections/Subjects";

const Curricula = () => {
  TabTitle("HHS | Curriculums");
  return (
    <div className={Styles.Page}>
      <PageHead Title={"Curriculums"} />
      <Subjects />
      <Skills />
    </div>
  );
};

export default Curricula;
