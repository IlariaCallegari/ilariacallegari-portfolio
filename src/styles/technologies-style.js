import { createUseStyles } from "react-jss";
import colors from "../utils/colors";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  mainCtn: (inView) => ({
    marginTop: "10rem",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h2": {
      width: "40%",
      borderTop: `2px solid ${colors.lightGrey}`,
      fontSize: "2.5rem",
      fontWeight: 200,
      marginBottom: "2.5rem",
      paddingTop: "2.5rem",
      textAlign: "center",
      [sizes.down("mobileL")]: {
        borderTop: "none",
        width: "100%",
        fontSize: "2rem",
        paddingTop: 0,
        textAlign: "left"
      },
    },
  }),
  skillsCtn: {
    width: "80%",
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    display: "flex",
    "& h3": {
      width: "50%",
      display: "flex",
      alignItems: "center",
      borderRight: `2px solid ${colors.lightGrey}`,
      [sizes.down("mobileL")]: {
        borderRight: "none",
      },
    },
    [sizes.down("mobileL")]: {
      width: "100%",
      flexDirection: "column",
      marginTop: 0
    },
  },
  techCtn: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "50%",
    paddingLeft: "2rem",
    [sizes.down("mobileL")]: {
      width: "100%",
      paddingLeft: 0,
      justifyContent: "flex-start",
      borderBottom: `2px solid ${colors.lightGrey}`,
      paddingBottom: "2rem",
    },
    "& div": {
      textAlign: "center",
      padding: "1rem",
      [sizes.down("mobileL")]: {
        padding: "1rem 1rem 0 0",
      },
      "&:hover svg, &:hover p": {
        color: colors.secondaryPink,
      },
      "&:hover svg": {
        transform: "scale(1.2)",
      },
      "& svg": {
        color: colors.primaryGreen,
        transition: "all 0.2s ease-in",
      },
      "& p": {
        transition: "color 0.2s ease-in",
      },
    },
  },
  [sizes.down("mobileL")]: {
    mainCtn: (inView) => ({
      marginTop: "5rem",
      alignItems: "flex-start"
    }),
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
