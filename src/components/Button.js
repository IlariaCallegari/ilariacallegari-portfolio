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

export default Button;
