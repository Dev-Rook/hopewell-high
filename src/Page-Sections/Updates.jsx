import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Page-Section-Styles/Updates.module.scss";

import UpdatesData from "../Data/Updates.json";

const Blog = () => {
  const url = `https://hhs-backen-76xny.ondigitalocean.app/events`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- Updates</p>
        <p className={Styles.Section_Title}>Latest School Updates</p>
      </div>
      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <Link to={"/Update/" + value.id}>
                <div className={Styles.Update_Card} key={value.id}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Category}>{value?.category}</p>
                    {data?.image?.url ? (
                      <img
                        src={`https://hhs-backen-76xny.ondigitalocean.app${data?.image?.url}`}
                        alt=""
                        className={Styles.Image}
                      />
                    ) : (
                      <p>No Image</p>
                    )}
                  </div>
                  <div className={Styles.Information_Box}>
                    <p className={Styles.Tite}>{value?.title}</p>
                    <p className={Styles.Date}>{value?.date}</p>
                    <p className={Styles.Description}>
                      {value?.description.slice(0, 100)}..
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <Link className={Styles.Link} to={"Updates"}>
        <button className={Styles.View_More_Button}>View All</button>
      </Link>
    </div>
  );
};

export default Blog;
