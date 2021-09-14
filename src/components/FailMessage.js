import failSvg from "../assets/fail.svg";
import NavigationLink from "./NavigationLink";
import useStyles from "../styles/messages-style";

function FailMessage() {
  const { messageCtn } = useStyles();
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className={messageCtn}>
      <img src={failSvg} alt="fireWork" />
      <h3>Oh no!</h3>
      <h4>Something went wrong!</h4>
      <p>
        Refresh the page and try again in a few moments.
        <br />
        If you still can't send me a message than send me an email directly to{" "}
        <br />{" "}
        <a href="mailto:ilaria@ilariacallegari.com?subject=We really want to hire you, Ilaria!">
          ilaria@ilariacallegari.com
        </a>
      </p>
      <NavigationLink text="Refresh page" link="" onClick={refreshPage} />
    </div>
  );
}
export default FailMessage;
