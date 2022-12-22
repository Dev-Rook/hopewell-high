import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Programs.module.scss";

import ConstructionIcon from "@mui/icons-material/Construction";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import HardwareIcon from "@mui/icons-material/Hardware";
import FoundationIcon from "@mui/icons-material/Foundation";

import ServiceData from "../Assets/Data/Programs.json";

const Programs = () => {
  const [data, setData] = useState(ServiceData);
  const [visible, setVisible] = useState(6);

  // const morePrograms = () => {
  //   setVisible((prev) => prev + 3)

  //   if (setVisible == 8) {
  //       window.getSelection(View_More_Button) {
  //         d
  //       }
  //   }
  // }

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title}>
        <p className={Styles.Question}>- What We Offer</p>
        <p className={Styles.Brand}>Providing The Best Accademeics</p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.slice(0, visible).map((value) => {
            return (
              <div className={Styles.Card} key={value.id}>
                <img src={value.Icon} alt="" className={Styles.Icon} />
                <p className={Styles.Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p>
              </div>
            );
          })}
      </div>

      <Link to={"Programs"}>
        <button className={Styles.View_More_Button}>View All</button>
      </Link>
    </div>
  );
};

export default Programs;
