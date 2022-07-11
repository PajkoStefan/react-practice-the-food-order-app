import { useContext, useEffect, useState } from "react";
import CartIcon from "../../../../assets/icons/CartIcon/CartIcon";
import CartContext from "../../../../store/cart-context.js/cart-context";
import Button from "../../../UI/Button/Button";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timeoutId = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [items]);

  return (
    <Button
      button={{
        id: "btn-show-cart",
        className: btnClasses,
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
