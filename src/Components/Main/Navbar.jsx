import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import ListGroup from "react-bootstrap/ListGroup";

import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

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
  const [isOpen, setOpen] = useState(false);

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

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const doubleFunction = () => {
    showMenu();
    scrollUp();
    handleClick();
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
        <Breadcrumbs aria-label="breadcrumb">
          <li className={Styles.NavItem}>
            <Link onClick={scrollUp} className={Styles.Navlink} to={"/"}>
              {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={scrollUp}
              className={Styles.Navlink}
              to={"AboutPage"}
            >
              {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
              About
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={scrollUp}
              className={Styles.Navlink}
              to={"Curriculums"}
            >
              {/* <ListAltIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Curriculums
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link
              onClick={scrollUp}
              className={Styles.Navlink}
              to={"Documents"}
            >
              {/* <DocumentScannerIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Documents
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link onClick={scrollUp} className={Styles.Navlink} to={"News"}>
              {/* <NewspaperIcon sx={{ color: "White", fontSize: 25 }} /> */}
              News
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link onClick={scrollUp} className={Styles.Navlink} to={""}>
              {/* <CreditScoreIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Grades
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link onClick={scrollUp} className={Styles.Navlink} to={"Contact"}>
              {/* <CallIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Contact
            </Link>
          </li>
        </Breadcrumbs>
      </ul>

      <MenuIcon
        onClick={showMenu}
        className={Styles.MenuIcon}
        sx={{ color: "red", fontSize: 40 }}
      />

      {/* <Hamburger
        onClick={showMenu}
        className={Styles.MenuIcon}
        toggled={isOpen}
        toggle={setOpen}
        size={40}
        direction="right"
        label="Show menu"
      /> */}

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <div className={Styles.Mobile_Menu_Header}>
          HHS
          <img src={``} alt="" className={Styles.Header_Image} />
        </div>
        {/* <div className={Styles.Navlink_Container}>
        </div> */}

        <ListGroup className={Styles.ListGroup}>
          <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
            {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
            <ListGroup.Item>Home</ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"AboutPage"}
          >
            {/* <InfoIcon sx={{ color: "White", fontSize: 25 }} /> */}
            <ListGroup.Item>About</ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Curriculums"}
          >
            {/* <ListAltIcon sx={{ color: "White", fontSize: 25 }} /> */}
            <ListGroup.Item>Curriculums</ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Documents"}
          >
            {/* <DocumentScannerIcon sx={{ color: "White", fontSize: 25 }} /> */}
            <ListGroup.Item>Documents</ListGroup.Item>
          </Link>

          <Link onClick={doubleFunction} className={Styles.Navlink} to={"News"}>
            {/* <NewspaperIcon sx={{ color: "White", fontSize: 25 }} /> */}
            <ListGroup.Item>Articles</ListGroup.Item>
          </Link>

          <a href={`Dog Water`} target={"_blank"} rel={"noreferrer"}>
            <ListGroup.Item>Grades</ListGroup.Item>
          </a>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Contact"}
          >
            {/* <CallIcon sx={{ color: "White", fontSize: 25 }} /> */}
            <ListGroup.Item>Contact</ListGroup.Item>
          </Link>
        </ListGroup>

        <div className={Styles.Social_Icon_Bar}>
          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <InstagramIcon
                className={Styles.SocialIcon}
                sx={{ color: "Black", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>Instagram</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <FacebookIcon
                className={Styles.SocialIcon}
                sx={{ color: "Black", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>FaceBook</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <TwitterIcon
                className={Styles.SocialIcon}
                sx={{ color: "Black", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>Twitter</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <WhatsAppIcon
                className={Styles.SocialIcon}
                sx={{ color: "Black", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>WhatsApp</p>
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
