import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabTitle } from "../Utilities/TabTitle";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Page-Styles/Staff.module.scss";

import SearchIcon from "@mui/icons-material/Search";

import PageHead from "../Components/Main/PageHead";

const Staff = () => {
  TabTitle("HHS | Staff");
  const url = `https://hhs-backen-76xny.ondigitalocean.app/staffs`;
  const { data, error, loading } = useAxios(url);

  const [search, setSearch] = useState("");

  return (
    <div className={Styles.Page}>
      <PageHead Title={"Staff"} />

      <div className={Styles.Staff_Card_Section}>
        <div className={Styles.Input_Wrapper}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Staff"
            className={Styles.Nav_Input}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={Styles.Content_Container}>
          {data
            ?.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.firstName.toLowerCase().includes(search) || item.lastName.toLowerCase().includes(search);
            })
            .map((value) => {
              return (
                <Link to={"/Staffer/" + value.id} key={value.id}>
                  <div className={Styles.Card}> 
                    <div className={Styles.Image_Container}>
                      <p className={Styles.Name}>
                        {value.firstName} {value.lastName}
                      </p>
                      {value?.image?.url ? (
                        <img
                          src={`https://hhs-backen-76xny.ondigitalocean.app${value?.image?.url}`}
                          alt=""
                          className={Styles.Image}
                        />
                      ) : null}
                    </div>
                    <div className={Styles.Information_Container}>
                      <p className={Styles.Title}>{value.title}</p>
                      <p className={Styles.Bio}>{value.bio.slice(0, 120)}...</p>
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
