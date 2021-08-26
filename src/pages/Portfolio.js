import useStyles from "../styles/portfolio-style";
import CallToAction from "../components/CallToAction";
import Button from "../components/Button";
import ImgPeaceAndLoveWithin from "../assets/Desktop - Portfolio Main Images/Project 1.png";

function Portfolio() {
  const { projectCtn, imgCtn, projectImg, projectDescr, projectHeading } =
    useStyles();
  return (
    <div>
      <div className={projectCtn}>
        <div className={imgCtn}>
          <img className={projectImg} src={ImgPeaceAndLoveWithin} alt="" />
        </div>
        <div className={projectDescr}>
          <h2 className={projectHeading}>Peace and Love Within</h2>
          <p>
            This project was developed for a client. It's an e-commerce website,
            created with WordPress. It integrates an event calendar, a Stripe
            gateway payment, and a booking system.
          </p>
          <Button text="view project" link="/portfolio/peace-and-love-within/"/>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}

export default Portfolio;
