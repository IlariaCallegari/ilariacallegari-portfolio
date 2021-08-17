import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  navLink: {
    textTransform: "uppercase",
    transition: "all 0.5s ease-in",
    display: "inline-block",
    "&:hover $navLinkDecor": {
      width: "100%",
    },
  },
  navLinkDecor: {
    width: 0,
    height: "2px",
    background: colors.secondaryLightPink,
    transition: "all 0.5s ease-in",
  },
});

export default useStyles;
