import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Updates.module.scss";

import PageHead from "../Components/Secondary/PageHead";
import UpdatesData from "../Data/Updates.json";
import useAxios from "../Hooks/useAxios";

const Updates = () => {
  TabTitle("HHS | Updates");
  // const [data, setData] = useState(UpdatesData);

  const url = `https://hhs-backen-76xny.ondigitalocean.app/events`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Page}>
      <PageHead Title={"Updates"} />

      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          {data?.map((value) => {
            return (
              <Link to={`/Update/` + value.id} key={value.id}>
                <div className={Styles.Blog_Card}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Category}>{value.category}</p>
                    {value?.image?.url ? (
                      <img
                        src={`https://hhs-backen-76xny.ondigitalocean.app${value?.image?.url}`}
                        alt=""
                        className={Styles.Image}
                      />
                    ) : null}
                  </div>
                  <div className={Styles.Information_Box}>
                    <p className={Styles.Text}>{value.title}</p>
                    <p className={Styles.Text}>{value.date}</p>
                    <p className={Styles.Text}>
                      {value.description.slice(0, 60)}....
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Updates;
