import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navbar: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoNav: {
    width: "15%",
    height: "100%"
  },
  logoStyle: {
    width: "100%",
    height: "auto"
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-around",
    width: "30%",
  },
});

export default useStyles;
