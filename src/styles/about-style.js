import { createUseStyles } from "react-jss";
import colors from "../utils/colors.js";

const useStyles = createUseStyles({
  aboutCtn: (inView) => ({
    marginTop: "10rem",
    display: "flex",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
  }),
  aboutDescrCtn: {
    margin: "0 10rem",
    borderTop: `2px solid ${colors.lightGrey}`,
    borderBottom: `2px solid ${colors.lightGrey}`,
    paddingBottom: "2.5rem",
    "& h2": {
      marginTop: "2.5rem",
      marginBottom: "1.5rem",
      fontSize: "2.5rem",
      fontWeight: 200,
    },
    "& p": {
      marginBottom: "2rem",
    },
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
