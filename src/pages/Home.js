import React from "react";
import useStyles from "../styles/home-style";
import mainImage from "../assets/main-img.svg";
import aboutImg from "../assets/about-img.jpg";
import { BsChevronDoubleDown } from "react-icons/bs";
import CallToAction from "../components/CallToAction";
import Button from "../components/Button";

function Home() {
  const { heroCtn, heroImg, heroHeading, aboutCtn, aboutDescrCtn } =
    useStyles();
  return (
    <React.Fragment>
      <div className={heroCtn}>
        <img
          className={heroImg}
          src={mainImage}
          alt="woman sitting in meditation"
        />
        <div className={heroHeading}>
          <h1>Hi, I am Ilaria, your next Front End Developer</h1>
          <a href="#about">
            <span>
              <BsChevronDoubleDown />
            </span>
            About Me
          </a>
        </div>
      </div>
      <div className={aboutCtn}>
        <img src={aboutImg} alt="Ilaria Callegari" />
        <div className={aboutDescrCtn}>
          <h2 id="about">About Me</h2>
          <p>
            Freelance Web Developer looking to join a joyful team as a Front End
            Developer to work for a good cause. I invested the past year to
            retrain as a web developer, focussing my learning efforts on
            studying the MERN stack. I chose React.js as my front-end framework
            of choice, for its ability to create smooth user experiences by
            writing easy-to-read and easily scalable code. Creating harmonious
            and intuitive user experiences is my main goal, and I go the extra
            mile to make my projects work well responsively.
          </p>
          <Button text="Go to portfolio" link="/portfolio" />
        </div>
      </div>
      <CallToAction />
    </React.Fragment>
  );
}

export default Home;
