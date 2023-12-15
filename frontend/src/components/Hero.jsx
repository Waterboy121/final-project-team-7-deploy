import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Header from "../components/header";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className="hero-section">
        <div className="hero-content">
          <h1 data-text="Your Music, Your Way">Your Music, Your Way</h1>
          <p data-text="Discover and enjoy a vast collection of music at your fingertips.">
            Discover and enjoy a vast collection of music at your fingertips.
          </p>
          <Link to={"/signup"} className="nav-link">
            <button className="cta-button">Start Discovering</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
