
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
      <section className=" AboutUs  ">

        <h2 className="title-about-me">About Me</h2>
        <h5 className='sub-title-about-me'>— Who I Am ? —</h5>

        <div className="about-content ">
          <div className="left ">
            <img className="israel-img" src="https://res.cloudinary.com/dpixrsdwh/image/upload/v1715088963/israel_e8xrgk.jpg" alt="Profile Image 626x626" />
          </div>
          <div className="right">
            <div className="text">I'm israel and I'm a <span className="typing-2"></span></div>
            <div>
              <p>Seeking an entry-level opportunity with an esteemed organization.
                <br /> where I can utilize my skills & enhance learning in the field of work.
                Capable of mastering new technologies.</p>
            </div>
            <div className="text">Why Work With Me</div>
            {/* <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p> */}
            <p><p>As a web developer, I pride myself on being a great communicator who takes the time to fully understand the unique needs of each client. My passion for crafting efficient, user-friendly websites ensures that every project I work on meets and exceeds expectations. <br /><span className="work-p" >Let's build something amazing together!</span></p>
            </p>

            <a href="https://drive.google.com/file/d/18BsHSG4tC7EHmUNUZCqUsPW2zwgNoXzL/view?usp=sharing" target="blank">Download CV</a>
          </div>
        </div>

      </section >

    </div >


  );
}


