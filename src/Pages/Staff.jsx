import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Staff.module.scss";

import StaffData from "../Assets/Data/Staff.json";

import GetInTouch from "../Page-Sections/GetInTouch";

const Staff = () => {
  TabTitle("HHS | Staff");
  const [data, setData] = useState(StaffData);

  return (
    <div className={Styles.Page}>
      <div className={Styles.PageHead}>
        <div className={Styles.Page_Title}>Staff</div>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Heade_Image} />
      </div>

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
                    {/* <p className={Styles.Gender}>{value.Gender}</p> */}
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
