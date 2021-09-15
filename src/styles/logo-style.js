import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  logoNav: {
    width: "15%",
    height: "100%",
    [sizes.down("mobileL")]:{
      width: "35%"
    }
  },
  logoStyle: {
    width: "100%",
    height: "auto",
  },
});

export default useStyles;
