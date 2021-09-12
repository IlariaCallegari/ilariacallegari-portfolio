import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useStyles from "../styles/projectNavButton-style.js";

function ProjectNavButton({ nextProject, previousProject }) {
  const [ref, inView] = useInView();
  const { navButtonCtn, btnLeft, btnRight } = useStyles({ inView });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={navButtonCtn} ref={ref}>
      <Link
        className={btnLeft}
        to={previousProject.internalLink}
        onClick={scrollToTop}
      >
        <BsChevronLeft />
        <div>
          <h4>{previousProject.projectName}</h4>
          <p> Previous Project </p>
        </div>
      </Link>
      <Link
        className={btnRight}
        to={nextProject.internalLink}
        onClick={scrollToTop}
      >
        <div>
          <h4>{nextProject.projectName}</h4>
          <p> Next Project </p>
        </div>
        <BsChevronRight />
      </Link>
    </div>
  );
}

export default ProjectNavButton;
