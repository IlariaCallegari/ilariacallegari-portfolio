import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  mobileMenuCtn: {
    background: colors.secondaryLightPink,
    padding: "1rem 2rem",
    position: "absolute",
    zIndex: "100", 
    top: "3rem",
    right: 0
  },
});

export default useStyles;
