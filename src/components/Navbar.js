import Logo from "../components/Logo";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuList from "./MenuList";
import useStyles from "../styles/navbar-style";

function Navbar({ outerWidth }) {
  const { navbar } = useStyles();
  return (
    <nav className={navbar}>
      <Logo src={logo} />
      {outerWidth <= 440 ? <GiHamburgerMenu size="30" color="#95BAB7" /> : <MenuList />}
    </nav>
  );
}

export default Navbar;
