import React from "react";
import task from "../images/task.png";
import hope from "../images/poll.png";
import ecom from "../images/ecom.png";
import red from "../images/red.png";
import "./Project.css";

export const Project = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="project-wrapper">
        <h1>Projects</h1>
        <div className="project-flex">
          <div className="tasktracker-container project">
          <a href="https://astonishing-choux-fa46bc.netlify.app/">
            <img src={task} alt="task-tracker" />
           <h3 className="project-title">Task Tracker App</h3>
           </a>
           <p>This task-tracker was built with the goal of helping with organization.
             The main tools used for this app: Figma, HTML, CSS, JS. 
             Deployment: Netlify.</p>
          </div>
          <div className="hopehacks project">
            <a href="https://prosperearth.herokuapp.com/"> 
            <img src={hope} alt="pollution" />
            <h3 className="project-title">Pollution Website</h3>
            </a>
            <p>The "Hope Hacks Project" mission is to inform about a global problem our planet 
              is facing, pollution. The main tools used for this app: Figma, React, JS, MySQL. 
             Deployment: Heroku, AWS Amplify.</p>
          </div>
          <div className="ecommerce-container project">
            <a href="https://yeliselitegloves.netlify.app/"> 
            <img src={ecom} alt="ecommerce" />
            <h3 className="project-title">E-commerce</h3>
            </a>
            <p>My e-commerce project is a Sofball Gloves store I decided to build to improve my
              CSS and React and, deployment skills. The main tools used for this app: Figma, React, JS, MySQL. 
             Deployment: Heroku, Netlify, AWS RDS.  
            </p>
          </div>
          <div className="redesign-container project">
            <a href="https://main.d2wzkwm3nb10ll.amplifyapp.com/"> 
            <img src={red} alt="redesign" />
            <h3 className="project-title">Re-design</h3>
         </a>
         <p>The Wikipedia Re-disign is a group project. We implemented 3 API's. 
           Third party APIs: Wikipedia's Dictionary and Search tool, News API.  
           Tools: Figma, Trello, React, CSS, MySLQ.
           Deployment: Netlify, AWS Amplify, Heroku.
         </p>
         </div>
        </div>
        <button id="project-button" >
          <a href="#contact">Contact me</a>
        </button>
      </div>
    </section>
  );
};
