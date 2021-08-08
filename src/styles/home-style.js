import { createUseStyles } from "react-jss";
import colors from "../utils/colors.js";

const useStyles = createUseStyles({
  heroCtn: {
    width: "100%",
    position: "relative",
    textAlign: "center",
  },
  heroImg: {
    width: "inherit",
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
      transition: "all 0.3s ease-in",
      "& span": {
        display: "inline-block",
        marginRight: "1rem",
      },
      "&:hover": {
        color: "#fff",
      },
    },
  },
  aboutCtn: {
    marginTop: "10rem",
    display: "flex",
  },
  aboutDescrCtn: {
    margin: "0 10rem",
    borderTop: `2px solid ${colors.lightGrey}`,
    borderBottom: `2px solid ${colors.lightGrey}`,
    paddingBottom: "2.5rem",
    "& h2": {
      marginTop: "2.5rem",
      fontSize: "2.5rem",
      fontWeight: 200,
    },
    "& p": {
      marginBottom: "2rem",
    },
  },
});

export default useStyles;
