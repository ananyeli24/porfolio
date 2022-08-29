import React from "react";
import hero from "../images/hero.png";
import "./Profile.css";
export default function Profile() {
  return (
    <div id="profile" className="profile-container">
      <div className="hero-text">
        <h1 className="animate__animated animate__backInLeft" >Hello/Hola</h1>
        <h2 className="animate__animated animate__backInRight" >I am/Yo soy</h2>
        <h2 id="skills-line" className="animate__backInDown">I have skills on:</h2>
        <div>
        <div className="profile-icons">
          <li><i id="html" class="fa-brands fa-html5" ></i></li>
          <li><i id="css" class="fa-brands fa-css3-alt"></i></li>
          <li><i id="js" class="fa-brands fa-js"></i></li>
          <li><i id="react" class="fa-brands fa-react"></i></li>
          <li><i id="aws" class="fa-brands fa-aws"></i> </li>
        </div>

        <div className="profile-icons second-profile-icons" >
          <i id="node" class="fa-brands fa-node"></i>
        <i id="java" class="fa-brands fa-java"></i>
        <img id="sql" src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" />
          <img id="express" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"/>
          <img id="mongo" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"/>
        </div>
        </div>
        <h2 id="skills-line" className="animate__backInDown">You can find me here:</h2>
        <div className="contact-icons">
       <a href="https://www.linkedin.com/in/ananyeli-batista/"><i  id="linked-in" class="fa-brands fa-linkedin" ></i></a>
       <a href="https://github.com/ananyeli24"><i id="github" class="fa-brands fa-square-github"></i></a> 
       <a href="#contact"><i id="email" class="fa-solid fa-envelope-circle-check"></i></a> 
        </div>

        <button id="profile-button"><a href="#about">About Me</a></button>
      </div>
      <div className="hero-image">
        <img src={hero} alt="hero" />
      </div>
      
    </div>
  );
}
