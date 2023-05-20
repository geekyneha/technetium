
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navigate=useNavigate("");

  function home(){
    navigate('/')
  }
  function quiz(){
    navigate('/Quiz')
  }
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
      <a  className="nav__brand">
      <div className='logo'>Quiz App</div>
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a onClick={home} className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a  className="nav__link">
            About
          </a>
        </li>
     
        <li className="nav__item">
          <a onClick={quiz} className="nav__link">
        Quiz
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link login">
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

export default Header;