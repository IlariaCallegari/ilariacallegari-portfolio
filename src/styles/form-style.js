import { createUseStyles } from "react-jss";
import colors from "../utils/colors";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  contactFormCtn: (inView) => ({
    display: "flex",
    marginTop: "3rem",
    marginBottom: "3rem",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
  }),
  headingCtn: {
    width: "40%",
    [sizes.down("tablet")]: {
      width: "100%",
    }
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 200,
  },
  formCtn: {
    width: "60%",
    [sizes.down("tablet")]: {
      width: "100%"
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "1rem",
  },
  input: {
    padding: "1rem 2rem",
    fontFamily: "inherit",
    fontSize: "1rem",
    marginBottom: "1rem",
    outline: "none",
    background: colors.lightGrey,
    border: "none",
    "&:focus": {
      border: `2px solid ${colors.primaryDarkGreen}`,
    },
  },
  textArea: {
    padding: "1rem 2rem",
    fontFamily: "inherit",
    fontSize: "1rem",
    marginBottom: "1rem",
    outline: "none",
    border: "none",
    resize: "none",
    background: colors.lightGrey,
    "&:focus": {
      border: `2px solid ${colors.primaryDarkGreen}`,
    },
  },
  formBtn: {
    padding: "1rem 2rem",
    border: "none",
    fontFamily: "inherit",
    fontSize: "1rem",
    textTransform: "uppercase",
    width: "40%",
    background: colors.secondaryPink,
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease-in",
    [sizes.down("mobileL")]: {
      width: "50%",
    },
    "&:hover": {
      background: colors.primaryDarkGreen,
    },
  },
  errorStyle: {
    fontSize: "0.8rem",
    color: "red",
    marginTop: "-1rem",
  },
  [sizes.down("tablet")]: {
    contactFormCtn: (inView) => ({
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
