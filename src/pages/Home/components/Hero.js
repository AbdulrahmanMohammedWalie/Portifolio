import heroImage from "../img/heroImage.png";
import Circle from "../../../components/Circle";
import { useEffect, useRef } from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="text">
        <h1>Hello...</h1>
        <h2>I am Abdulrahman</h2>
        <h3>I am a...</h3>
      </div>
      <div className="img">
        <img src={heroImage} alt="Computer" />
      </div>
      <Circle />
    </div>
  );
};

export default Hero;
