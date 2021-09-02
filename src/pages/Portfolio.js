import useStyles from "../styles/portfolio-style";
import { useInView } from "react-intersection-observer";
import CallToAction from "../components/CallToAction";
import { Button } from "../components/Buttons";
import ImgPeaceAndLoveWithin from "../assets/desktop/Project-1-PortfolioPage-MainImg.png";

function Portfolio() {
  const [ref, inView] = useInView();
  const { projectCtn, imgCtn, projectImg, projectDescr, projectHeading } =
    useStyles(inView);
  return (
    <>
      <div className={projectCtn} ref={ref}>
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
          <Button
            text="view project"
            link="/portfolio/peace-and-love-within/"
          />
        </div>
      </div>
      <CallToAction />
    </>
  );
}

export default Portfolio;
