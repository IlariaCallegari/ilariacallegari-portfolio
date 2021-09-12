import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  menuList: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
    "& li": {
      listStyleType: "none",
      textTransform: "uppercase",
    },
  },
  footLinks: {
    color: "#fff",
    "&:hover": {
      color: colors.primaryDarkGreen,
    },
  },
});

export default useStyles;
