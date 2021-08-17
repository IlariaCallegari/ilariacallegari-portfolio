import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../styles/navigationLink-style";

function NavigationLink({ text, link }) {
  const { navLink, navLinkDecor } = useStyles();
  return (
    <Link className={navLink} to={link}>
      {text}
      <div className={navLinkDecor}></div>
    </Link>
  );
}

export default NavigationLink;
