import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Skill = ({ name, logo, thresh }) => {
  const { ref, inView } = useInView({ threshold: thresh });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ x: 0, transition: { duration: 1 } });
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
