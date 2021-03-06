import Logo from "../components/Logo";
import MenuList from "./MenuList";
import useStyles from "../styles/footer-style";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
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
        <a
          className={link}
          target="_blank"
          rel="noreferrer"
          href="https://www.fiverr.com/ilariacallegari/create-a-responsive-and-modern-website-for-your-business"
        >
          <SiFiverr size="30" />
        </a>
        <a
          className={link}
          target="_blank"
          rel="noreferrer"
          href="https://www.upwork.com/freelancers/~01e7f7fff79e457fdc"
        >
          <SiUpwork size="30" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
