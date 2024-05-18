
import { useEffect } from "react";
import Typed from 'typed.js';

export function AboutUs() {

  useEffect(() => {
    const typed = new Typed('.typing-2', {
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
    <div className="App aboutUs" id="AboutUs">
      <section className="App-main-section AboutUs  ">
        <div className="max-width">
          <h2 className="title-about-me">About Me</h2>
          <h5 className='sub-title-about-me'>— Who I Am ? —</h5>

          <div className="about-content ">
            <div className="left ">
              <img className="israel-img" src="https://res.cloudinary.com/dpixrsdwh/image/upload/v1715088963/israel_e8xrgk.jpg" alt="Profile Image 626x626" />
            </div>
            <div className="right">
              <div className="text">I'm israel and I'm a <span className="typing-2"></span></div>
              <p>Seeking an entry-level opportunity with an esteemed organization.
                <br /> where I can utilize my skills & enhance learning in the field of work.
                Capable of mastering new technologies.</p>

              <div className="text">Why Work With Me</div>
              <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p>

              <a href="https://drive.google.com/file/d/1hfs1s9xjIIILrTzCACn8Ro7ajdjsm8su/view?usp=sharing" target="blank">Download CV</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


