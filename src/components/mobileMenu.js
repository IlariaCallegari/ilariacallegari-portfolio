import { NavLink } from "react-router-dom";
import links from "../utils/links";
import useStyles from "../styles/mobileMenu-style";

function MobileMenu() {
  const { mobileMenuCtn, menuList, navLinkDecor } = useStyles();
  return (
    <div className={mobileMenuCtn}>
      <ul className={menuList}>
        {links.map((link) => {
          return (
            <li key={link.name}>
              <NavLink to={link.link}>
                {link.name}
                <div className={navLinkDecor}></div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileMenu;
