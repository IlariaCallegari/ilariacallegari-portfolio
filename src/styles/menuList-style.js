import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menuList: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
    "& li": {
      listStyleType: "none",
      textTransform: "uppercase",
    }
  },
});

export default useStyles;
