import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Programs.module.scss";

import SubjectData from "../Assets/Data/Subjects.json";

const Subjects = () => {
  const [data, setData] = useState(SubjectData);
  const [visible, setVisible] = useState(6);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title}>
        <p className={Styles.Question}>- Subjects</p>
        <p className={Styles.Brand}>Primining Scholors For Higher Academia</p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <Link to={"/Curriculum/" + value.id}>
                <div className={Styles.Card} key={value.id}>
                  <img src={value.Icon} alt="" className={Styles.Icon} />
                  <p className={Styles.Title}>{value.Title}</p>
                  <p className={Styles.Description}>{value.Description}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Subjects;
