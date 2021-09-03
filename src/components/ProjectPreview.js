import React from "react";
import { Button } from "../components/Buttons";
import useStyles from "../styles/portfolio-style";
import { useInView } from "react-intersection-observer";
import { StaticPreviewOne } from "./StaticPreviewImgs";

function ProjectPreview({ project }) {
  const [ref, inView] = useInView();
  const { projectCtn, imgCtn, projectImg, projectDescr, projectHeading } =
    useStyles(inView);
  return (
    <div className={projectCtn} ref={ref}>
      <div className={imgCtn}>
        <StaticPreviewOne project={project.project}/>
      </div>
      <div className={projectDescr}>
        <h2 className={projectHeading}>{project.projectName}</h2>
        <p>{project.shortDescription}</p>
        <Button text="view project" link={project.internalLink} />
      </div>
    </div>
  );
}

export default ProjectPreview;
