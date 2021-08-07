import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import useStyles from "../styles/navbar-style";

function Navbar() {
  const { navbar, logoStyle, logoNav, navLinks } = useStyles();
  return (
    <nav className={navbar}>
      <NavLink to="/" className={logoNav}>
        <img
          className={logoStyle}
          src={logo}
          alt="ilaria callegari front end developer logo"
        ></img>
      </NavLink>
      <ul className={navLinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact-me">Contact Me</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
