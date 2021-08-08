import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  footer: {
    padding: "1rem 10% 0 10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: colors.secondaryLightPink,
  },
  link: {
    fontSize: "2rem",
    marginRight: "1rem",
  }
});

export default useStyles;
