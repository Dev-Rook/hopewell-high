import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/Sponsors.module.scss";

import SponsorData from "../Data/Sponsors.json";

const Sponsors = () => {
  const [data, setData] = useState(SponsorData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- Sponsors</p>
        <p className={Styles.Section_Title}>Our Sponsors & Trusted Partners</p>
      </div>

      <div className={Styles.Sponsor_Grid}>
        {data?.map((value) => {
          return (
            <div className={Styles.Card} key={value.id}>
              <img src={value.Icon} alt="Icon" className={Styles.Icon} />
              <p className={Styles.Title}>{value.Title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors;
