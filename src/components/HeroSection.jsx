import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

const HeroSection = () => {
  const video = () => {
    return <video src="/videos/video-2.mp4" autoPlay loop muted />;
  };
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>Rio Grande do Norte</h1>
      <p>As praias mais bonitas do Brasil estão aqui</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Junte-se a nós!
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={video}
        >
          ASSISTA O TRAILLER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
