import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Programs.module.scss";

import ConstructionIcon from "@mui/icons-material/Construction";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import HardwareIcon from "@mui/icons-material/Hardware";
import FoundationIcon from "@mui/icons-material/Foundation";

import SkillsData from "../Assets/Data/Skills.json";

const Skills = () => {
  const [data, setData] = useState(SkillsData);
  const [visible, setVisible] = useState(6);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title}>
        <p className={Styles.Question}>- Trade / Skills</p>
        <p className={Styles.Brand}>Practical Trades For Practical Industries</p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <div className={Styles.Card} key={value.id}>
                <img src={value.Icon} alt="" className={Styles.Icon} />
                <p className={Styles.Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
