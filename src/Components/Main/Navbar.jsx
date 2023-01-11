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

import { Spin as Hamburger } from "hamburger-react";

import Articles from "../../Pages/Articles";

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

      <Breadcrumbs className={Styles.Navlink_Container} aria-label="breadcrumb">
        <Link onClick={scrollUp} className={Styles.Navlink} to={"/"}>
          {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
          Home
        </Link>

        <Link onClick={scrollUp} className={Styles.Navlink} to={"AboutPage"}>
          {/* <InfoIcon sx={{ color: "White", fontSize: 25 }} /> */}
          About
        </Link>

        <Link onClick={scrollUp} className={Styles.Navlink} to={"Curriculums"}>
          {/* <ListAltIcon sx={{ color: "White", fontSize: 25 }} /> */}
          Curriculums
        </Link>

        <Link onClick={scrollUp} className={Styles.Navlink} to={"Documents"}>
          {/* <FolderIcon sx={{ color: "White", fontSize: 25 }} /> */}
          Documents
        </Link>

        <Link onClick={scrollUp} className={Styles.Navlink} to={"News"}>
          {/* <ArticleIcon sx={{ color: "White", fontSize: 25 }} /> */}
          News
        </Link>

        <Link onClick={scrollUp} className={Styles.Navlink} to={""}>
          {/* <GradeIcon sx={{ color: "White", fontSize: 25 }} /> */}
          Grades
        </Link>

        <Link onClick={scrollUp} className={Styles.Navlink} to={"Contact"}>
          {/* <CallIcon sx={{ color: "White", fontSize: 25 }} /> */}
          Contact
        </Link>
      </Breadcrumbs>

      <MenuIcon
        onClick={showMenu}
        className={Styles.MenuIcon}
        sx={{ color: "black", fontSize: 40 }}
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
          <CloseIcon
            onClick={showMenu}
            className={Styles.CloseIcon}
            sx={{ color: "white", fontSize: 40 }}
          />
          <div className={Styles.Diffuser}></div>
          <img
            src={`https://github.com/Dev-Rook/hopewell-high/blob/master/src/Assets/Images/DJI_0501-min-min.JPG?raw=true`}
            alt=""
            className={Styles.Header_Image}
          />
        </div>

        <ListGroup className={Styles.ListGroup}>
          <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              <HomeIcon sx={{ color: "White", fontSize: 25 }} />
              Home
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"AboutPage"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <InfoIcon sx={{ color: "White", fontSize: 25 }} />
              About
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Curriculums"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <AssignmentIcon sx={{ color: "White", fontSize: 25 }} />
              Curriculums
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Documents"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <FolderIcon sx={{ color: "White", fontSize: 25 }} />
              Documents
            </ListGroup.Item>
          </Link>

          <Link onClick={doubleFunction} className={Styles.Navlink} to={"News"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              <ArticleIcon sx={{ color: "White", fontSize: 25 }} />
              Articles
            </ListGroup.Item>
          </Link>

          <a href={`Dog Water`} target={"_blank"} rel={"noreferrer"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              <GradeIcon sx={{ color: "White", fontSize: 25 }} />
              Grades
            </ListGroup.Item>
          </a>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"Contact"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              <CallIcon sx={{ color: "white", fontSize: 25 }} />
              Contact
            </ListGroup.Item>
          </Link>
        </ListGroup>

        <div className={Styles.Social_Icon_Bar}>
          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <InstagramIcon
                className={Styles.SocialIcon}
                sx={{ color: "White", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>Instagram</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <FacebookIcon
                className={Styles.SocialIcon}
                sx={{ color: "White", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>FaceBook</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <TwitterIcon
                className={Styles.SocialIcon}
                sx={{ color: "White", fontSize: 20 }}
              />
              <p className={Styles.Social_Title}>Twitter</p>
            </a>
          </div>

          <div className={Styles.Social_Container}>
            <a href={`#`} target={"_blank"} rel={"noreferrer"}>
              <WhatsAppIcon
                className={Styles.SocialIcon}
                sx={{ color: "White", fontSize: 20 }}
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
