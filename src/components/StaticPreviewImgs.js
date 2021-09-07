import { useInView } from "react-intersection-observer";
import ProjOnePreviewOne from "../assets/desktop/Project-1-PortfolioPage-MainImg.png";
import ProjOnePreviewTwo from "../assets/desktop/Project-1-SingleProject-MobileDisplay.png";
import ProjTwoPreviewOne from "../assets/desktop/Project-2-PortfolioPage-MainImg.png";
import ProjTwoPreviewTwo from "../assets/desktop/Project-2-SingleProject-MobileDisplay.png";
import ProjThreePreviewOne from "../assets/desktop/Project-3-PortfolioPage-MainImg.png";
import ProjThreePreviewTwo from "../assets/desktop/Project-3-SingleProject-MobileDisplay.png";
import ProjFourPreviewOne from "../assets/desktop/Project-4-PortfolioPage-MainImg.png";
import ProjFourPreviewTwo from "../assets/desktop/Project-4-SingleProject-MobileDisplay.png";
import useStyles from "../styles/project-style";

function StaticPreviewOne({ project }) {
  const [ref, inView] = useInView();
  const { img } = useStyles(inView);

  let myImg;

  const findImage = () => {
    if (project === "peace-and-love-within") {
      myImg = ProjOnePreviewOne;
    } else if (project === "dev-job-app") {
      myImg = ProjTwoPreviewOne;
    } else if (project === "planets-app") {
      myImg = ProjThreePreviewOne;
    } else if (project === "pinsa-romana-uk") {
      myImg = ProjFourPreviewOne;
    }
    return myImg;
  };

  return (
    <img
      className={img}
      src={findImage()}
      alt={`${project} static preview`}
      ref={ref}
    />
  );
}

function StaticPreviewTwo({ project }) {
  const [ref, inView] = useInView();
  const { img } = useStyles(inView);

  let myImg;

  const findImage = () => {
    if (project === "peace-and-love-within") {
      myImg = ProjOnePreviewTwo;
    } else if (project === "dev-job-app") {
      myImg = ProjTwoPreviewTwo;
    } else if (project === "planets-app") {
      myImg = ProjThreePreviewTwo;
      return myImg;
    } else if (project === "pinsa-romana-uk") {
      myImg = ProjFourPreviewTwo;
    }
    return myImg;
  };

  return (
    <img
      className={img}
      src={findImage()}
      alt={`${project} static preview`}
      ref={ref}
    />
  );
}

export { StaticPreviewOne, StaticPreviewTwo };
