import CallToAction from "../components/CallToAction";
import ProjectPreview from "../components/ProjectPreview";
import useGaTracker from "../utils/useGaTracker";

function Portfolio({ allProjects, outerWidth }) {
  useGaTracker()
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
