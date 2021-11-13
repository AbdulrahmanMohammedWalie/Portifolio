import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Line from "../../../components/Line";
import SkillsData from "../../../data/Skills";
import Skill from "./Skill";
import { useEffect } from "react";

const Skills = () => {
  const [h1, h1View] = useInView({ threshold: 0 });
  const h1Animate = useAnimation();
  let delay = 0;
  useEffect(() => {
    if (h1View) {
      h1Animate.start({ opacity: 1, transition: { duration: 0.5 } });
    } else {
      h1Animate.start({ opacity: 0 });
    }
  }, [h1View]);
  return (
    <section className="skills">
      <header>
        <motion.h1 animate={h1Animate} ref={h1}>
          Skills
        </motion.h1>
        <div className="lines">
          <Line delay={0} />
          <Line delay={0.5} />
        </div>
      </header>
      <div className="skillsContainer">
        {SkillsData.map((skill) => {
          delay = delay + 0.5;
          return (
            <Skill
              name={skill.name}
              logo={skill.logo}
              key={skill.name}
              delay={delay}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
