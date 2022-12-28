import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import HomeIcon from "@mui/icons-material/Home";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

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
    console.log("Working menu");
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

  return (
    <nav className={Styles.Navbar}>
      <div className={Styles.Image_Container}>
        <img
          src={`https://github.com/Dev-Rook/minimal-portfolio/blob/main/src/Assets/Images/Carbon%20Claws.png?raw=true`}
          alt=""
          className={Styles.Logo}
        />
      </div>

      <ul className={Styles.Navlink_Container}>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"/"}>
            {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
            Home
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"Curriculums"}>
            {/* <ListAltIcon sx={{ color: "White", fontSize: 25 }} /> */}
            Curriculums
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"Documents"}>
            {/* <DocumentScannerIcon sx={{ color: "White", fontSize: 25 }} /> */}
            Documents
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"News"}>
            {/* <NewspaperIcon sx={{ color: "White", fontSize: 25 }} /> */}
            News
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={""}>
            {/* <CreditScoreIcon sx={{ color: "White", fontSize: 25 }} /> */}
            Grades
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={"Contact"}>
            {/* <CallIcon sx={{ color: "White", fontSize: 25 }} /> */}
            Contact
          </Link>
        </li>
      </ul>

      <MenuIcon
        onClick={showMenu}
        className={Styles.MenuIcon}
        sx={{ color: "red", fontSize: 30 }}
      />

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
              {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"AboutPage"}
            >
              {/* <InfoIcon sx={{ color: "White", fontSize: 25 }} /> */}
              About
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"Curriculums"}
            >
              {/* <ListAltIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Curriculums
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"Documents"}
            >
              {/* <DocumentScannerIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Documents
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link onClick={doubleFunction} className={Styles.Navlink} to={"News"}>
              {/* <NewspaperIcon sx={{ color: "White", fontSize: 25 }} /> */}
              News
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link onClick={showMenu} className={Styles.Navlink} to={""}>
              {/* <CreditScoreIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Grades
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link onClick={showMenu} className={Styles.Navlink} to={"Contact"}>
              {/* <CallIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Contact
            </Link>
          </li>
        </ul>

        <div className={Styles.Weblink_Container}></div>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
