import useStyles from "../styles/project-style.js";
import mainImg from "../assets/desktop/Project-1-SingleProject-MainImg.png";
import staticImgOne from "../assets/desktop/Project-1-PortfolioPage-MainImg.png";
import staticImgTwo from "../assets/desktop/Project-1-SingleProject-MobileDisplay.png";
import { ExternalLink } from "../components/Buttons";
import { SiWordpress, SiStripe } from "react-icons/si";
import ProjectNavButton from "../components/ProjectNavButton.js";
import CallToAction from "../components/CallToAction.js";

function Project() {
  const {
    projectCtn,
    projectDescr,
    shortDescr,
    projectBg,
    stack,
    staticPreviewCtn,
  } = useStyles();
  return (
    <div className={projectCtn}>
      <img src={mainImg} alt="single project" />
      <article className={projectDescr}>
        <div className={shortDescr}>
          <h3>Peace and Love Within</h3>
          <p>
            This project was developed for a client. It's an e-commerce website,
            created with WordPress. It integrates an event calendar, a Stripe
            gateway payment, and a booking system.
          </p>
          <div className={stack}>
            <SiWordpress />
            <SiStripe />
          </div>
          <ExternalLink
            text="visit website"
            link="https://peaceandlovewithin.com"
          />
        </div>
        <div className={projectBg}>
          <h3>Project Background</h3>
          <p>
            This project was developed for a client. It's an e-commerce website,
            created with WordPress. It integrates an event calendar, a Stripe
            gateway payment, and a booking system.
          </p>
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
