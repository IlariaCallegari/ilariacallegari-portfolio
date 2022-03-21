import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/about-me-pic.png";
import aboutImgTablet from "../assets/about-me-pic-tablet.png";
import { Button } from "../components/Buttons";
import useStyles from "../styles/about-style";

function Home({ outerWidth }) {
  const [ref, inView] = useInView();
  const { aboutCtn, img, aboutDescrCtn } = useStyles(inView);
  const desktopImg = (
    <img className={img} src={aboutImg} alt="Ilaria Callegari" />
  );
  const tabletImg = (
    <img className={img} src={aboutImgTablet} alt="Ilaria Callegari" />
  );

  return (
    <section className={aboutCtn} ref={ref}>
      {outerWidth >= 950 || outerWidth <= 430 ? desktopImg : tabletImg}
      <div className={aboutDescrCtn}>
        <h2 id="about">About Me</h2>
        <article>
          <p>
            Hi, I'm Ilaria, a Creative Front End Developer. In my previous life,
            I was a Ph.D. student in Anthropology, passionate about human
            languages and cultures. Two years ago, after suffering from a major
            academic heartbreak, my passion shifted from human languages to
            computer languages, and that's where my career as a web developer
            begins.
          </p>
          <br />
          <p>
            Fast-forwarding to today, I build things for the web in
            JavaScript, and I am a great fan of React.js. I've also dipped my
            toes into Python, and I don't exclude building something with it one
            day.
          </p>
          <br />
          <p>
            At present, I am using my skills to maintain the codebase and to
            ideate, and build new products for a company that offers geospatial
            solutions for the insurance industry, which is indeed very much fun.
          </p>
        </article>
        <Button text="Go to portfolio" link="/portfolio" />
      </div>
    </section>
  );
}

export default Home;
