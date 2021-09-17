import React from "react";
import useStyles from "../styles/contact-style";
import Form from "../components/Form";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

function Contact() {
  const [ref, inView] = useInView();
  const { getInTouchCtn, headingCtn, heading, descriptionCtn, linkCtn, link } =
    useStyles(inView);
  return (
    <React.Fragment>
      <div className={getInTouchCtn} ref={ref}>
        <div className={headingCtn}>
          <h3 className={heading}>Get In Touch</h3>
        </div>
        <div className={descriptionCtn}>
          <h3>🖥️ Companies</h3>
          <p>
            I’m currently looking for a new role as a Front End Developer and I
            am open to a wide range of opportunities. My preference would be to
            find a position in a company in the Poole/Bournemouth (UK) area. But
            I’m also happy to hear about remote opportunites in London or in the
            UK. Check out my online profiles and get in touch using the form
            down below.
          </p>
          <h3>🛒 Private clients</h3>
          <p>
            Are you looking for a Web Developer to kickstart your business? Do
            you want to see your business growing exponentially, thanks to your
            professional online presence? You are in the right place! In the
            past year, I've helped small independent businesses finding their
            voice online. Together we've designed and developed modern,
            responsive and functional websites. Do get in touch! Together we can
            make it happen.
          </p>
          <div className={linkCtn}>
            <a
              className={link}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ilariacallegari"
            >
              <FaGithub size="30" />
            </a>
            <a
              className={link}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ilariacallegari/"
            >
              <FaLinkedin size="30"/>
            </a>
            <a
              className={link}
              target="_blank"
              rel="noreferrer"
              href="https://www.fiverr.com/ilariacallegari/create-a-responsive-and-modern-website-for-your-business"
            >
              <SiFiverr size="30" />
            </a>
          </div>
        </div>
      </div>
      <Form />
    </React.Fragment>
  );
}

export default Contact;
