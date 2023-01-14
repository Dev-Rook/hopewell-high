import React from "react";
import Styles from "../../Styles/Component-Styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Link_Section}>
        Created By{" "}
        <a
        className={Styles.Link}
          href={`https://rookdeveloper.vercel.app`}
          rel={"norefferer"}
          target={"_blanl"}
        >
          Developer Rook
        </a>{" "}
        © 2023
      </div>
    </div>
  );
};

export default Footer;
