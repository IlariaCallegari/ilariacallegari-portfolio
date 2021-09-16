import useStyles from "../styles/technologies-style";
import { useInView } from "react-intersection-observer";
import ReactToolTip from "react-tooltip";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaWordpress,
  FaGitAlt,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiAdobexd,
  SiMongodb,
  SiVisualstudiocode,
  SiMaterialUi,
} from "react-icons/si";
import React from "react";
function Stack() {
  const [ref, inView] = useInView();
  const { mainCtn, techCtn, skillsCtn } = useStyles(inView);

  return (
    <section className={mainCtn} ref={ref}>
      <h2>Technologies</h2>
      <div className={skillsCtn}>
        <h3>My Stack</h3>
        <div className={techCtn}>
          <div data-tip data-for="htmlTip">
            <FaHtml5 size="2rem" />
            <p>Html5</p>
          </div>
          <ReactToolTip
            id="htmlTip"
            place="top"
            effect="float"
            data-multiline
            backgroundColor="#95BAB7"
          >
            Semantic markup. <br /> To give developers and browsers more details{" "}
            <br /> about the page structure.
          </ReactToolTip>
          <div data-tip data-for="cssTip">
            <FaCss3 size="2rem" />
            <p>CSS3</p>
          </div>
          <ReactToolTip
            id="cssTip"
            place="top"
            effect="float"
            data-multiline
            backgroundColor="#95BAB7"
          >
            To give users the best experience.
          </ReactToolTip>
          <div data-tip data-for="JSTip">
            <SiJavascript size="2rem" />
            <p>JavaScript</p>
          </div>
          <ReactToolTip
            id="JSTip"
            place="top"
            effect="float"
            data-multiline
            backgroundColor="#95BAB7"
          >
            I've spent quite some time <br /> building a strong foundation on
            <br /> Vanilla JS. I prefer it, than using JQuery.
          </ReactToolTip>
          <div data-tip data-for="sassTip">
            <FaSass size="2rem" />
            <p>Sass</p>
          </div>
          <ReactToolTip
            id="sassTip"
            place="top"
            effect="float"
            data-multiline
            backgroundColor="#95BAB7"
          >
            When not using a JS framework, <br />I like to implement my own
            styling <br />
            by using SASS.
          </ReactToolTip>
          <div data-tip data-for="reactTip">
            <FaReact size="2rem" />
            <p>ReactJS</p>
          </div>
          <ReactToolTip
            id="reactTip"
            place="top"
            effect="float"
            data-multiline
            backgroundColor="#95BAB7"
          >
            React has quickly become my favourite <br /> library to create
            beautiful UI <br /> and smooth UX
          </ReactToolTip>
          <div data-tip data-for="materialTip">
            <SiMaterialUi size="2rem" />
            <p>Material UI</p>
          </div>
          <ReactToolTip
            id="materialTip"
            place="top"
            effect="float"
            data-multiline
            backgroundColor="#95BAB7"
          >
            When in need of a UI component <br /> that might require a bit of
            configuration, <br />
            Material UI is my go to library.
          </ReactToolTip>
          <div data-tip data-for="mongoTip">
            <SiMongodb size="2rem" />
            <p>MongoDB</p>
          </div>
          <ReactToolTip
            id="mongoTip"
            data-multiline
            place="top"
            effect="float"
            backgroundColor="#95BAB7"
          >
            The DB I have use the most <br />
            when building full-stack apps.
          </ReactToolTip>
          <div data-tip data-for="wordpressTip">
            <FaWordpress size="2rem" />
            <p>WordPress</p>
          </div>
          <ReactToolTip
            id="wordpressTip"
            place="top"
            effect="float"
            backgroundColor="#95BAB7"
            data-multiline
          >
            For small businesses and external clients, <br /> I usually build
            their websites with WP, <br /> to give them the opportunity <br />{" "}
            to make the best use of their website, <br /> without having to ask
            for my services.
          </ReactToolTip>
        </div>
      </div>
      <div className={skillsCtn}>
        <h3>Wireframing</h3>
        <div className={techCtn}>
          <div data-tip data-for="adobeTip">
            <SiAdobexd size="2rem" />
            <p>AdobeXD</p>
          </div>
          <ReactToolTip
            id="adobeTip"
            place="top"
            effect="float"
            backgroundColor="#95BAB7"
            data-multiline
          >
            When necessary, I like prototyping <br /> in AdobeXD or Figma. I
            especially like Figma, <br /> as it returns the perfect CSS code.
          </ReactToolTip>
          <div data-tip data-for="figmaTip">
            <FaFigma size="2rem" />
            <p>Figma</p>
          </div>
          <ReactToolTip
            id="figmaTip"
            place="top"
            effect="float"
            backgroundColor="#95BAB7"
            data-multiline
          >
            When necessary, I like prototyping <br /> in AdobeXD or Figma. I
            especially like Figma, <br /> as it returns the perfect CSS code.
          </ReactToolTip>
        </div>
      </div>
      <div className={skillsCtn}>
        <h3>Dev Tools</h3>
        <div className={techCtn}>
          <div data-tip data-for="VSCodeTip">
            <SiVisualstudiocode size="2rem" />
            <p>VSCode</p>
          </div>
          <ReactToolTip
            id="VSCodeTip"
            place="top"
            effect="float"
            backgroundColor="#95BAB7"
            data-multiline
          >
            My code editor of choice.
          </ReactToolTip>
          <div data-tip data-for="gitTip">
            <FaGitAlt size="2rem" />
            <p>Git</p>
          </div>
          <ReactToolTip
            id="gitTip"
            place="top"
            effect="float"
            backgroundColor="#95BAB7"
            data-multiline
          >
            Version Control. <br />
            The best way to manage my code.
          </ReactToolTip>
          <div data-tip data-for="githubTip">
            <FaGithub size="2rem" />
            <p>GitHub</p>
          </div>
          <ReactToolTip
            id="githubTip"
            place="top"
            effect="float"
            backgroundColor="#95BAB7"
            data-multiline
          >
            Where I store all my projects.
          </ReactToolTip>
        </div>
      </div>
    </section>
  );
}

export default Stack;
