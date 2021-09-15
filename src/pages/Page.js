import useStyles from "../styles/page-style";
function Page({ children }) {
  const { general } = useStyles();
  return <main className={general}>{children}</main>;
}

export default Page;
