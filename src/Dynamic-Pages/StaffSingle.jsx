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
      {/* <PageHead Title={"Staffer"} /> */}

      <div className={Styles.Staff_Info_Section}>
        <div className={Styles.Image_Container}>
          <img
            src={`https://hhs-backen-76xny.ondigitalocean.app${data?.image?.url}`}
            alt=""
            className={Styles.Image}
          />
        </div>

        <div className={Styles.About_Container}>
          <p className={Styles.Introduction}>
            About {data?.firstName} {data?.lastName}
          </p>
          <p className={Styles.Text}>{data?.title}</p>
          <p className={Styles.Text}>{data?.gender}</p>
          <p className={Styles.Text}>{data?.bio}</p>
        </div>

        <div className={Styles.Qualifications_Section}>
          <p className={Styles.Section_Title}>Qualifications & Awards</p>

          <div className={Styles.Qualifications_Container}>
            <a href={`https://`} target={"_blank"} rel={"noreferrer"}>
              <div className={Styles.Item}>
                <img src="" alt="Icon" className={Styles.Item_Icon} />
                <p className={Styles.Label}>Label</p>
              </div>
            </a>

            <a href={`https://`} target={"_blank"} rel={"noreferrer"}>
              <div className={Styles.Item}>
                <img src="" alt="Icon" className={Styles.Item_Icon} />
                <p className={Styles.Label}>Label</p>
              </div>
            </a>

            <a href={`https://`} target={"_blank"} rel={"noreferrer"}>
              <div className={Styles.Item}>
                <img src="" alt="Icon" className={Styles.Item_Icon} />
                <p className={Styles.Label}>Label</p>
              </div>
            </a>

            <a href={`https://`} target={"_blank"} rel={"noreferrer"}>
              <div className={Styles.Item}>
                <img src="" alt="Icon" className={Styles.Item_Icon} />
                <p className={Styles.Label}>Label</p>
              </div>
            </a>

            <a href={`https://`} target={"_blank"} rel={"noreferrer"}>
              <div className={Styles.Item}>
                <img src="" alt="Icon" className={Styles.Item_Icon} />
                <p className={Styles.Label}>Label</p>
              </div>
            </a>

            <a href={`https://`} target={"_blank"} rel={"noreferrer"}>
              <div className={Styles.Item}>
                <img src="" alt="Icon" className={Styles.Item_Icon} />
                <p className={Styles.Label}>Label</p>
              </div>
            </a>

            <a href={`https://`} target={"_blank"} rel={"noreferrer"}>
              <div className={Styles.Item}>
                <img src="" alt="Icon" className={Styles.Item_Icon} />
                <p className={Styles.Label}>Label</p>
              </div>
            </a>

            {/* {data?.map((value) => {
            return (
              <div className={Styles.Item}>
                <img src="" alt="Icon" className={Styles.Item_Icon} />.
                <p className={Styles.Label}>{value}</p>
              </div>
            );
          })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffSingle;
