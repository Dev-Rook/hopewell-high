import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material UI Accordion Imports Start
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Material UI Accordion Imports End

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

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <nav className={Styles.Navbar}>
      <nav className={Styles.Navbar}>
        <div className={Styles.Brand_Container}>
          <p className={Styles.Brand}>※</p>
        </div>

        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"/"}>
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"About"}>
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
            sx={{ color: "white", fontSize: 30 }}
          />
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
                to={"About"}
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
              <li className={Styles.Menu_NavItem}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  className={Styles.Accordion}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    {/* <Typography
                    sx={{ width: "33%", flexShrink: 0, color: "#319795" }}
                  >
                    Discord -
                  </Typography> */}
                    <Typography
                      className={Styles.Accordion_Title}
                      sx={{ color: "white" }}
                    >
                      Code Runners - &nbsp;
                      <a
                        className={Styles.Discord_Link}
                        target={"_blank"}
                        rel={"noreferrer"}
                        href="https://discord.gg/ce7mtCbgmG"
                      >
                        {/* <img
                        src={require("../../../Assets/Icons/Discord-Logo.png")}
                        alt=""
                        className={Styles.Discord_Icon}
                      /> */}
                      </a>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={Styles.Code_Runners_Description}>
                      Code Runners is a server that mainly focusses on Web
                      Development. However there are categories for other forms
                      of coding/programing.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </li>
            </ul>

            <div className={Styles.Menu_Separater}></div>

            {/* Weblink Container Start */}
            <ul className={Styles.Weblink_Container}>
              <h3 className={Styles.Title}>On The Web -</h3>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                onClick={showMenu}
                href="https://www.linkedin.com/in/dev-rook/"
                className={Styles.Weblink}
              >
                <li className={Styles.Weblink_Item}>
                  <LinkedInIcon
                    sx={{ fontSize: 25 }}
                    className={Styles.Weblink_Icon}
                  />
                  Daniel Brown
                </li>
              </a>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                onClick={showMenu}
                href="https://github.com/Dev-Rook"
                className={Styles.Weblink}
              >
                <li className={Styles.Weblink_Item}>
                  <GitHubIcon
                    sx={{ fontSize: 25 }}
                    className={Styles.Weblink_Icon}
                  />
                  Dev-Rook
                </li>
              </a>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                onClick={showMenu}
                href="https://twitter.com/Dev_Rook"
                className={Styles.Weblink}
              >
                <li className={Styles.Weblink_Item}>
                  <TwitterIcon
                    sx={{ fontSize: 25 }}
                    className={Styles.Weblink_Icon}
                  />
                  Dev_Rook
                </li>
              </a>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                onClick={showMenu}
                href="https://rxresu.me/dev.rook121/developer-resume"
                className={Styles.Weblink}
              >
                <li className={Styles.Weblink_Item}>
                  <InsertLinkIcon
                    sx={{ fontSize: 25 }}
                    className={Styles.Weblink_Icon}
                  />
                  Developer Resume
                </li>
              </a>
            </ul>
            {/* Weblink Container End */}
          </div>
        </div>
        {/* Mobile Menu End */}
      </nav>
    </nav>
  );
};

export default Navbar;
