import { createUseStyles } from "react-jss";
import colors from "../utils/colors"

const useStyles = createUseStyles({
  btn: {
    border: "1px solid rgb(0,0,0)",
    textTransform: "uppercase",
    padding: "1rem 2rem",
    display: "inline-block",
    transition: "all 0.3s ease-in",
    "&:hover": {
      background: colors.primaryGreen,
      border: `1px solid ${colors.primaryGreen}`,
      color: "#fff",

    }
  },
});

export default useStyles;
