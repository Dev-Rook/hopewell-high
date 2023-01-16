import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Page-Section-Styles/Curricula.module.scss";

import SubjectData from "../Data/Subjects.json";

const Subjects = () => {
  const url = `https://hhs-backen-76xny.ondigitalocean.app/curricula`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title}>
        <p className={Styles.Question}>- Subjects</p>
        <p className={Styles.Brand}>Priming Scholors For Higher Academia</p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <Link to={"/Curricula/" + value.id} key={value.id}>
                <div className={Styles.Card}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Category}>{value?.Title}</p>
                    <img src={value.Image} alt="" className={Styles.Image} />
                  </div>
                  <div className={Styles.Information_Box}>
                    <p className={Styles.Teacher}>
                      <span className={Styles.Teacher_Label}>Teacher/s</span>:{" "}
                      {value?.tutor[0].firstName} {value?.tutor[0].lastName}
                    </p>
                    <p className={Styles.Date}>
                      <span className={Styles.Date_Label}>Date</span>:{" "}
                      {value?.start_date} {value?.end_date}
                    </p>
                    <p className={Styles.Description}>
                      {value?.description}.....
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Subjects;
