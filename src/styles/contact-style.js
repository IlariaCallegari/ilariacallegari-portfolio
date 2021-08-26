import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  getInTouchCtn: (inView) => ({
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    animation: inView && "$fade-in 0.7s ease-in forwards",
    opacity: 0,
    borderTop: `2px solid ${colors.lightGrey}`,
    borderBottom: `2px solid ${colors.lightGrey}`,
    padding: "3rem 0"
  }),
  headingCtn: {
    width: "40%",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 200,
  },
  descriptionCtn: {
    width: "60%",
    "& h3": {
      marginBottom: "1.5rem",
    },
    "& h3:nth-of-type(2)": {
      marginTop: "1.5rem"
    }
  },
  linkCtn: {
    marginTop: "3rem",
  },
  link: {
    fontSize: "2rem",
    marginRight: "1rem",
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
