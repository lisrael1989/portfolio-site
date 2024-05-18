import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // Custom arrow components
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const projects = [
    {
      img: "https://res.cloudinary.com/dpixrsdwh/image/upload/v1715776265/2_zkwie6.png",
      title: "AppSsus",
      description: " Appsus brings your favorite apps together in a single, streamlined application. Utilizing a combination of React, it features a collection of mini-apps including MisterEmail, MissKeep, and MissBooks, each offering unique functionalities within a unified interface.",
      link: "https://lisrael1989.github.io/Apssus_Sprint_3/#/"
    },
    {
      img: "https://source.unsplash.com/720x600/?portfolio",
      title: "Portfolio",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "https://example.com/portfolio"
    },
    {
      img: "https://res.cloudinary.com/dpixrsdwh/image/upload/v1715776266/1_cnzrbz.png",
      title: "Meme Gen",
      description: "A fun and easy-to-use application that allows users to create and share custom memes effortlessly.",
      link: "https://lisrael1989.github.io/Israel-Litvak-Ultimate-Meme-Generator/"
    },
    {
      img: "https://res.cloudinary.com/dpixrsdwh/image/upload/v1715776790/Beige_New_Product_Mockup_Now_Available_Facebook_Post_vgib70.png",
      title: "AirStay",
      description: "An Airbnb clone that provides a platform for users to list, discover, and book unique accommodations around the world.",
      link: "https://airstay-kybr.onrender.com/"
    },
    {
      img: "https://res.cloudinary.com/dpixrsdwh/image/upload/v1715778767/ucj2oqfmkptbnetv2wvf.png",
      title: "Mister Bitcoin",
      description: "A user-friendly application for seamless Bitcoin transfers, offering secure and efficient cryptocurrency transactions.",
      link: "https://example.com/misterbitcoin"
    },
    {
      img: "https://source.unsplash.com/720x600/?code,demo",
      title: "Demo",
      description: "#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "https://example.com/demo"
    }
  ];

  return (
    <section className="portfolio">
      <h2 className="title">My Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="card" key={index} onClick={() => window.open(project.link, "_blank")}>
            <div className="box">
              <img src={project.img} alt={project.title} />
              <div className="text">{project.title}</div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}