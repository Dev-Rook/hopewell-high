import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Dynamic-Page-Styles/Curriculum.module.scss";

import PageHead from "../Components/Secondary/PageHead";

import Staff from "../Data/Staff.json";
import Tour from "../Data/Tour.json";

const CurriculaSingle = () => {
  const { id } = useNavigate();
  TabTitle(`${id}`);

  const url = `https://hhs-backen-76xny.ondigitalocean.app/curricula/${id}`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Page}>
      <PageHead Title={"Curriculum Title"} />

      <div className={Styles.Information_Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.Image_Container}>
            <img src={``} alt="Teacher" className={Styles.Image} />
          </div>

          <div className={Styles.Teacher_Information}>
            <p className={Styles.Description}>
              {data?.tutor.firstName} {data?.tutor.lastName}
            </p>
            <p className={Styles.Description}>{data?.tutor.title}</p>
            <p className={Styles.Description}>{data?.bio}</p>
          </div>
        </div>
      </div>

      <div className={Styles.Information_Section}>
        <div className={Styles.Content_Container}>
          <h1 className={Styles.Title}>{}</h1>

          <p className={Styles.Description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            pariatur sunt neque molestiae alias nemo reprehenderit culpa
            incidunt quidem laboriosam!
          </p>
        </div>
      </div>

      {/* <div className={Styles.Information_Section}>
        <div className={Styles.Content_Container}>
          <h1 className={Styles.Title}>Useful Information</h1>

          <p className={Styles.Description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            pariatur sunt neque molestiae alias nemo reprehenderit culpa
            incidunt quidem laboriosam!
          </p>
        </div>
      </div> */}

      <div className={Styles.Course_Video_Section}>
        <div className={Styles.Section_Title_Container}>
          <p className={Styles.Question}></p>
          <p className={Styles.Section_Title}>Teacher's Presentation</p>
        </div>

        <div className={Styles.Video_Box}>
          <a href={``} target={"_blank"} rel={"noreforrer"}>
            <video src={""} className={Styles.Video}></video>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurriculaSingle;
