import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import mainImage from "../assets/main-img.svg";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import useStyles from "../styles/home-style";

function Home() {
  const [ref, inView] = useInView();
  const { heroCtn, heroImg, heroHeading } = useStyles(inView);
  return (
    <React.Fragment>
      <div className={heroCtn} ref={ref}>
        <img
          className={heroImg}
          src={mainImage}
          alt="woman sitting in meditation"
        />
        <div className={heroHeading}>
          <h1>Hi, I am Ilaria, your next Front End Developer</h1>
          <Link to="about" smooth={true}>
            About Me
          </Link>
        </div>
      </div>
      <About />
      <CallToAction />
    </React.Fragment>
  );
}

export default Home;
