import successSvg from "../assets/success.svg";
import NavigationLink from "./NavigationLink";
import useStyles from "../styles/successMessage-style";

function SuccessMessage() {
  const { successCtn } = useStyles();
  return (
    <div className={successCtn}>
      <img src={successSvg} alt="fireWork" />
      <h3>Woohoo!</h3>
      <h4>Congrats, your message arrived to destination!</h4>
      <p>
        Thank you for getting in touch.
        <br />I will get back to you as soon as possible.
      </p>
      <NavigationLink text="Back to homepage" link="/" />
    </div>
  );
}

export default SuccessMessage;
