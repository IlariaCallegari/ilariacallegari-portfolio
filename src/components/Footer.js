import Logo from "../components/Logo";
import MenuList from "./MenuList";
import useStyles from "../styles/footer-style";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
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
        <a
          className={link}
          target="_blank"
          rel="noreferrer"
          href="https://www.fiverr.com/ilariacallegari/create-a-responsive-and-modern-website-for-your-business"
        >
          <SiFiverr />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
