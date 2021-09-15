import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  navbar: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [sizes.down("laptop")]: {
      width: "90%",
      marginTop: "1rem"
    },
  },
});

export default useStyles;
