import React, { useState, useEffect } from 'react';


export function AppHeader() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`routernav-container ${sticky ? "stickit" : ""}`}>
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
                <a href="#home">Home</a>
              </li>
              <li className="routernav-item">
                <a href="#AboutUs">About</a>
              </li>
              <li className="routernav-item">
                <a href="#projects">Projects</a>
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