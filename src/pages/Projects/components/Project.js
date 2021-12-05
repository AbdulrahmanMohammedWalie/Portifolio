import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Project = ({ name, desc, logo, link }) => {
  const [ref, inView] = useInView({ threshold: 0 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ x: 0, transition: { duration: 1 } });
    } else {
      animation.start({ x: "-100%" });
    }
  }, [inView]);
  return (
    <motion.div
      className="project mouse"
      onClick={() => {
        window.open(link);
      }}
      ref={ref}
      animate={animation}
    >
      <div className="text mouse">
        <h2 className="h2 mouse">{name}</h2>
        <h4 className="h4 mouse">{desc}</h4>
      </div>
      <div className="img mouse">
        <img src={logo} alt={name} className="image mouse" />
      </div>
    </motion.div>
  );
};
export default Project;
