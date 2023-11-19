import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaReact, FaAngular } from "react-icons/fa";
import { SiFastapi, SiDotnet, SiTensorflow } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Skills() {
  return (
    <section className="skills skillscontainer">
      <div className="title">
        <h2>skills</h2>
        <div>
          <h2>my skills</h2>
        </div>
      </div>

      <p className="text">
        I am highly adaptable, a quick learner, and a hardworking person. Coding
        is my passion.
      </p>

      <div className="row">
        <div className="item">
          <div className="item-text">
            <FaReact className="skillsIcon" />
            <span>React</span>
            <span className="w-90">90%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-90"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <FaReact className="skillsIcon" />
            <span>React-Native</span>
            <span className="w-85">85%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-85"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <FaAngular className="skillsIcon" />
            <span>Angular</span>
            <span className="w-60">60%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-60"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <SiFastapi className="skillsIcon" />
            <span>FastAPI</span>
            <span className="w-90">90%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-90"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <SiDotnet className="skillsIcon" />
            <span>.Net Core</span>
            <span className="w-85">85%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-85"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <TbBrandNextjs className="skillsIcon" />
            <span>NextJS</span>
            <span className="w-75">75%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-75"></div>
          </div>
        </div>

        <div className="item">
          <div className="item-text">
            <SiTensorflow className="skillsIcon" />
            <span>Tensorflow</span>
            <span className="w-80">80%</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
