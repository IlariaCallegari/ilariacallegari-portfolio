import { createUseStyles } from "react-jss";
import colors from "../utils/colors";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  footer: {
    padding: "1rem 10% 0 10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: colors.secondaryLightPink,
    [sizes.down("laptop")]: {
      padding: "1rem 5% 0 5%"
    },
    [sizes.down("mobileL")]: {
      flexDirection: "column",
    },
  },
  link: {
    fontSize: "2rem",
    marginRight: "1rem",
    color: "#fff",
    [sizes.down("mobileL")]: {
      fontSize: "2.5rem"
    }
  },
});

export default useStyles;
