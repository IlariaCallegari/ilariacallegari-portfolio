import useStyles from "../styles/project-style.js";
import { useInView } from "react-intersection-observer";
import staticImgOne from "../assets/desktop/Project-1-PortfolioPage-MainImg.png";
import staticImgTwo from "../assets/desktop/Project-1-SingleProject-MobileDisplay.png";
import ProjectMainImg from "../components/ProjectMainImg.js";
import { ExternalLink } from "../components/Buttons";
import ProjectNavButton from "../components/ProjectNavButton.js";
import CallToAction from "../components/CallToAction.js";

function Project({ myProject }) {
  const [ref1, inView1] = useInView();
  const {
    projectCtn,
    leftSide,
    projectDescr,
    shortDescr,
    projectBg,
    stack,
    lessons,
    staticPreviewCtn,
  } = useStyles({ inView1 });

  return (
    <div className={projectCtn}>
      <ProjectMainImg project={myProject.project} />
      <article className={projectDescr} ref={ref1}>
        <div className={leftSide}>
          <div className={shortDescr}>
            <h3>{myProject.projectName}</h3>
            <p>{myProject.shortDescription}</p>
            <div>
              <h3>Built with</h3>
              <ul className={stack}>
                {myProject.stack.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
            <ExternalLink text="visit website" link={myProject.link} />
            {myProject.code ? (
              <ExternalLink text="visit code" link={myProject.code} />
            ) : null}
          </div>
          <div className={lessons}>
            <h3>Key Lessons</h3>
            <p dangerouslySetInnerHTML={{ __html: myProject.keyLessons }}></p>
          </div>
        </div>
        <div className={projectBg}>
          <h3>Project Background</h3>
          <p>{myProject.projectBackground}</p>
          <div className={staticPreviewCtn}>
            <h3>Static Preview</h3>
            <img src={staticImgOne} alt="static preview of website P&LW" />
            <img src={staticImgTwo} alt="static preview of website P&LW" />
          </div>
        </div>
      </article>
      <ProjectNavButton />
      <CallToAction />
    </div>
  );
}

export default Project;
