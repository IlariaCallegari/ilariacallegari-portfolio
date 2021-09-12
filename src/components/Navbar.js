import Logo from "../components/Logo";
import logo from "../assets/logo.svg";
import MenuList from "./MenuList";
import useStyles from "../styles/navbar-style";

function Navbar() {
  const { navbar } = useStyles();
  return (
    <nav className={navbar}>
      <Logo src={logo}/>
      <MenuList/>
    </nav>
  );
}

export default Navbar;
