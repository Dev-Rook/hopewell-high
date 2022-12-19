import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
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
            <Link className={Styles.Navlink} to={"Services"}>
              Services
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"Projects"}>
              Projects
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"About"}>
              About
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"Articles"}>
              Articles
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink} to={"Contact"}>
              Contact
            </Link>
          </li>

          <MenuIcon
            className={Styles.MenuIcon}
            sx={{ color: "white", fontSize: 30 }}
          />
        </ul>

        {/* Mobile Menu Start */}
        <div className={Styles.Mobile_Menu_Container}></div>
        {/* Mobile Menu End */}
      </nav>
    </nav>
  );
};

export default Navbar;
