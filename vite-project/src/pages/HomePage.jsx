// Home.js
import React from 'react';
import { AboutUs } from './AboutUs';
import { Projects } from './Projects';
import { Contact } from '../cmps/Contact';
// import './Home.scss';

export function HomePage() {
  return (
    <div className="App home" id="home">
      <header className="App-header">
        <div className="star-small"></div>
        <div className="star-mid"></div>
        <div className="star-large"></div>
        <div className="star-small"></div>
        <div className="star-mid"></div>
        <div className="star-large"></div>

        <img src="https://sanaullah.netlify.app/navlogov2.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>some text</code> & some more text.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Home
        </a>
      </header>
      <AboutUs />
      <Projects />
      <Contact />

    </div>
  );
}