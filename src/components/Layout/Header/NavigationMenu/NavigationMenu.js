import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./NavigationMenu.module.css";

const NavigationMenu = () => {
  return (
    <header className={classes.header}>
      <h1>Yummy Yum</h1>
      <HeaderCartButton />
    </header>
  );
};

export default NavigationMenu;
