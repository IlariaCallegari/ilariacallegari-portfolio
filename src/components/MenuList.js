import { NavLink } from "react-router-dom";
import useStyles from "../styles/menuList-style.js";

function MenuList({ isFooter }) {
  const { menuList, footLinks } = useStyles();
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
              </NavLink>
            ) : (
              <NavLink to={link.link}>{link.name}</NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default MenuList;
