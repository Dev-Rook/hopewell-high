import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// // Material UI Accordion Imports Start
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // Material UI Accordion Imports End

import { Spin as Hamburger } from "hamburger-react";

const NavVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  },
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  // const [status, setStatus] = useState("close");

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const doubleFunction = () => {
    showMenu();
    scrollUp();
  };

  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  return (
    <nav className={Styles.Navbar}>
      <nav className={Styles.Navbar}>
        <div className={Styles.Brand_Container}>
          <p className={Styles.Brand}></p>
        </div>

        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"/"}>
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"AboutPage"}>
              About
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"Programs"}>
              Programs
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"Documents"}>
              Docuements
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"Articles"}>
              News
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={""}>
              Grades
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"Contact"}>
              Contact
            </Link>
          </li>

          <MenuIcon
            onClick={showMenu}
            className={Styles.MenuIcon}
            sx={{ color: "#7ab7d6", fontSize: 30 }}
          />

          {/* <Hamburger
            toggled={menu}
            toggle={setMenu}
            className={MenuIcon}
            size={30}
            direction="right"
            duration={0.3}
            easing="ease-in"
            color="white"          
          /> */}
        </ul>

        {/* Mobile Menu Start  */}

        <div
          // onClick={showMenu}
          className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}
        >
          <div className={Styles.Content_Container}>
            <div className={Styles.Header}>
              <div className={Styles.Menu_Left_Side}>
                <div className={Styles.Logo_Container}>
                  <img
                    src={`https://github.com/Dev-Rook/rookdev/blob/master/src/Assests/Images/Logo.png?raw=true`}
                    className={Styles.Logo}
                    alt=""
                  />
                </div>

                <h3 className={Styles.Brand}>Hopewell High</h3>
              </div>

              <CloseIcon
                sx={{ fontSize: 25 }}
                onClick={showMenu}
                className={Styles.Close_Icon}
              />
            </div>

            <ul className={Styles.Mobile_Navlink_Container}>
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"/"}
              >
                <li className={Styles.NavItem}>Home</li>
              </Link>
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"AboutPage"}
              >
                <li className={Styles.NavItem}>About</li>
              </Link>
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"Curriculums"}
              >
                <li className={Styles.NavItem}>Programs</li>
              </Link>
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"Documents"}
              >
                <li className={Styles.NavItem}>Documents</li>
              </Link>

              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"Articles"}
              >
                <li className={Styles.NavItem}>News</li>
              </Link>

              <Link onClick={doubleFunction} className={Styles.Navlink} to={""}>
                <li className={Styles.NavItem}>Grades</li>
              </Link>
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"Contact"}
              >
                <li className={Styles.NavItem}>Contact</li>
              </Link>
            </ul>

            <div className={Styles.Menu_Separater}></div>

            <div className={Styles.Weblink_Container}>

              <div className={Styles.Weblink}>
                <TwitterIcon sx={{ color: "Blue", fontSize: 30 }} />
                <p className={Styles.Web_Title}>Twitter</p>
              </div>
              
            </div>
          </div>
        </div>
        {/* Mobile Menu End */}
      </nav>
    </nav>
  );
};

export default Navbar;
