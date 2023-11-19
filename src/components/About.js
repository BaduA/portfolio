import React from "react";
import "./About.css";
import { PiMedalFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";

function About() {
  return (
    <div className="aboutContainer">
      <h1 className="aboutHeader">About Me</h1>
      <div className="aboutMe">
        <img className="aboutImage" src="./assets/pp.png" alt="" />
        <div className="aboutDetails">
          <div className="aboutElements">
            <div className="aboutElement">
              <PiMedalFill
                size="30px"
                style={{ marginBottom: "0.5rem" }}
              ></PiMedalFill>
              <h2>Experience</h2>
              <p>1+ Year</p>
              <p>Front End Development</p>
              <p>AI Consultant</p>
            </div>
            <div className="aboutElement">
              <BsFillPeopleFill
                size="30px"
                style={{ marginBottom: "0.5rem" }}
              ></BsFillPeopleFill>
              <h2>Education</h2>
              <p>Currently majoring Computer Science at Bilkent University </p>
            </div>
          </div>
          <p className="aboutText">
            I'm Batu Alp Ustagül. I am 18 years old and I have been in coding
            since i was 14. I graduated from Buca Science High School and I was
            the 181. contestant amongst approximately 3 million students. I
            could have entered into any university in Turkey and I chose
            Bilkent University. Now I am majoring in Computer Science.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
