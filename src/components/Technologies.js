import useStyles from "../styles/technologies-style";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaWordpress,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiAdobexd,
  SiMongodb,
  SiVisualstudiocode,
  SiMaterialUi,
} from "react-icons/si";
function Stack() {
  const [ref, inView] = useInView();
  const { mainCtn, techCtn, skillsCtn, wireframeCtn } = useStyles(inView);
  return (
    <div className={mainCtn} ref={ref}>
      <h2>Technologies</h2>
      <div className={skillsCtn}>
        <h3>My Stack</h3>
        <div className={techCtn}>
          <div>
            <FaHtml5 />
            <p>Html5</p>
          </div>
          <div>
            <FaCss3 />
            <p>CSS3</p>
          </div>
          <div>
            <SiJavascript />
            <p>JavaScript</p>
          </div>
          <div>
            <FaSass />
            <p>Sass</p>
          </div>
          <div>
            <FaReact />
            <p>ReactJS</p>
          </div>
          <div>
            <SiMaterialUi />
            <p>Material UI</p>
          </div>
          <div>
            <SiMongodb />
            <p>SiMongodb</p>
          </div>
          <div>
            <FaWordpress />
            <p>WordPress</p>
          </div>
        </div>
      </div>
      <div className={classNames(skillsCtn, wireframeCtn)}>
        <h3>Wireframing</h3>
        <div className={techCtn}>
          <div>
            <SiAdobexd />
            <p>AdobeXD</p>
          </div>
          <div>
            <FaFigma />
            <p>Figma</p>
          </div>
        </div>
      </div>
      <div className={skillsCtn}>
        <h3>Dev Tools</h3>
        <div>
          <div className={techCtn}>
            <div>
              <SiVisualstudiocode />
              <p>Visual Studio Code</p>
            </div>
            <div>
              <FaGitAlt />
              <p>Git Version Control</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
