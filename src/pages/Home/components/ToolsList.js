import ToolsData from "../../../data/Tools";
import Tool from "./Tool";
import Circle from "../../../components/Circle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Tools = () => {
  const [h1, h1View] = useInView({ threshold: 0 });
  const h1Animate = useAnimation();
  useEffect(() => {
    if (h1View) {
      h1Animate.start({ opacity: 1, transition: { duration: 1 } });
    } else {
      h1Animate.start({ opacity: 0 });
    }
  }, [h1View]);
  return (
    <section className="tools">
      <motion.h1 ref={h1} animate={h1Animate}>
        Tools
      </motion.h1>
      {ToolsData.map((tool) => (
        <Tool name={tool.name} logo={tool.logo} key={tool.name} />
      ))}
      <Circle />
    </section>
  );
};
export default Tools;
