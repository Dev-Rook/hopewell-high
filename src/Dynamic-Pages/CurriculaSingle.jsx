import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { useNavigate } from "react-router-dom";
import Styles from "../Styles/Dynamic-Page-Styles/Curriculum.module.scss";

import PageHead from "../Components/Secondary/PageHead";

import CourseTimeline from "../Dynamic-Page-Sections/CourseTimeline";

import Staff from "../Data/Staff.json";
import Tour from "../Data/Tour.json";

const CurriculaSingle = () => {
  const { id } = useNavigate();
  TabTitle(`${id}`);

  const [data, setData] = useState(Staff, Tour);

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
              {data[0]?.First_Name} {data[0]?.Last_Name}
            </p>
            <p className={Styles.Description}>
              {data[0]?.Title}
            </p>
            <p className={Styles.Description}>
              {data[0]?.Bio}
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.Information_Section}>
        <div className={Styles.Content_Container}>
          <h1 className={Styles.Title}>Course Title</h1>

          <p className={Styles.Description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            pariatur sunt neque molestiae alias nemo reprehenderit culpa
            incidunt quidem laboriosam!
          </p>
        </div>
      </div>

      <CourseTimeline />

      <div className={Styles.Information_Section}>
        <div className={Styles.Content_Container}>
          <h1 className={Styles.Title}>Useful Information</h1>

          <p className={Styles.Description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            pariatur sunt neque molestiae alias nemo reprehenderit culpa
            incidunt quidem laboriosam!
          </p>
        </div>
      </div>

      <div className={Styles.Course_Video_Section}>
        <div className={Styles.Section_Title_Container}>
          <p className={Styles.Question}></p>
          <p className={Styles.Section_Title}>Teacher's Presentation</p>
        </div>

        <div className={Styles.Content_Container}>
          {data &&
            data.map((value) => {
              return (
                <a
                  href={value.Link}
                  rel={"noreferrer"}
                  target={"_blank"}
                  key={value.id}
                >
                  <div className={Styles.Card}>
                    <div className={Styles.Preview_Container}>
                      <img
                        src={value.Preview}
                        alt=""
                        className={Styles.Preview}
                      />
                      <p className={Styles.Title}>{value.Title}</p>
                    </div>

                    <div className={Styles.Description_Container}>
                      <p className={Styles.Description}>{value.Description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CurriculaSingle;
