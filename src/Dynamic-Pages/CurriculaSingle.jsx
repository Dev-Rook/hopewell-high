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
      <PageHead Image={""} />
      <div className={Styles.Course_Video_Section}>
        <div className={Styles.Section_Title_Container}>
          <p className={Styles.Question}></p>
          <p className={Styles.Section_Title}>Teacher's Presentation</p>
        </div>

        <div className={Styles.Video_Box}>
          <div className={Styles.Diffuser}></div>
          <a href={`https://`} target={"_blank"} rel={"noreferrer"}>
            <video src={""} className={Styles.Video}></video>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurriculaSingle;
