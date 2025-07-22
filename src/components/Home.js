// src/components/Home.js
import React from 'react';
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <p className="tagline">Struggling with Your School or College Project?</p>
        <h1>
          <span>Your Project, </span>
          <span className="highlight">Our Responsibility.</span>
        </h1>
        <p className="description">
          From simple models to final-year projects — we deliver fast, affordable, and custom-built solutions. <br />
          Trusted by 1,000+ students. We make your project journey stress-free.
        </p>
        <div className="hero-buttons">
          <a href="#service" className="btn primary">Explore Services</a>
          <a href="#heroform" className="btn secondary">Need a Custom Project?</a>

        </div>
      </div>
    </section>
  );
};

export default Home;
