import useStyles from "../styles/callToAction-style";
import Button from "./Button";

function CallToAction() {
  const { callToAction, ctaHeading } = useStyles();
  return (
    <div className={callToAction}>
      <h3 className={ctaHeading}>
        Would you like to collaborate on a project?
      </h3>
      <span/>
      <Button text="Contact Me" link="/contact-me" />
    </div>
  );
}

export default CallToAction;
