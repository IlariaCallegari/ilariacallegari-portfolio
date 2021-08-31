import { Link } from "react-router-dom";
import useStyles from "../styles/button-style";

function Button({ text, link }) {
  const { btn } = useStyles();
  return (
    <Link className={btn} to={link}>
      {text}
    </Link>
  );
}

function ExternalLink({ text, link }) {
  const { btn } = useStyles();
  return (
    <a className={btn} target="_blank" rel="noreferrer" href={link}>
      {text}
    </a>
  );
}

export {Button, ExternalLink};
