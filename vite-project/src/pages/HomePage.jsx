// Home.js
import React from 'react';
import { AboutUs } from './AboutUs';
import { Projects } from './Projects';
import { Contact } from '../cmps/Contact';


export function HomePage() {
  return (
    <div className="App home" id="home">
      <section className="App-main-section">
        <div className="star-small"></div>
        <div className="star-mid"></div>
        <div className="star-large"></div>
        <div className="star-small"></div>
        <div className="star-mid"></div>
        <div className="star-large"></div>

        <img src="https://sanaullah.netlify.app/navlogov2.svg" className="App-logo" alt="logo" />
        <h2>
          Israel Litvak <br /> Full Stack / Frontend Developer
        </h2>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Home
        </a>
      </section>
      <AboutUs />
      <Projects />
      <Contact />

    </div>
  );
}