import { FaGlobe } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useState } from "react";

import "./nav.css";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navigate=useNavigate();
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  function handleLogin () {
    navigate('/login')
  } 
  function handleHome () {
    navigate('/Home')
  } 
  function handleContact () {
    navigate('/contacts')
  } 
  function handleAbout () {
    navigate('/about')
  } 
  function handleProjects () {
    navigate('/projects')
  } 
  function handleVideos(){
    navigate('/videos')
  }
  return (
    <nav className="nav">
      <a onClick="#" className="nav__brand">
      <img src="https://o.remove.bg/downloads/c3f39b7b-fb3e-48b8-a49d-9988a1e59924/images-removebg-preview.png" alt="HMA" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a onClick={handleHome} className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a onClick={handleAbout} className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a onClick={handleProjects} className="nav__link">
           Projects
          </a>
        </li>
        <li className="nav__item">
          <a onClick={handleVideos} className="nav__link">
          videos
          </a>
        </li>
        <li className="nav__item">
          <a  onClick={handleContact} className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a onClick={handleLogin} className="nav__link login">
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