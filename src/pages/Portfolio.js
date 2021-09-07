import CallToAction from "../components/CallToAction";
import ProjectPreview from "../components/ProjectPreview";

function Portfolio({allProjects}) {
  return (
    <>
      {allProjects.map((project) => (
        <ProjectPreview project={project} key={project.projectId} />
      ))}
      <CallToAction />
    </>
  );
}

export default Portfolio;
