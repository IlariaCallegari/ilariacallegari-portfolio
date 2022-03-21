import { createUseStyles } from "react-jss";
import colors from "../utils/colors.js";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  aboutCtn: (inView) => ({
    marginTop: "10rem",
    display: "flex",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
    alignItems: "flex-start"
  }),
  img: {
    height: "auto",
    minWidth: "40%",
    [sizes.down("mobileL")]: {
      width: "100%",
    },
  },
  aboutDescrCtn: {
    margin: "0 4rem",
    borderTop: `2px solid ${colors.lightGrey}`,
    borderBottom: `2px solid ${colors.lightGrey}`,
    paddingBottom: "2.5rem",
    [sizes.down("laptop")]: {
      margin: "0 3rem",
    },
    [sizes.down("tablet")]: {
      margin: "0 2.5rem",
    },
    [sizes.down("mobileL")]: {
      margin: 0,
    },
    "& h2": {
      marginTop: "2.5rem",
      marginBottom: "1.5rem",
      fontSize: "2.5rem",
      fontWeight: 200,
      [sizes.down("mobileL")]: {
        fontSize: "2rem",
      },
    },
    "& article": {
      marginBottom: "2rem",
    },
  },
  [sizes.down("mobileL")]: {
    aboutCtn: (inView) => ({
      marginTop: "5rem",
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
