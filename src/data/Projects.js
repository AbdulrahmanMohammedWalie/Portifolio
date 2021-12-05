import Logo from "../img/Logo.png";

const ProjectsData = () => {
  return [
    {
      name: "This Website",
      logo: Logo,
      desc: "MY PORTIFOLIO",
      link: __dirname,
    },
    {
      name: "Todo List",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Id4Mq28I0vUWogVP9cFN1U2drmHlxhpzPQ&usqp=CAU",
      desc: "A simulation for a TodoList",
      link: "https://adoring-pare-2535fb.netlify.app",
    },
    {
      name: "Beat Maker",
      logo: "data:image/png;base64,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",
      desc: "Music Time!!",
      link: "https://clever-raman-40f758.netlify.app",
    },
  ];
};

export default ProjectsData();
