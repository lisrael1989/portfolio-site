// import React, { useState, useEffect } from 'react';


// export function AppHeader() {
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 4) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`routernav-container ${sticky ? "stickit" : ""}`}>
//       <div className="App-inner">
//         <div className="routernav-container">
//           <div className="routernav-inner">
//             <div className="container-logo">
//               <a href="/">
//                 <img
//                   src="https://sanaullah.netlify.app/navlogov2.svg"
//                   alt="About7codes Logo"
//                   className="logo"
//                 />
//               </a>
//               <h1 className="logo-text">
//                 <a href="/">Israel-litvak</a>
//               </h1>
//             </div>
//             <ul className="routernav">
//               <li className="routernav-item">
//                 <a href="#home">Home</a>
//               </li>
//               <li className="routernav-item">
//                 <a href="#AboutUs">About</a>
//               </li>
//               <li className="routernav-item">
//                 <a href="#portfolio">portfolio</a>
//               </li>
//               <li className="routernav-item">
//                 <a href="#contact">Contact</a>
//               </li>

//             </ul>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// }


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

  const handleNavItemClick = () => {
    document.getElementById('navi-toggle').checked = false;
  };

  return (
    <header className={`routernav-container ${sticky ? "stickit" : ""}`}>
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
            <input type="checkbox" className="navigation-checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation-button">
              <span className="navigation-icon">&nbsp;</span>
            </label>
            <nav className="navigation-nav">
              <ul className="navigation-list">
                <li className="navigation-item"><a href="#home" className="navigation-link" onClick={handleNavItemClick}>Home</a></li>
                <li className="navigation-item"><a href="#AboutUs" className="navigation-link" onClick={handleNavItemClick}>About</a></li>
                <li className="navigation-item"><a href="#portfolio" className="navigation-link" onClick={handleNavItemClick}>Portfolio</a></li>
                <li className="navigation-item"><a href="#contact" className="navigation-link" onClick={handleNavItemClick}>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
