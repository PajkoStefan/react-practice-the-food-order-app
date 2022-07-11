import CartIcon from "../../../../assets/icons/CartIcon/CartIcon";
import Button from "../../../UI/Button/Button";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  return (
    <Button
      button={{
        id: "btn-show-cart",
        className: classes.button,
        onClick: onClick,
      }}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </Button>
  );
};

export default HeaderCartButton;
