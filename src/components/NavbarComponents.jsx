import { useState } from "react";
import logo from "../assets/logo.svg";
import "./css/navbar.css";

const NavbarComponents = () => {
  const [openMenu, setOpenMenu] = useState("bx bx-menu");
  const [menuActive, setMenuActive] = useState("navbar-list");

  const openThisMenu = () => {
    openMenu === "bx bx-menu"
      ? setOpenMenu("bx bx-x")
      : setOpenMenu("bx bx-menu");

    menuActive === "navbar-list"
      ? setMenuActive("navbar-list active")
      : setMenuActive("navbar-list");
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>
        <ul className={menuActive}>
          <li className="navbar-link">
            <a href="">Home</a>
          </li>
          <li className="navbar-link">
            <a href="">About</a>
          </li>
          <li className="navbar-link">
            <a href="">Services</a>
          </li>
          <li className="navbar-link">
            <a href="">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="">Testimonial</a>
          </li>
          <li className="navbar-btn">
            <a href="">Contact Us</a>
          </li>
        </ul>

        <div className="mobile-icon" onClick={openThisMenu}>
          <i className={openMenu}></i>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
