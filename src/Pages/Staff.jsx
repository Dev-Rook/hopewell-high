import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Staff.module.scss";

import StaffData from "../Data/Staff.json";

import PageHead from "../Components/Secondary/PageHead";


const Staff = () => {
  TabTitle("HHS | Staff");
  const [data, setData] = useState(StaffData);

  return (
    <div className={Styles.Page}>
        <PageHead Title={"Staff"} />

      <div className={Styles.Staff_Card_Section}>
        <div className={Styles.Content_Container}>
          {data?.map((value) => {
            return (
              <Link to={""} key={value.id}>
                <div className={Styles.Card}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Name}>
                      {value.First_Name} {value.Last_Name}
                    </p>
                    <img src="" alt="" className={Styles.Image} />
                  </div>
                  <div className={Styles.Information_Container}>
                    <p className={Styles.Title}>{value.Title}</p>
                    <p className={Styles.Bio}>{value.Bio}</p>
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
