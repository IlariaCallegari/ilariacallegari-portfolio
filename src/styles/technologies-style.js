import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

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
    },
  },
  techCtn: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "50%",
    paddingLeft: "2rem",
    "& div": {
      textAlign: "center",
      padding: "1rem",
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
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
