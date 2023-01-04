import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Sponsors.module.scss";

import SponsorData from "../Assets/Data/Sponsors.json";

const Sponsors = () => {
  const [data, setData] = useState(SponsorData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- Sponsors</p>
        <p className={Styles.Section_Title}>Our Sponsors & Trusted Partners</p>
      </div>
      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <a href={value.Link} target={"_blank"} rel={"noreferrer"}  key={value.id}>
                <div className={Styles.Card}>
                  <img src={value.Image} alt="" className={Styles.Image} />
                  <p className={Styles.Title}>{value.Title}</p>
                  <p className={Styles.Description}>{value.Description}</p>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Sponsors;
