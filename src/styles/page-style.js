import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  general: {
    width: "80%",
    margin: "2rem auto 0 auto",
    [sizes.down("mobileL")]: {
      width: "90%",
      margin: "1rem auto 0 auto"
    }
  },
});

export default useStyles;
