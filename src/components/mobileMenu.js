import MenuList from "./MenuList";
import useStyles from "../styles/mobileMenu-style";
function MobileMenu() {
  const { mobileMenuCtn } = useStyles();
  return (
    <div className={mobileMenuCtn}>
      <MenuList />
    </div>
  );
}

export default MobileMenu;
