import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

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
  leftSide: {
    width: "50%",
  },
  projectDescr: (inView1) => ({
    display: "flex",
    alignItems: "flex-start",
    opacity: 0,
    animation: inView1 && "$fade-in 0.7s ease-in forwards",
  }),
  shortDescr: {
    margin: "7rem 10rem 0 0",
    borderTop: `2px solid ${colors.lightGrey}`,
    "& h2": {
      fontSize: "2.5rem",
      fontWeight: 200,
      marginBottom: "2rem",
      marginTop: "3rem",
    },
    "& h3": {
      marginTop: "3rem",
    },
    "& p": {
      marginBottom: "3rem",
    },
  },
  stack: {
    marginBottom: "3rem",
  },
  lessons: {
    margin: "5rem 10rem 5rem 0",
    borderBottom: `2px solid ${colors.lightGrey}`,
    paddingBottom: "3rem",
  },
  projectBg: {
    marginTop: "7rem",
    width: "50%",
    "& p": {
      marginBottom: "5rem",
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
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
