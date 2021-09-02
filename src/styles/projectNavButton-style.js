import { createUseStyles } from "react-jss";
import colors from "../utils/colors.js";

const useStyles = createUseStyles({
  navButtonCtn: (inView) => ({
    display: "flex",
    justifyContent: "space-between",
    borderTop: `2px solid ${colors.lightGrey}`,
    opacity: 0,
    borderBottom: `2px solid ${colors.lightGrey}`,
    animation: inView && "$fade-in 0.7s ease-in forwards",
  }),
  btnLeft: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    borderRight: `2px solid ${colors.lightGrey}`,
    "& div": {
      margin: "1rem 1rem",
      "& a": {
        fontSize: "1.2rem",
        fontWeight: 400,
      },
      "& p": {
        fontSize: "0.9rem",
      },
    },
  },
  btnRight: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& div": {
      margin: "1rem 1rem",
      "& a": {
        fontSize: "1.2rem",
        fontWeight: 400,
      },
      "& p": {
        fontSize: "0.9rem",
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
