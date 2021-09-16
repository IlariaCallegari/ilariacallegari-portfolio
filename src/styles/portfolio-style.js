import { createUseStyles } from "react-jss";
import colors from "../utils/colors";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  projectCtn: (inView) => ({
    display: "flex",
    width: "100%",
    marginTop: "3rem",
    marginBottom: "10rem",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
  }),
  imgCtn: {
    width: "50%",
    "& img": {
      height: "auto",
      width: "100%",
    },
    [sizes.down("mobileL")]: {
      width: "100%",
      marginBottom: "1rem"
    },
  },
  projectImg: {
    width: "100%",
    height: "auto",
  },
  projectDescr: {
    width: "50%",
    borderTop: `2px solid ${colors.lightGrey}`,
    borderBottom: `2px solid ${colors.lightGrey}`,
    marginLeft: "10%",
    marginRight: "10%",
    padding: "2.5rem 0",
    [sizes.down("tablet")]: {
      marginLeft: "5%",
      marginRight: "5%",
      padding: "1.5rem 0",
    },
    [sizes.down("mobileL")]: {
      width: "100%",
    },
    "& h2": {
      fontSize: "2.5rem",
      fontWeight: 200,
      lineHeight: "3rem",
      marginBottom: "2rem",
      [sizes.down("tablet")]: {
        fontSize: "2rem",
        marginBottom: "1.5rem",
      },
    },
    "& p": {
      marginBottom: "2.5rem",
      [sizes.down("tablet")]: {
        marginBottom: "2rem",
      },
    },
  },
  [sizes.down("tablet")]: {
    projectCtn: (inView) => ({
      display: "flex",
      alignItems: "center",
    }),
  },
  [sizes.down("mobileL")]: {
    projectCtn: (inView) => ({
      flexDirection: "column",
      marginBottom: "7rem",
    }),
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
