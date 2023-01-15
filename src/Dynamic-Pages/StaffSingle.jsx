import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Dynamic-Page-Styles/StaffSingle.module.scss";

const StaffSingle = () => {
  TabTitle("HSS | Staffer ");
  const { id } = useParams();

  const url = `https://hhs-backen-76xny.ondigitalocean.app/staffs/${id}`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Page}>
      <div className={Styles.Information_Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.Image_Container}>
            {/* <img
              src={`https://hhs-backen-76xny.ondigitalocean.app${data.image.formats.thumbnail.url}`}
              alt=""
              className={Styles.Image}
            /> */}
          </div>

          <div className={Styles.Teacher_Information}>
            <p className={Styles.Description}>
              {data?.firstName} {data?.lastName}
            </p>
            <p className={Styles.Description}>{data?.title}</p>
            <p className={Styles.Description}>{data?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffSingle;
