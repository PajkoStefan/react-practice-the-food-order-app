import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

import classes from "./NavigationMenu.module.css";

const NavigationMenu = ({onShowCart}) => {
  return (
    <header className={classes.header}>
      <h1>Yummy Yum</h1>
      <HeaderCartButton onClick={onShowCart}/>
    </header>
  );
};

export default NavigationMenu;
