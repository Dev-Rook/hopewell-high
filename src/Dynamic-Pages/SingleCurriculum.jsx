import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Dynamic-Page-Styles/SingleCurriculum.module.scss";

import GetInTouch from "../Page-Sections/GetInTouch";

const SingleCurriculum = () => {
  const { id } = useParams();
  const { data, error, loading } = useAxios({
    url: `${id}`,
  });

  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}></div>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

      <GetInTouch />
    </div>
  );
};

export default SingleCurriculum;
