import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Feel the Beat. Live the Moment.</h1>
        <p>Stream your favorite tunes anytime, anywhere.<br/>Just with a click.</p>
        <button className="song-btn">Listen Now</button>
      </div>
    </section>
  );
}

export default Hero;
