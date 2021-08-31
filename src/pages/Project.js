import useStyles from "../styles/project-style.js";
import mainImg from "../assets/desktop/Project-1-SingleProject-MainImg.png";
import { ExternalLink } from "../components/Buttons";
import { SiWordpress, SiStripe } from "react-icons/si";

function Project() {
  const { projectCtn, projectDescr, shortDescr, projectBg, skills } =
    useStyles();
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
          <div className={skills}>
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
        </div>
      </article>
    </div>
  );
}

export default Project;
