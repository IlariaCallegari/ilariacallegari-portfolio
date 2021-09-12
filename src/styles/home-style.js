import { createUseStyles } from "react-jss";
import colors from "../utils/colors.js";

const useStyles = createUseStyles({
  heroCtn: (inView) => ({
    width: "100%",
    position: "relative",
    textAlign: "center",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
  }),
  heroImg: {
    width: "100%",
  },
  heroHeading: {
    width: "35%",
    textAlign: "left",
    background: "#fff",
    position: "absolute",
    bottom: 0,
    paddingTop: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "& h1": {
      fontSize: "2.9rem",
      fontWeight: 100,
      lineHeight: "3.5rem",
      marginTop: 0,
      marginBottom: "1.5rem",
    },
    "& a": {
      display: "inline-block",
      marginTop: "1rem",
      background: colors.secondaryPink,
      padding: "1rem 2rem",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all 0.3s ease-in",
      color: "#fff",
      "&:hover": {
        background: colors.primaryDarkGreen,
      },
    },
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
