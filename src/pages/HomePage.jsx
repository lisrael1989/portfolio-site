// Home.js
import React from 'react';
import { useEffect } from "react";
import Typed from 'typed.js';
import { AboutUs } from './AboutUs';
import { Portfolio } from './Portfolio';

import { Contact } from '../cmps/Contact';


export function HomePage() {


  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: [
        'Fullstack Developer',
        'Passionate Coder',
        '♥ {CSS}',
        'Problem Solver',
        'JavaScript Ninja'
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="App home" id="home">
      <section className="App-main-section">
        <div className="star-small"></div>
        <div className="star-mid"></div>
        <div className="star-large"></div>


        <img src="https://sanaullah.netlify.app/navlogov2.svg" className="App-logo" alt="logo" />
        <p className='title-home'> Hello, I'm </p>
        <h2 className='my-name'> Israel Litvak </h2>
        <div className="text-3">And I'm a <span className="typing"></span></div>

      </section>
      <AboutUs />
      <Portfolio />
      <Contact />


    </div>
  );
}
