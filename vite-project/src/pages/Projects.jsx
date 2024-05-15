import { useEffect } from "react";

export function Projects() {


  return (
    <div className="App projects" id="projects">
      <section className="App-main-section">
        <h2 className="title">My Projects</h2>
        <div className="carousel owl-carousel">
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?shopping" alt="" />
              <div className="text">Ecommerce</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?portfolio" alt="" />
              <div className="text">Portfolio</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?blog" alt="" />
              <div className="text">Blog</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?messenger" alt="" />
              <div className="text">Messaging App</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?app-clone" alt="" />
              <div className="text">Clone</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="https://source.unsplash.com/720x600/?code,demo" alt="" />
              <div className="text">Demo</div>
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
