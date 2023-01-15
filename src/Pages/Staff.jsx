import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabTitle } from "../Utilities/TabTitle";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Page-Styles/Staff.module.scss";

import StaffData from "../Data/Staff.json";

import PageHead from "../Components/Secondary/PageHead";

const Staff = () => {
  TabTitle("HHS | Staff");
  const url = `https://hhs-backen-76xny.ondigitalocean.app/staffs`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Page}>
      <PageHead Title={"Staff"} />

      <div className={Styles.Staff_Card_Section}>
        <div className={Styles.Content_Container}>
          {data?.map((value) => {
            return (
              <Link to={"/Staff/" + value.id} key={value.id}>
                <div className={Styles.Card}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Name}>
                      {value.firstName} {value.lastName}
                    </p>
                    <img
                      src={`https://hhs-backen-76xny.ondigitalocean.app${value.image.formats.thumbnail.url}`}
                      alt=""
                      className={Styles.Image}
                    />
                  </div>
                  <div className={Styles.Information_Container}>
                    <p className={Styles.Title}>{value.title}</p>
                    <p className={Styles.Bio}>{value.bio}</p>
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

export default Staff;
