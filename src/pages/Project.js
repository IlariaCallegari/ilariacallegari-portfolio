import { useEffect, useState } from "react";
import useStyles from "../styles/project-style.js";
import { useInView } from "react-intersection-observer";
import ProjectMainImg from "../components/ProjectMainImg.js";
import { ExternalLink } from "../components/Buttons";
import ProjectNavButton from "../components/ProjectNavButton.js";
import CallToAction from "../components/CallToAction.js";
import {
  StaticPreviewOne,
  StaticPreviewTwo,
} from "../components/StaticPreviewImgs.js";

function Project({ myProject, allProjects }) {
  const [nextProject, setNextProject] = useState({});
  const [previousProject, setPreviousProject] = useState({});
  const [ref, inView] = useInView();

  useEffect(() => {
    const idx = allProjects.indexOf(myProject);

    setNextProject(
      allProjects[idx + 1] === undefined ? allProjects[0] : allProjects[idx + 1]
    );

    setPreviousProject(
      allProjects[idx - 1] === undefined
        ? allProjects[allProjects.length - 1]
        : allProjects[idx - 1]
    );
  }, [myProject, allProjects]);

  const {
    projectCtn,
    general,
    projectDescr,
    shortDescr,
    projName,
    projectBg,
    stackCtn,
    stack,
    lessons,
    staticPreviewCtn,
  } = useStyles({ inView });

  const keyLessonsSession = (
    <div className={lessons}>
      <h3>Key Lessons</h3>
      <p dangerouslySetInnerHTML={{ __html: myProject.keyLessons }}></p>
    </div>
  );

  return (
    <div className={projectCtn}>
      <ProjectMainImg project={myProject.project} />
      <article className={projectDescr} ref={ref}>
        <div className={general}>
          <div className={shortDescr}>
            <div className={projName}>
              <h2>{myProject.projectName}</h2>
              <p>{myProject.shortDescription}</p>
            </div>
            <div className={stackCtn}>
              <h3>Built with</h3>
              <ul className={stack}>
                {myProject.stack.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
            {myProject.code ? (
              <>
                <ExternalLink text="visit deployment" link={myProject.link} />
                <ExternalLink text="visit code" link={myProject.code} />
              </>
            ) : (
              <ExternalLink text="visit website" link={myProject.link} />
            )}
          </div>
          {myProject.keyLessons && keyLessonsSession}
        </div>
        <div className={projectBg}>
          <h3>Project Background</h3>
          <p>{myProject.projectBackground}</p>
          <div className={staticPreviewCtn}>
            <h3>Static Preview</h3>
            <StaticPreviewOne project={myProject.project} />
            <StaticPreviewTwo project={myProject.project} />
          </div>
        </div>
      </article>
      <ProjectNavButton
        nextProject={nextProject}
        previousProject={previousProject}
      />
      <CallToAction />
    </div>
  );
}

export default Project;
