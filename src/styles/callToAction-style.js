import { createUseStyles } from "react-jss";
import colors from "../utils/colors";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  callToAction: (inView) => ({
    marginTop: "7rem",
    marginBottom: "7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
    "& span": {
      width: "40%",
      height: "2px",
      borderTop: `2px solid ${colors.lightGrey}`,
      marginLeft: "2rem",
      marginRight: "2rem",
    },
  }),
  ctaHeading: {
    fontSize: "2rem",
    fontWeight: 200,
    lineHeight: "2.85rem",
    width: "35%",
    [sizes.down("mobileL")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  [sizes.down("mobileL")]: {
    callToAction: (inView) => ({
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
