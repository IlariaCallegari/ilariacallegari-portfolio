import React from "react";
import { NavLink } from "react-router-dom";

import useStyles from "../styles/logo-style";

function Logo({src}) {
  const { logoNav, logoStyle } = useStyles();
  return (
    <NavLink to="/" className={logoNav}>
      <img
        className={logoStyle}
        src={src}
        alt="ilaria callegari front end developer logo"
      />
    </NavLink>
  );
}
export default Logo;
