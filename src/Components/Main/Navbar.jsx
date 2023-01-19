import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import ListGroup from "react-bootstrap/ListGroup";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FolderIcon from "@mui/icons-material/Folder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArticleIcon from "@mui/icons-material/Article";
import GradeIcon from "@mui/icons-material/Grade";
import CallIcon from "@mui/icons-material/Call";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Hamburger from "hamburger-react";

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
      <div className={Styles.Left_Side}>
        <div className={Styles.Image_Container}>
          <img
            src={`https://github.com/Dev-Rook/minimal-portfolio/blob/main/src/Assets/Images/Carbon%20Claws.png?raw=true`}
            alt=""
            className={Styles.Logo}
          />
        </div>

        <p className={Styles.Slogan}>
          HHS
        </p>
      </div>

      <span className={Styles.Span}>
        <Hamburger
          className={Styles.HamburgerMenu}
          onToggle={setMenu}
          direction="right"
          color="white"
          duration={0.5}
          size={35}
        />
      </span>

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <ListGroup className={Styles.ListGroup}>
          <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Home
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"About"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <InfoIcon sx={{ color: "White", fontSize: 25 }} /> */}
              About
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Curricula"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <AssignmentIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Curriculums
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Documents"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <FolderIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Documents
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Updates"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <ArticleIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Updates
            </ListGroup.Item>
          </Link>

          <a href={`Dog Water`} target={"_blank"} rel={"noreferrer"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <GradeIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Grades
            </ListGroup.Item>
          </a>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Apply"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <CallIcon sx={{ color: "white", fontSize: 25 }} /> */}
              Apply
            </ListGroup.Item>
          </Link>
        </ListGroup>

        <div className={Styles.Contact_Information_Box}>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>School</p>
            <p className={Styles.Text}>221 B Baker Street</p>
          </div>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Contact</p>
            <p className={Styles.Text}>1 876 192 1680</p>
            <p className={Styles.Text}>hhs@gmail.com</p>
          </div>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Social Media</p>
            <p className={Styles.Text}>221 B Baker Street</p>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
