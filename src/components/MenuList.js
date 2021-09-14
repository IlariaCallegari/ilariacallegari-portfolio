import { NavLink } from "react-router-dom";
import useStyles from "../styles/menuList-style.js";

function MenuList({ isFooter }) {
  const { menuList, footLinks, navLinkDecor } = useStyles();
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact me",
      link: "/contact-me",
    },
  ];
  return (
    <ul className={menuList}>
      {links.map((link) => {
        return (
          <li key={link.name}>
            {isFooter ? (
              <NavLink to={link.link} className={footLinks}>
                {link.name}
                <div className={navLinkDecor}></div>
              </NavLink>
            ) : (
              <NavLink to={link.link}>
                {link.name}
                <div className={navLinkDecor}></div>
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default MenuList;
