import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/GetInTouch.module.scss";

// Material UI Icons Import Start
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// Material UI Icons Import End

const GetInTouch = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Text_Box}>
        <p className={Styles.Title}>Get In Touch?</p>

        <p className={Styles.Text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nemo
          delectus hic non recusandae officiis magni at cumque, est saepe
          dolorem, fugit expedita culpa laboriosam ipsa.
        </p>

        {/* <Link to={"/Contact"}>
          <button className={Styles.Contact_Button}>Contact US</button>
        </Link> */}
      </div>

      <div className={Styles.Social_Icon_Bar}>
        <div className={Styles.Social_Container}>
          <a href={`#`} target={"_blank"} rel={"noreferrer"}>
            <InstagramIcon
              className={Styles.SocialIcon}
              sx={{ color: "Black", fontSize: 30 }}
            />
            <p className={Styles.Social_Title}>Instagram</p>
          </a>
        </div>

        <div className={Styles.Social_Container}>
          <a href={`#`} target={"_blank"} rel={"noreferrer"}>
            <FacebookIcon
              className={Styles.SocialIcon}
              sx={{ color: "Black", fontSize: 30 }}
            />
            <p className={Styles.Social_Title}>FaceBook</p>
          </a>
        </div>

        <div className={Styles.Social_Container}>
          <a href={`#`} target={"_blank"} rel={"noreferrer"}>
            <TwitterIcon
              className={Styles.SocialIcon}
              sx={{ color: "Black", fontSize: 30 }}
            />
            <p className={Styles.Social_Title}>Twitter</p>
          </a>
        </div>

        <div className={Styles.Social_Container}>
          <a href={`#`} target={"_blank"} rel={"noreferrer"}>
            <WhatsAppIcon
              className={Styles.SocialIcon}
              sx={{ color: "Black", fontSize: 30 }}
            />
            <p className={Styles.Social_Title}>WhatsApp</p>
          </a>
        </div>
      </div>

      {/* <div className={Styles.Form_Container}>
        <form action="" className={Styles.Form}>
          <fieldset className={Styles.Name__Eamil}>
            <input
              type="text"
              placeholder="Name"
              required
              className={Styles.Input}
            />
            <input
              type="Email"
              placeholder="Email"
              required
              className={Styles.Input}
            />
          </fieldset>
          <input
            type="Text"
            placeholder="Subject"
            required
            className={`${Styles.Input} ${Styles.Subject}`}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
            className={`${Styles.Input} ${Styles.Message}`}
          ></textarea>

          <button type={"submit"} className={Styles.Submit_Button}>
            Submit
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default GetInTouch;
