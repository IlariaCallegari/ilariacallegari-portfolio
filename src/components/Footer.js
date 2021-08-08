import Logo from "../components/Logo";
import MenuList from "./MenuList";
import useStyles from "../styles/footer-style";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const { footer, link } = useStyles();
  return (
    <div className={footer}>
      <Logo />
      <MenuList />
      <div>
        <a
          className={link}
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com//ilariacallegari/"
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
  );
}

export default Footer;
