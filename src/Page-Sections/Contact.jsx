import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Imported Styles/SocialButtons.scss";
import Styles from "../Styles/Page-Section-Styles/Contact.module.scss";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <h1
          className={Styles.Title}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Get In Touch?
        </h1>

        <p
          className={Styles.Description}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea
          consequuntur sunt, quo maiores dolore magnam consequatur corporis
          deleniti enim?
        </p>

        <div className="center">
          <div id="social-test">
            <ul className="social">
              <li>
                {/* <LinkedInIcon sx={{ fontSize: "40" }} /> */}
              </li>
              <li>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-github" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-pied-piper" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
