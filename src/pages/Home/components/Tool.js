import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Tool = ({ name, logo }) => {
  const [tool, toolInView] = useInView({ threshold: 1 });
  const toolAnimate = useAnimation();
  useEffect(() => {
    if (toolInView) {
      toolAnimate.start({ width: "100%", transition: { duration: 0.9 } });
    } else {
      toolAnimate.start({ width: "50%" });
    }
    console.log(toolInView);
  }, [toolInView]);
  return (
    <motion.div ref={tool} animate={toolAnimate} className="tool">
      <div className="header">
        <h1>{name}</h1>
      </div>
      <div className="img">
        <img src={logo} alt={name} />
      </div>
    </motion.div>
  );
};

export default Tool;
