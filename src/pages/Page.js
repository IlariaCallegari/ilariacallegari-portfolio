import useStyles from "../styles/page-style";
function Page({ children }) {
  const { general } = useStyles();
  return <section className={general}>{children}</section>;
}

export default Page;
