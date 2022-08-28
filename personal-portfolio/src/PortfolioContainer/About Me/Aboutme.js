import React from "react";
import "./Aboutme.css";

export const Aboutme = () => {
  return (
    <section id="about" className="about-container">
      <div className="wrapper">
        <h1 className="animate__animated animate__flipInX">About Me</h1>
        <div className="about-sub-container">
          <h2>
            My name is Ananyeli Batista. I am a full stack Software Developer.
          </h2>
          <p>
            Between the many things I enjoy doing we can highlight: Reading,
            watch and play sports, teaching others what have learned, learning
            computer languages/ frameworks/libraries and technology in general.
            It is vital importance for me to keep updating my knowledge.
            Learning is my lifestyle!{" "}
          </p>
          <p>
            Some of the projects I have work as part of a team and build by
            myself are: E-commerce sites,re-disign/re-structure of existing projects, hackathon applications with a purpose
            of contributing to the wellness of the world and, management tools
            for organization.{" "}
          </p>
          <p>
            Some of my soft skills are: Bilingual in Spanish and English Strong
            organization skills Reliable Learning/adaptability skills Strong
            work ethic Agile methodology Leadership skills and great team player
          </p>
          <p>
            Some of my hard skills are based on: Front-end technologies (HTML,
            CSS, JavaScript, React), Back-End Technologies (Node.js, Express.js,
            MySQL, AWS, Java, Mongo/Mongoose). Familiar with VS code, Netlify,
            Git, GitHub, and SquareSpace.{" "}
          </p>
        </div>
        <button id="about-button" >
          <a href="#projects">Projects</a>
        </button>
      </div>
    </section>
  );
};
