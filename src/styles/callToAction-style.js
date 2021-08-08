import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  callToAction: {
    marginTop: "7rem",
    marginBottom: "7rem",
    display: "flex",
    alignItems: "center",
    "& span": {
      width: "40%",
      height: "2px",
      borderTop: `2px solid ${colors.lightGrey}`,
      marginLeft: "2rem",
      marginRight: "2rem",
    },
  },
  ctaHeading: {
    fontSize: "2rem",
    fontWeight: 200,
    lineHeight: "2.85rem",
    width: "35%",
  },
});

export default useStyles;
