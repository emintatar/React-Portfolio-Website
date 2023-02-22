import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Emin</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span> NodeJS, ExpressJS, MongoDB,</span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>JavaScript, Python, C#, C, </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
