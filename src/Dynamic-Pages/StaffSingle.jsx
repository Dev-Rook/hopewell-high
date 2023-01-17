import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/Secondary/PageHead";
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
      <PageHead Title={"Staffer"} />

      <div className={Styles.Staff_Info_Section}>
        <div className={Styles.Image_Container}>
          {/* <img src={data?.image.formats.small.url} alt="" className={Styles.Image} /> */}
        </div>

        <div className={Styles.About_Container}>
          <p className={Styles.Introduction}>
            {data?.firstName} {data?.lastName}
          </p>

          <p className={Styles.Text}>
            {data?.title} 
          </p>

          <p className={Styles.Text}>
            {data?.gender} 
          </p>

          <p className={Styles.Text}>
            {data?.bio} 
          </p>
        </div>

        <div className={Styles.Qualifications_Container}></div>
      </div>
    </div>
  );
};

export default StaffSingle;
