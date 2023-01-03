import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Articles.module.scss";

import GetInTouch from "../Page-Sections/GetInTouch";
import Blog from "../Page-Sections/Blog";

import BlogData from "../Assets/Data/Blog.json";

const Articles = () => {
  const [data, setData] = useState(BlogData);
  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>Articles</div>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          {data &&
            data.map((value) => {
              return (
                <div className={Styles.Blog_Card} key={value.id}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Category}>{value.Category}</p>
                    <img src={value.Image} alt="" className={Styles.Image} />
                  </div>
                  <div className={Styles.Information_Box}>
                    <p className={Styles.Tite}>{value.Title}</p>
                    <p className={Styles.Date}>{value.Date}</p>
                    <p className={Styles.Description}>{value.Description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* <Blog /> */}
      <GetInTouch />
    </div>
  );
};

export default Articles;
