import React from "react";
import logo from "../images/portfolio-logo.png";
import "./NavBar.css";
import { useState } from "react";

export const NavBar = () => {
  let darkToggle = false;
  function toggleDark() {
    darkToggle = !darkToggle;
    if (darkToggle) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }
  const [toggleVisibility, setToggleVisibility] = useState(true);

  const toggleMenu = () => {
    toggleVisibility ? setToggleVisibility(false) : setToggleVisibility(true);
    console.log("inside toggle", toggleVisibility);
  };
  return (
    
      <nav className="sticky">
        <div id="logo">
          <a href="#profile">
            {" "}
            <img src={logo} alt="logo" height="50" />
          </a>
          <button className="navbar-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
        </div>
        
        <ul className={toggleVisibility ? "navbar-links navbar-display-none" : "navbar-links" }>
          <li className="navbutton"><a href="#profile">Home</a> </li>
          <li className="navbutton"><a href="#about">About</a></li>
          <li className="navbutton"><a href="#projects">Projects</a></li>
          <li className="navbutton"><a href="#contact">Contact</a></li>
          <li class="navbutton">
            <a
              href="#"
              className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black
            "
              onClick={toggleDark}
            >
              <i class="fa-solid fa-moon"></i>
            </a>
          </li>
        </ul>
      </nav>
   
  );
};
