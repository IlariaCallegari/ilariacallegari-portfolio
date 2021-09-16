import { NavLink } from "react-router-dom";
import links from "../utils/links";
import useStyles from "../styles/mobMenu-style";

function MobMenu({toggleMenu}) {
  const { mobileMenuCtn} = useStyles();
  return (
    <div className={mobileMenuCtn}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.name}>
              <NavLink to={link.link} onClick={toggleMenu}>
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobMenu;
