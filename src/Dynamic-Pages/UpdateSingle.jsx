import React from "react";
import { useParams } from "react-router-dom";
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/Secondary/PageHead";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Dynamic-Page-Styles/UpdateSingle.module.scss";

const UpdateSingle = () => {
  const { id } = useParams();

  const url = `https://hhs-backen-76xny.ondigitalocean.app/events/${id}`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Page}>
      {/* <PageHead Title={""} /> */}

      <div className={Styles.Update_Info_Section}>
        <div className={Styles.Image_Container}>
          <img
            src={`https://hhs-backen-76xny.ondigitalocean.app${data?.image.url}`}
            alt=""
            className={Styles.Image}
          />
        </div>

        <div className={Styles.Details_Container}>
          <p className={Styles.Text}>{data?.title}</p>
          <p className={Styles.Text}>{data?.category}</p>
          <p className={Styles.Text}>{data?.date}</p>
          <p className={Styles.Text}>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateSingle;
