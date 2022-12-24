import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/About.module.scss";

const Indroduction = (scrollUp) => {
  
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <div className={Styles.About_Container}>
          <p className={Styles.Question}>- Who We Are</p>
          <p className={Styles.Brand}>Hopewell Highschool</p>
          <p className={Styles.Description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            cupiditate, <br /> repellendus quas optio porro labore, facere dolor
            nemo non, totam saepe aliquam <br /> nulla accusamus velit animi
            placeat! Maxime, necessitatibus dolorem.
          </p>

          <Link to={"AboutPage"}>
            <button onClick={scrollUp} className={Styles.Read_More_Button}>Read More</button>
          </Link>
        </div>
        <div className={Styles.Image_Container}>
          <img
            src={
              "https://github.com/Dev-Rook/dailys-contruction/blob/master/src/Assets/Images/V.jpg?raw=true"
            }
            alt=""
            className={Styles.Image}
          />
        </div>
      </div>
    </div>
  );
};

export default Indroduction;
