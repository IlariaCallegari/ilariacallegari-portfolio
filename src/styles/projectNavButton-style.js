import { createUseStyles } from "react-jss";
import colors from "../utils/colors.js";

const useStyles = createUseStyles({
  navButtonCtn: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: `2px solid ${colors.lightGrey}`,
    borderBottom: `2px solid ${colors.lightGrey}`,
  },
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
    },
  },
});

export default useStyles;
