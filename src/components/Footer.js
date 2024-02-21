import Logo from "../components/Logo";
import MenuList from "./MenuList";
import useStyles from "../styles/footer-style";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-white.svg";

function Footer() {
  const { footer, iconCtn, link } = useStyles();
  return (
    <footer className={footer}>
      <Logo src={logo} />
      <MenuList isFooter />
      <div className={iconCtn}>
        <a
          className={link}
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com//ilariacallegari/"
        >
          <FaGithub size="30" />
        </a>
        <a
          className={link}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ilariacallegari/"
        >
          <FaLinkedin size="30" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
