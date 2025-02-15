import React, { useEffect } from "react";
import "./home.css";
import styles from "./homepage.module.css";
import startsy from "../../data/startsy.jpg";
import $ from "jquery";
import Card from "../../components/Cards/card.jsx"; // Import your existing Card component
import Slider from "react-slick"; // Import React Slick for the sliding effect
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
  useEffect(() => {
    $(".left")
      .on("mouseenter", function () {
        $(".containerrr").addClass("left-is-hovered");
      })
      .on("mouseleave", function () {
        $(".containerrr").removeClass("left-is-hovered");
      });

    $(".right")
      .on("mouseenter", function () {
        $(".containerrr").addClass("right-is-hovered");
      })
      .on("mouseleave", function () {
        $(".containerrr").removeClass("right-is-hovered");
      });
  }, []);

  // Success Stories Data
  const successStories = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuzrZWfXgbcO0whg2a4D7fM5w9aL7pvQpwg&s",
      title: "Startup A Raised $1M",
      description: "Startup A secured $1M funding and scaled globally.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0JAnWlCU7vIwZ7L3Umj_tpxEpZJzpMOwpg&s",
      title: "Startup B Acquired",
      description: "Startup B was acquired by a major tech company.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdeIgLpTv3EDPo1tVUoFDL9mKa9aGAeH23Q&s",
      title: "Startup C Reached 1M Users",
      description: "Startup C hit 1M active users in just 6 months.",
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.3Hn8CGnhOphtSkIzdTVVJwHaE8&pid=Api&P=0&h=180",
      title: "Startup D Expansion",
      description: "Expanded into international markets after funding round.",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.B9cUu9BnUE307G-Z0jhhgwHaD4&pid=Api&P=0&h=180",
      title: "Startup E Tech Breakthrough",
      description: "Developed revolutionary AI technology for automation.",
    },
  ];

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      {/* Landing Section */}
      <div className="land">
        <div className="containerrr">
          <div className="one-half left">
            <h1>Investor</h1>
            <a href="/ilogin" className="cta">Login</a>
          </div>
          <div className="one-half right">
            <h1>Startup</h1>
            <a href="/login" className="cta">Login</a>
          </div>
        </div>
      </div>

      <br></br>
      {/* Homepage Wrapper */}
      <div className="homepageWrapper">
        <div className={`${styles.homepageWrapperOne}`}>
          {/* Logo Section */}
          <div className={`${styles.startupLogo}`}>
            <img className={`${styles.logoImage}`} src={startsy} alt="Startsy Logo" />
          </div>

          {/* Startup Information */}
          <div className={`${styles.homepageDetails}`}>
            <p>
              Nowadays, it seems like we’re experiencing a startup boom, where
              everyone with a bright idea, a good team, and hard work can become
              the next Steve Jobs. However, in today’s marketing-driven world,
              having a good promotional strategy for your startup is as
              essential as having a good idea. For that, a startup requires funding.
            </p>
            <p>
              We at Startsy aim to provide a platform for startups to raise
              external funding in order to expand into new markets, invest in
              research & development (R&D), and fend off the competition.
              This in turn helps generate more employment.
            </p>
          </div>
        </div>

        {/* Success Stories Section with Slider */}
        <div className={`${styles.successStories}`}>
          <h2>Success Stories</h2>
          <br></br>
          <Slider {...sliderSettings}>
            {successStories.map((story, index) => (
              <Card key={index} img={story.img} title={story.title} description={story.description} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
