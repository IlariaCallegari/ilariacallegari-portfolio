import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

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
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 200,
  },
  formCtn: {
    width: "60%",
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
    width: "30%",
    background: colors.secondaryPink,
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease-in",
    "&:hover": {
      background: colors.primaryDarkGreen,
    },
  },
  errorStyle: {
    fontSize: "0.8rem",
    color: "red",
    marginTop: "-1rem",
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
