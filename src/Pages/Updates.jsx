import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Updates.module.scss";

import PageHead from "../Components/Secondary/PageHead";
import UpdatesData from "../Data/Updates.json";
import useAxios from "../Hooks/useAxios";

const Updates = () => {
  TabTitle("HHS | Updates");
  // const [Data, setData] = useState(UpdatesData);

  const url = `https://hhs-backen-76xny.ondigitalocean.app/blogs`;
  const { data, error, loading } = useAxios(url);
  return (
    <div className={Styles.Page}>
      <PageHead Title={"Updates"} />

      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          {data?.map((value) => {
            return (
              <div className={Styles.Blog_Card} key={value.id}>
                <div className={Styles.Image_Container}>
                  <p className={Styles.Category}>{value.category}</p>
                  <img src={`https://hhs-backen-76xny.ondigitalocean.app${value.image.formats.medium.url}`} alt="" className={Styles.Image} />
                </div>
                <div className={Styles.Information_Box}>
                  <p className={Styles.Tite}>{value.title}</p>
                  <p className={Styles.Date}>{value.date}</p>
                  <p className={Styles.Description}>
                    {value.description}....
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Updates;
