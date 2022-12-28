import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Curriculums.module.scss";

import GetInTouch from "../Page-Sections/GetInTouch";
import ServiceData from "../Assets/Data/Programs.json";

const Curricumlums = () => {
  const [data, setData] = useState(ServiceData);
  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

      <div className={Styles.Section}>
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

      <GetInTouch />
    </div>
  );
};

export default Curricumlums;
