import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import MenuIcon from "@mui/icons-material/Menu";

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
        <div className={Styles.Navlink_Container}>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
          >
            <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
              <TreeItem nodeId="1" label="Home" />
            </Link>
            <TreeItem nodeId="2" label="Information">
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"AboutPage"}
              >
                <TreeItem nodeId="3" label="About" />
              </Link>
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"News"}
              >
                <TreeItem nodeId="4" label="Articles" />
              </Link>
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"Curriculums"}
              >
                <TreeItem nodeId="5" label="Curriculums" />
              </Link>
              <Link
                onClick={doubleFunction}
                className={Styles.Navlink}
                to={"Documents"}
              >
                <TreeItem nodeId="6" label="Documents" />
              </Link>
            </TreeItem>

            <TreeItem nodeId="7" label="Grades" />

            <Link
              onClick={doubleFunction}
              className={Styles.Navlink}
              to={"Contact"}
            >
            <TreeItem nodeId="8" label="Contact" />
            </Link>
          </TreeView>
        </div>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
