import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Documents.module.scss";

import PageHead from "../Components/Secondary/PageHead";

import DocumentsData from "../Data/Documents.json";

const Documents = () => {
  TabTitle("HHS | Documents");
  const [data, setData] = useState(DocumentsData);
  return (
    <div className={Styles.Page}>
        <PageHead Title={"Documents"} />

      <div className={Styles.Section}>
        <div className={Styles.Section_Title_Container}>
          <p className={Styles.Question}>- Downloadable Documents</p>
          <p className={Styles.Section_Title}>Click To Download</p>
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
    </div>
  );
};

export default Documents;
