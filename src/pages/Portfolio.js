import CallToAction from "../components/CallToAction";
import ProjectPreview from "../components/ProjectPreview";
import projects from "../projects.js";

function Portfolio() {
  return (
    <>
      {projects.map((project) => (
        <ProjectPreview project={project} />
      ))}
      <CallToAction />
    </>
  );
}

export default Portfolio;
