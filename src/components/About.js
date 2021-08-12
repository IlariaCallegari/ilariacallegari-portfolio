import React from "react";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/about-img.jpg";
import Button from "../components/Button";
import useStyles from "../styles/about-style";

function Home() {
  const [ref, inView] = useInView();
  const { aboutCtn, aboutDescrCtn } = useStyles(inView);
  return (
    <div className={aboutCtn} ref={ref}>
      <img src={aboutImg} alt="Ilaria Callegari" />
      <div className={aboutDescrCtn}>
        <h2 id="about">About Me</h2>
        <p>
          Freelance Web Developer looking to join a joyful team as a Front End
          Developer to work for a good cause. I invested the past year to
          retrain as a web developer, focussing my learning efforts on studying
          the MERN stack. I chose React.js as my front-end framework of choice,
          for its ability to create smooth user experiences by writing
          easy-to-read and easily scalable code. Creating harmonious and
          intuitive user experiences is my main goal, and I go the extra mile to
          make my projects work well responsively.
        </p>
        <Button text="Go to portfolio" link="/portfolio" />
      </div>
    </div>
  );
}

export default Home;
