import { useState } from "react";
import Logo from "../components/Logo";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import MenuList from "./MenuList";
import MobileMenu from "./MobileMenu";
import useStyles from "../styles/navbar-style";
import colors from "../utils/colors";

function Navbar({ outerWidth }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { navbar } = useStyles();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const hamMenu =
    outerWidth <= 440 ? (
      <GiHamburgerMenu
        size="30"
        color={colors.primaryGreen}
        onClick={toggleMenu}
      />
    ) : (
      <MenuList />
    );

  const closeMenu = (
    <>
      <IoMdClose size="30" color={colors.secondaryPink} onClick={toggleMenu} />
      <MobileMenu />
    </>
  );

  return (
    <nav className={navbar}>
      <Logo src={logo} />
      {menuIsOpen ? closeMenu : hamMenu}
    </nav>
  );
}

export default Navbar;
