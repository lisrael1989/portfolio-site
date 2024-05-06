// import { GoogleMap } from "../cmps/GoogleMap";

// export function AboutUs() {
//   return (
//     <section className="about-page">

//       <div className="contact-us-section">
//         <h3>Contact us:</h3>
//         <p className="email-about">📩 <span>Litvak-toy-shop@gmail.com</span></p>
//         <p className="address-about">🏬 Bilo 40, Ness-ziona</p>
//         <p className="phone-about">☎️ <span>+972-528-654-789</span></p>
//         {<GoogleMap />}
//       </div>
//     </section>

//   )
// }

// About.js

import React from 'react';

export function AboutUs() {
  return (
    <div className="App about" id="about">
      <header className="App-header">
        <img src="https://sanaullah.netlify.app/navlogov2.svg" className="App-logo" alt="logo" />
        <p>
          about me section
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          test test test
        </a>
      </header>
    </div>
  );
}


