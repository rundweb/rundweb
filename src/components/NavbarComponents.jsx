import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "./css/navbar.css";

import { Link } from "react-scroll";

const NavbarComponents = () => {
  const [openMenu, setOpenMenu] = useState("bx bx-menu");
  const [menuActive, setMenuActive] = useState("navbar-list");
  const [scrollActive, setScrollActive] = useState(false);

  const scrollBtn = () => {
    if (window.scrollY > 10) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    scrollBtn();

    window.addEventListener("scroll", scrollBtn);
  });

  const openThisMenu = () => {
    openMenu === "bx bx-menu"
      ? setOpenMenu("bx bx-x")
      : setOpenMenu("bx bx-menu");

    menuActive === "navbar-list"
      ? setMenuActive("navbar-list active")
      : setMenuActive("navbar-list");
  };

  return (
    <div className={scrollActive ? "navbar active" : "navbar"}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>
        <ul className={menuActive}>
          <li className="navbar-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </li>
          <li className="navbar-link">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="navbar-link">
            <Link to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>Services</Link>
          </li>
          <li className="navbar-link">
            <a href="">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="">Testimonial</a>
          </li>
          <li className={scrollActive ? "navbar-btn active" : "navbar-btn"}>
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
