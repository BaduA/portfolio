import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const route = window.location.pathname.slice(1);
  let navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar color1">
      <div
        className="header"
        onClick={() => {
          navigate("/");
        }}
      >
        B
      </div>
      <div className="elements">
        <div
          className={
            "navbarElement " + (route === "" ? "navbarElementActive" : "")
          }
          onClick={() => {
            navigate("/");
          }}
        >
          Main
        </div>
        <div
          className={
            "navbarElement " + (route === "about" ? "navbarElementActive" : "")
          }
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </div>
        <div
          className={
            "navbarElement " +
            (route === "contact" ? "navbarElementActive" : "")
          }
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </div>
        <div
          className={
            "navbarElement " +
            (route === "projects" ? "navbarElementActive" : "")
          }
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </div>
        <div
          className={
            "navbarElement " + (route === "skills" ? "navbarElementActive" : "")
          }
          onClick={() => {
            navigate("/skills");
          }}
        >
          Skills
        </div>
      </div>
      <div className="colorTheme">
        {isMenuOpen ? (
          <>
            <IoCloseSharp
              className="menuClose"
              onClick={() => {
                setMenuOpen(false);
              }}
              size="30px"
            ></IoCloseSharp>
            <div className="menuContainer">
              <div
                className="menuItem"
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                Main
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  navigate("/about");
                  setMenuOpen(false);
                }}
              >
                About
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
              >
                Contact
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  navigate("/projects");
                  setMenuOpen(false);
                }}
              >
                Projects
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  navigate("/skills");
                  setMenuOpen(false);
                }}
              >
                Skills
              </div>
            </div>
          </>
        ) : (
          <>
            <IoMenuSharp
              className="menu"
              size="30px"
              onClick={() => {
                setMenuOpen(true);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
