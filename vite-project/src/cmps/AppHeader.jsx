import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Contact } from "../cmps/Contact.jsx";
import { AboutUs } from "../pages/AboutUs.jsx";
import { Experience } from "../cmps/Experience.jsx";
import { HomePage } from "../pages/HomePage.jsx";

export function AppHeader() {
  const [stickit, setStickit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4) {
        setStickit(true);
      } else {
        setStickit(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App ${stickit ? "sticky" : ""}`}>
      <div className="App-inner">
        <div className="routernav-container">
          <div className="routernav-inner">
            <div className="container-logo">
              <a href="/">
                <img
                  src="https://sanaullah.netlify.app/navlogov2.svg"
                  alt="About7codes Logo"
                  className="logo"
                />
              </a>
              <h1 className="logo-text">
                <a href="/">Israel-litvak</a>
              </h1>
            </div>
            <ul className="routernav">
              <li className="routernav-item">
                <a href="#Home">Home</a>
              </li>
              <li className="routernav-item">
                <a href="#AboutUs">About</a>
              </li>
              <li className="routernav-item">
                <a href="#experience">Projects</a>
              </li>
              <li className="routernav-item">
                <a href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}