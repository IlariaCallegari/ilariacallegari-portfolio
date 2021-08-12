import React from "react";
import useStyles from "../styles/contact-style";
import ContactForm from "../components/ContactForm";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role as a Front End Developer and am
            open to a wide range of opportunities. My preference would be to
            find a position in a company in the Poole/Bournemouth area. But I’m
            also happy to hear about remote opportunites in London. If
            requested, I can travel to the office once/twice a week. I’m a
            hard-working and positive person who will always approach each task
            with a sense of purpose and attention to detail. Please do feel free
            to check out my online profiles below and get in touch using the
            form.
          </p>
          <div className={linkCtn}>
            <a
              className={link}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ilariacallegari"
            >
              <FaGithub />
            </a>
            <a
              className={link}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ilariacallegari/"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </React.Fragment>
  );
}

export default Contact;
