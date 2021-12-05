import ProjectsData from "../../../data/Projects";
import Project from "./Project";

const ProjectsList = () => {
  let thresh = 0;
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="list">
        {ProjectsData.map((data) => {
          thresh = thresh + 0.1;
          return (
            <Project
              name={data.name}
              logo={data.logo}
              desc={data.desc}
              link={data.link}
              thresh={thresh}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
