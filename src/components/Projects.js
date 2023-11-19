import React from "react";
import "./Projects.css";
import { Link, useNavigate } from "react-router-dom";
function Projects() {
  return (
    <div className="container">
      <div className="projectsContainer">
        <h1 className="projectsHeader">Personal Projects</h1>
        <p
          className="projectsText"
          onClick={() => {
            window.location.replace("https://github.com/BaduA");
          }}
        >
          <a
            href={"https://github.com/BaduA"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Click to see more about my personal projects.
          </a>
        </p>
        <div className="projectsDiv">
          <div
            className="projectsElement projectsElement1"
            style={{
              backgroundImage: `url("./assets/malaria.jpg")`,
            }}
            onClick={() => {
              window.location.replace(
                "https://github.com/BaduA/malaria-diagnosis-ai"
              );
            }}
          >
            <p className="projectName">Malaria Diagnosis AI</p>
            <p className="projectCategory">Artifical Intelligence</p>
          </div>
          <div
            className="projectsElement projectsElement2"
            style={{
              backgroundImage: `url("./assets/carprice.jpg")`,
            }}
            onClick={() => {
              window.location.replace(
                "https://github.com/BaduA/carpriceprediction"
              );
            }}
          >
            <p className="projectName">Car Price Prediction AI</p>
            <p className="projectCategory">Artificial Intelligence</p>
          </div>
        </div>
        <div className="projectsDiv">
          <div
            className="projectsElement projectsElement2"
            style={{
              backgroundImage: `url("./assets/bilkent.png")`,
            }}
            onClick={() => {
              window.location.replace(
                "https://github.com/BaduA/BilkentMap-mobile"
              );
            }}
          >
            <p className="projectName">BilkentMap</p>
            <p className="projectCategory">Mobile</p>
          </div>
          <div
            className="projectsElement projectsElement1"
            style={{
              backgroundImage: `url("./assets/market.jpg")`,
            }}
            onClick={() => {
              window.location.replace(
                "https://github.com/BaduA/bilkentmarket-python-react"
              );
            }}
          >
            <p className="projectName">BilkentMarket</p>
            <p className="projectCategory">Web</p>
          </div>
        </div>
        <div className="projectsDiv">
          <div
            className="projectsElement projectsElement1"
            style={{
              backgroundImage: `url("./assets/dotnetreact.png")`,
            }}
            onClick={() => {
              window.location.replace("https://github.com/BaduA/dotnet-react");
            }}
          >
            <p className="projectName">.NET - React Project</p>
            <p className="projectCategory">Web</p>
          </div>
          <div
            className="projectsElement projectsElement2"
            style={{
              backgroundImage: `url("./assets/angulardotnet.jpg")`,
            }}
            onClick={() => {
              window.location.replace(
                "https://github.com/BaduA/OnionArch-dotnet-angular"
              );
            }}
          >
            <p className="projectName">.NET - Angular Project</p>
            <p className="projectCategory">Web</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
