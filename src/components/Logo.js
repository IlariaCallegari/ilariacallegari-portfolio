import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import useStyles from "../styles/logo-style";

function Logo() {
  const { logoNav, logoStyle } = useStyles();
  return (
    <NavLink to="/" className={logoNav}>
      <img
        className={logoStyle}
        src={logo}
        alt="ilaria callegari front end developer logo"
      />
    </NavLink>
  );
}

export default Logo;