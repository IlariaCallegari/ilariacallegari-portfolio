import { useInView } from "react-intersection-observer";
import ProjOnePreviewOne from "../assets/desktop/Project-1-PortfolioPage-MainImg.png";
import ProjOnePreviewTwo from "../assets/desktop/Project-1-SingleProject-MobileDisplay.png";
import ProjTwoPreviewOne from "../assets/desktop/Project-2-PortfolioPage-MainImg.png";
import ProjTwoPreviewTwo from "../assets/desktop/Project-2-SingleProject-MobileDisplay.png";
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
    }
    return myImg;
  };

  return <img className={img} src={findImage()} alt={`${project} static preview`} ref={ref} />;
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
    }
    return myImg;
  };

  return <img className={img} src={findImage()} alt={`${project} static preview`} ref={ref} />;
}

export { StaticPreviewOne, StaticPreviewTwo };
