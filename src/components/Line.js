import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Line = ({ delay }) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const Animation = useAnimation();
  useEffect(() => {
    if (inView) {
      Animation.start({
        x: 0,
        y: 0,
        transition: { duration: 1.5, delay: delay },
      });
    } else {
      Animation.start({ x: -100, y: 100 });
    }
  }, [inView]);
  return (
    <>
      <motion.svg
        animate={Animation}
        ref={ref}
        width="253"
        height="296"
        viewBox="0 0 253 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="201.782"
          y="-17"
          width="87"
          height="352"
          rx="43.5"
          transform="rotate(38.4287 201.782 -17)"
          fill="#001940"
        />
      </motion.svg>
    </>
  );
};

export default Line;
