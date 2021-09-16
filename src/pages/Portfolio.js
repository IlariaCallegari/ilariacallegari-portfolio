import CallToAction from "../components/CallToAction";
import ProjectPreview from "../components/ProjectPreview";

function Portfolio({ allProjects, outerWidth }) {
  return (
    <>
      {allProjects.map((project) => (
        <ProjectPreview
          project={project}
          key={project.projectId}
          outerWidth={outerWidth}
        />
      ))}
      <CallToAction />
    </>
  );
}

export default Portfolio;
