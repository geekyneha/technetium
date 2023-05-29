
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
  

  function handleLogout(){
    localStorage.removeItem("signUp")
    navigate('/')
  }

  function handleDltAcc(){

  }
  
  
  return (
    <nav className="nav">
      <Link to='/no' onClick="#" className="nav_brand">
        Quizzone
      </Link >
      <ul className={active}>
        <li className="nav__item">
          <Link to='/Home' className="nav__link">
            Home
          </Link >
        </li>
        <li className="nav__item">
          <Link to='/Quiz' className="nav__link">
           Quiz
          </Link >
        </li>
        <li className="nav__item">
         <span className='logout' onClick={handleLogout}>Logout</span>
        </li>
        <li className="nav__item">
         <span className='logout' onClick={handleDltAcc}>Delete Account</span>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
          < RxHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;