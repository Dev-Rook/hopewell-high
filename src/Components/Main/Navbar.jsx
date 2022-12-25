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
  const [status, setStatus] = useState("close");

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

            {/* Weblink Container Start */}
            <ul className={Styles.Weblink_Container}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className={Styles.Accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Mission Statement
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={Styles.Code_Runners_Description}>
                    To create and maintain an environment conducive to the
                    intellectual, moral, spiritual, social and cultural
                    development of learners: Thus equipping them with skills,
                    values and attitudes necessary for them to function at their
                    fullest potential in society.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                className={Styles.Accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    On The Web
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul className={Styles.Weblink_Container}>
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
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                className={Styles.Accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Advanced settings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
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
