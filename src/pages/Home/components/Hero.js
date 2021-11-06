import heroImage from "../img/heroImage.png";
import Circle from "../../../components/Circle";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="text">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello...
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I am Abdulrahman
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I am a Web devoloper!
        </motion.h3>
      </div>
      <div className="img">
        <motion.img
          src={heroImage}
          initial={{ scale: "150%", opacity: 0 }}
          animate={{ scale: "100%", opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2, ease: "anticipate" }}
        />
      </div>
      <Circle />
    </div>
  );
};

export default Hero;
