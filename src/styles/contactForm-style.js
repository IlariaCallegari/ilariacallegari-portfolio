import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  contactFormCtn: (inView) => ({
    display: "flex",
    marginTop: "3rem",
    marginBottom: "3rem",
    opacity: 0,
    animation: inView && "$fade-in 0.7s ease-in forwards",
  }),
  "@keyframes fade-in": {
    "100%": {
      opacity: 1,
    },
  },
});

export default useStyles;
