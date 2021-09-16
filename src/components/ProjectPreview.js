import React from "react";
import { Button } from "../components/Buttons";
import useStyles from "../styles/portfolio-style";
import { useInView } from "react-intersection-observer";
import { StaticPreviewOne } from "./StaticPreviewImgs";

function ProjectPreview({ project, outerWidth }) {
  const [ref, inView] = useInView();
  const { projectCtn, imgCtn, projectDescr, projectHeading } =
    useStyles(inView);

  const imgOnLeft = (
    <>
      <div className={imgCtn}>
        <StaticPreviewOne project={project.project} />
      </div>
      <div className={projectDescr}>
        <h2 className={projectHeading}>{project.projectName}</h2>
        <p>{project.shortDescription}</p>
        <Button text="view project" link={project.internalLink} />
      </div>
    </>
  );

  const imgOnRight = (
    <>
      <div className={projectDescr}>
        <h2 className={projectHeading}>{project.projectName}</h2>
        <p>{project.shortDescription}</p>
        <Button text="view project" link={project.internalLink} />
      </div>
      <div className={imgCtn}>
        <StaticPreviewOne project={project.project} />
      </div>
    </>
  );

  return (
    <div className={projectCtn} ref={ref}>
      {outerWidth <= 440
        ? imgOnLeft
        : project.projectId % 2 === 1
        ? imgOnLeft
        : imgOnRight}
    </div>
  );
}

export default ProjectPreview;
