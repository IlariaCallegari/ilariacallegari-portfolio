
import Logo from "../components/Logo";
import logo from "../assets/logo.svg";
import MenuList from "./MenuList";
import useStyles from "../styles/navbar-style";

function Navbar({outerWidth}) {
  const { navbar } = useStyles();
  return (
    <nav className={navbar}>
      <Logo src={logo} />
      {outerWidth <= 430 ? null : <MenuList />}
    </nav>
  );
}

export default Navbar;
