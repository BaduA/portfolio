import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { MdPhonelinkRing } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <h1>Get In Touch With Me</h1>
      <div className="contactElements">
        <div className="contactElement">
          <MdOutlineMarkEmailRead
            size="30px"
            className="contactIcon"
          ></MdOutlineMarkEmailRead>
          <div className="contactElementDetails">
            <h4>Email</h4>
            <p>batualpustaguel@gmail.com</p>
          </div>
        </div>
        <div className="contactElement">
          <MdPhonelinkRing
            size="30px"
            className="contactIcon"
          ></MdPhonelinkRing>
          <div className="contactElementDetails">
            <h4>Phone Number</h4>
            <p>+90 544 219 5053</p>
          </div>
        </div>
        <div className="contactElement">
          <PiLinkedinLogoBold
            size="30px"
            className="contactIcon"
          ></PiLinkedinLogoBold>
          <div className="contactElementDetails">
            <h4>My LinkedIn</h4>
            <a href="https://www.linkedin.com/in/batu-alp-ustagül-409882228/">
              https://www.linkedin.com/in/batu-alp-ustagül-409882228/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
