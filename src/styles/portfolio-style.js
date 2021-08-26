import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  projectCtn: {
    display: "flex",
    width: "100%",
    marginTop: "3rem",
  },
  imgCtn: {
    width: "50%",
  },
  projectImg: {
    width: "100%",
    height: "auto",
  },
  projectDescr: {
    width: "50%",
    borderTop: `2px solid ${colors.lightGrey}`,
    borderBottom: `2px solid ${colors.lightGrey}`,
    marginLeft: "10%",
    marginRight: "10%",
    padding: "2.5rem 0",
    "& h2": {
        fontSize: "2.5rem",
        fontWeight: 200,
        lineHeight: "3rem",
        marginBottom: "2rem",
    },
    "& p": {
        marginBottom: "2.5rem"
    }
  },
});

export default useStyles;
