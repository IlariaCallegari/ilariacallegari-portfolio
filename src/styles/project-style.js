import { createUseStyles } from "react-jss";
import colors from "../utils/colors"

const useStyles = createUseStyles({
  projectCtn: {
   display: "flex",
   justifyContent: "center",
   flexDirection: "column"
  },
  projectDescr: {
      display: "flex",
      alignItems: "flex-start",
  },
  shortDescr:{
    width: "50%",
    margin: "7rem 10rem 5rem 0",
    paddingBottom: "5rem",
    borderTop: `2px solid ${colors.lightGrey}`,
    borderBottom: `2px solid ${colors.lightGrey}`,
    "& h3": {
      marginTop: "3rem",
      marginBottom: "2rem",
      fontSize: "2rem",
      fontWeight: 300
    },
    "& p": {
      marginBottom: "3rem"
    }
  },
  stack: {
    marginBottom: "3rem"
  },
  projectBg:{
    marginTop: "7rem",
    width: "50%",
    "& h3": {
      fontSize: "1.5rem",
      fontWeight: 300,
      marginBottom: "2rem"
    },
    "& p": {
      marginBottom: "5rem"
    }
  },
  staticPreviewCtn:{
    width: "100%",
    "& h3": {
      fontSize: "1.5rem",
      fontWeight: 300,
      marginBottom: "2rem"
    }, 
    "& img": {
      width: "100%",
      marginBottom: "4rem",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }
  }

});

export default useStyles;
