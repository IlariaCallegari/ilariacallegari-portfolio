import { createUseStyles } from "react-jss";
import colors from "../utils/colors";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  menuList: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
    [sizes.down("tablet")]: {
      width: "40%",
    },
    [sizes.down("mobileL")]: {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    "& li": {
      listStyleType: "none",
      textTransform: "uppercase",
      "&:hover $navLinkDecor": {
        width: "100%",
      },
    },
  },
  footLinks: {
    color: "#fff",
    transition: "color 0.2s ease-in",
    "&:hover": {
      color: colors.primaryDarkGreen,
    },
  },
  navLinkDecor: {
    width: 0,
    height: "2px",
    background: colors.primaryDarkGreen,
    transition: "all 0.5s ease-in",
  },
});

export default useStyles;
