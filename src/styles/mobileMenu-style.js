import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  mobileMenuCtn: {
    background: colors.secondaryLightPink,
    padding: "1rem 3rem",
    position: "absolute",
    zIndex: "100",
    top: "3rem",
    right: 0,
    "& ul": {
      marginTop: "1.5rem",
      "& li": {
        textTransform: "uppercase",
        listStyleType: "none",
        marginBottom: "1.25rem",
        "&:hover $navLinkDecor": {
          width: "100%",
        },
        "& a": {
          color: "#fff",
          fontSize: "1.25rem",
        },
      },
    },
    navlinkDecor: {
      width: 0,
      height: "2px",
      background: colors.primaryDarkGreen,
      transition: "all 0.5s ease-in",
    },
  },
});

export default useStyles;
