import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const Skills = () => {
  return [
    {
      name: "Html",
      logo: faHtml5,
    },
    {
      name: "Css",
      logo: faCss3Alt,
    },
    {
      name: "Javascript",
      logo: faJs,
    },
    {
      name: "React",
      logo: faReact,
    },
    {
      name: "Redux",
      logo: faImage,
    },
  ];
};

export default Skills();
