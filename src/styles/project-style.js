import { createUseStyles } from "react-jss";
import colors from "../utils/colors";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  projectCtn: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  img: (inView) => ({
    animation: inView && "$fade-in 0.7s ease-in forwards",
    opacity: 0,
    width: "100%",
    height: "auto",
  }),
  general: {
    width: "50%",
    [sizes.down("tablet")]: {
      width: "100%",
    },
  },
  projectDescr: (inView) => ({
    display: "flex",
    alignItems: "flex-start",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
  }),
  shortDescr: {
    margin: "7rem 10rem 0 0",
    borderTop: `2px solid ${colors.lightGrey}`,
    [sizes.down("tablet")]: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
    },
    [sizes.down("mobileL")]: {
      flexDirection: "column",
      margin: "2rem 10rem 0 0",
    },
    "& h2": {
      fontSize: "2.5rem",
      fontWeight: 200,
      marginBottom: "2rem",
      marginTop: "3rem",
      lineHeight: "3rem"
    },
    "& h3": {
      marginTop: "3rem",
    },
    "& p": {
      marginBottom: "3rem",
      [sizes.down("tablet")]: {
        marginBottom: "1rem",
      },
    },
  },
  projName: {
    [sizes.down("tablet")]: {
      width: "50%",
    },
    [sizes.down("mobileL")]: {
      width: "100%",
    },
  },
  stackCtn: {
    [sizes.down("tablet")]: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      paddingLeft: "5rem",
    },
    [sizes.down("tablet")]: {
      width: "100%",
    },
  },
  stack: {
    marginBottom: "3rem",
  },
  lessons: {
    margin: "5rem 10rem 5rem 0",
    borderBottom: `2px solid ${colors.lightGrey}`,
    paddingBottom: "3rem",
    [sizes.down("tablet")]: {
      margin: "3rem 0",
      paddingBottom: "0"
    },
  },
  projectBg: {
    marginTop: "7rem",
    width: "50%",
    [sizes.down("tablet")]: {
      width: "100%",
      marginTop: "3rem"
    },
    "& p": {
      marginBottom: "5rem",
      [sizes.down("tablet")]: {
        marginBottom: "1rem"
      },
    },
  },
  staticPreviewCtn: {
    width: "100%",
    "& img": {
      width: "100%",
      marginBottom: "4rem",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  },
  [sizes.down("tablet")]: {
    projectDescr: (inView) => ({
      flexDirection: "column",
    }),
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
