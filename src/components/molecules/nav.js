import { FaGlobe } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useState } from "react";

import "./nav.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
      <img src="https://o.remove.bg/downloads/c3f39b7b-fb3e-48b8-a49d-9988a1e59924/images-removebg-preview.png" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
           Projects
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          videos
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link login">
           Login
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
          < RxHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;