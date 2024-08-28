// src/components/Hero.js
import React from 'react';
import Slider from 'react-slick';
import './Hero.css';
import 'slick-carousel/slick/slick.css'; // Slick carousel core styles
import 'slick-carousel/slick/slick-theme.css'; // Slick carousel theme styles

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Smooth fading transition
    arrows: false, // Hide arrows if you want a cleaner look like MTC Group
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        <div className="hero-slide">
          <div className="hero-image" style={{ backgroundImage: `url(${hero1})` }}>
            <div className="hero-content">
              <h1>Welcome to B. R. TRADING COMPANY</h1>
              <p>Your Trusted Partner in Scrap Metal Trading, Dismantling & Decommissioning</p>
              <a href="#contact" className="cta-button">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="hero-slide">
          <div className="hero-image" style={{ backgroundImage: `url(${hero2})` }}>
            <div className="hero-content">
              <h1>Quality Scrap Metal Trading</h1>
              <p>We deliver excellence in scrap metal trading</p>
              <a href="#services" className="cta-button">Our Services</a>
            </div>
          </div>
        </div>
        <div className="hero-slide">
          <div className="hero-image" style={{ backgroundImage: `url(${hero3})` }}>
            <div className="hero-content">
              <h1>Sustainable Future</h1>
              <p>Innovative Solutions for Scrap Metal Trading, Dismantling & Decommissioning</p>
              <a href="#about" className="cta-button">Learn More</a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Hero;
