import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div className="mainContainer">
      <div className="profilePicture">
        <img src="./assets/pp.png" alt="Logo" className="pp" />
      </div>
      <div className="details">
        <h2>Hi, I'm</h2>
        <h1>
          <span>Batu Alp</span> Ustagül
        </h1>
        <p>
          I'm a Computer Science Enthusiast. I develop AI, Back End and Front
          End systems.
        </p>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Main;
