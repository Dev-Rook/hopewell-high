import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Staff.module.scss";

import PageHead from "../Components/Secondary/PageHead";

const Apply = () => {
  TabTitle("HHS | Apply");
  return (
    <div className={Styles.Page}>
      <PageHead Title={"Apply"} />
    </div>
  );
};

export default Apply;
