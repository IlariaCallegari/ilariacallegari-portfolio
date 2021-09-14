import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  mainCtn: (inView) => ({
    marginTop: "10rem",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
    display: "flex",
    flexDirection: "column",
    "& h2": {
      width: "40%",
      borderTop: `2px solid ${colors.lightGrey}`,
      fontSize: "2.5rem",
      fontWeight: 200,
      marginBottom: "2.5rem",
      paddingTop: "2.5rem",
    },
    "& div h3": {
      marginTop: "2rem",
    },
  }),
  skillsCtn: {
    marginRight: "15%",
    marginLeft: "15%",
  },
  techCtn: {
    display: "flex",
    "& div": {
      textAlign: "center",
    },
  },
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
