import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useStyles from "../styles/projectNavButton-style.js";

function ProjectNavButton() {
    const [ref, inView] = useInView();
  const { navButtonCtn, btnLeft, btnRight } = useStyles({inView});
  return (
    <div className={navButtonCtn} ref={ref}>
      <div className={btnLeft}>
        <BsChevronLeft />
        <div>
          <Link to="/portfolio/the-montessori-diary">The Montessori Diary</Link>
          <p> Previous Project </p>
        </div>
      </div>
      <div className={btnRight}>
        <div>
          <Link to="/portfolio/the-montessori-diary">GitHub Dev App</Link>
          <p> Next Project </p>
        </div>
        <BsChevronRight />
      </div>
    </div>
  );
}

export default ProjectNavButton;
