import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Documents.module.scss";

import DocumentsData from "../Assets/Data/Documents.json";

import GetInTouch from "../Page-Sections/GetInTouch";

const Documents = () => {
  const [data, setData] = useState(DocumentsData);
  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

      <div className={Styles.Section}>
        <div className={Styles.Section_Title_Container}>
          <p className={Styles.Question}>- Document</p>
          <p className={Styles.Section_Title}>Downloadable Documents</p>
        </div>
        <div className={Styles.Content_Container}>
          {data &&
            data.map((value) => {
              return (
                <a
                  href={value.Link}
                  target={"_blank"}
                  rel={"noreferrer"}
                  key={value.id}
                >
                  <div className={Styles.Card}>
                    <img src={value.Icon} alt="" className={Styles.Icon} />
                    <p className={Styles.Title}>{value.Title}</p>
                    <p className={Styles.Description}>{value.Description}</p>
                  </div>
                </a>
              );
            })}
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default Documents;
