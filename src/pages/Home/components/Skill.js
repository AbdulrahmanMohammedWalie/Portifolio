import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Skill = ({ name, logo, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ x: 0, transition: 10, delay: delay });
    } else {
      animation.start({ x: -100 });
    }
  }, [inView]);
  return (
    <motion.div ref={ref} animate={animation} className="skill">
      <FontAwesomeIcon color="#001940" size="5x" icon={logo} />
      <h1>{name}</h1>
    </motion.div>
  );
};

export default Skill;
