import { useInView } from "react-intersection-observer";
import useStyles from "../styles/callToAction-style";
import {Button} from "./Buttons";

function CallToAction() {
  const [ref, inView] = useInView();
  const { callToAction, ctaHeading } = useStyles(inView);
  return (
    <section ref={ref} className={callToAction}>
      <h3 className={ctaHeading}>
        Would you like to collaborate on a project?
      </h3>
      <span/>
      <Button text="Contact Me" link="/contact-me" />
    </section>
  );
}

export default CallToAction;
