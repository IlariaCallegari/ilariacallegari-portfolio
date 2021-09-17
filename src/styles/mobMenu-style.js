import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  mobileMenuCtn: {
    background: colors.secondaryLightPink,
    padding: "1rem 3rem",
    position: "absolute",
    zIndex: "100",
    top: "4rem",
    right: 0,
    width: 0,
    animation: "$fade-in 0.7s ease-in forwards",
    "& ul": {
      marginTop: "1.5rem",
      "& li": {
        textTransform: "uppercase",
        listStyleType: "none",
        marginBottom: "1.25rem",
        "& a": {
          color: "#fff",
          fontSize: "1.25rem",
          transition: "color 0.3s ease-in",
          "&:hover": {
            color: colors.primaryDarkGreen,
          },
        },
      },
    },
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
      width: "100%",
    },
  },
});

export default useStyles;
