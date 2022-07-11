import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";

import classes from "./Cart.module.css";

const items = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
];

const Cart = ({ onCloseCart }) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.65</span>
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
        <Button
          button={{ id: "btn-order", className: classes.button }}
          className={classes.button}
        >
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
