import { NavLink } from "react-router-dom";
import useStyles from "../styles/menuList-style";

function MenuList() {
  const { menuList } = useStyles();
  return (
    <ul className={menuList}>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/contact-me">Contact Me</NavLink>
      </li>
    </ul>
  );
}

export default MenuList;
