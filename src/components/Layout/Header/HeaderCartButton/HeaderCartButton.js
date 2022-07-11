import { useContext } from "react";
import CartIcon from "../../../../assets/icons/CartIcon/CartIcon";
import CartContext from "../../../../store/cart-context.js/cart-context";
import Button from "../../../UI/Button/Button";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

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
      <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
  );
};

export default HeaderCartButton;
