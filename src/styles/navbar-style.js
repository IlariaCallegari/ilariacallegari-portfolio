import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navbar: {
    height: "6rem",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoStyle: {
    height: "4rem",
    width: "15%",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-around",
    width: "30%",
  },
});

export default useStyles;
