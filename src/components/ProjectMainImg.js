import { useInView } from "react-intersection-observer";
import ProjOneMainImg from "../assets/desktop/Project-1-SingleProject-MainImg.png";
import ProjTwoMainImg from "../assets/desktop/Project-2-SingleProject-MainImg.png";
import ProjThreeMainImg from "../assets/desktop/Project-3-SingleProject-MainImg.png";
import ProjFourMainImg from "../assets/desktop/Project-4-SingleProject-MainImg.png";
import ProjFiveMainImg from "../assets/desktop/Project-5-SingleProject-MainImg.png";
import useStyles from "../styles/project-style";

function ProjectMainImg({ project }) {
  const [ref, inView] = useInView();
  const { img } = useStyles(inView);

  let myImg;

  const findImage = () => {
    if (project === "peace-and-love-within") {
      myImg = ProjOneMainImg;
    } else if (project === "dev-job-app") {
      myImg = ProjTwoMainImg;
    } else if (project === "planets-app") {
      myImg = ProjThreeMainImg;
    } else if (project === "pinsa-romana-uk") {
      myImg = ProjFourMainImg;
    } else if (project === "the-montessori-diary") {
      myImg = ProjFiveMainImg;
    }
    return myImg;
  };

  return <img className={img} src={findImage()} alt={`${project}`} ref={ref} />;
}

export default ProjectMainImg;
