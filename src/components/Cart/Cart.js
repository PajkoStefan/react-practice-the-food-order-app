import { useContext } from "react";
import CartContext from "../../store/cart-context.js/cart-context";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = ({ onCloseCart }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id, 1);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button
          button={{
            id: "btn-close",
            className: classes["button--alt"],
            onClick: onCloseCart,
          }}
        >
          Close
        </Button>
        {hasItems && (
          <Button
            button={{ id: "btn-order", className: classes.button }}
            className={classes.button}
          >
            Order
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
