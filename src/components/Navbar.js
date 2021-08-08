import Logo from "../components/Logo";
import MenuList from "./MenuList";
import useStyles from "../styles/navbar-style";

function Navbar() {
  const { navbar } = useStyles();
  return (
    <nav className={navbar}>
      <Logo />
      <MenuList />
    </nav>
  );
}

export default Navbar;
