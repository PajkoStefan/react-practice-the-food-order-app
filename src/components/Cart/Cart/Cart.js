import Button from "../../UI/Button/Button";

import classes from "./Cart.module.css";

const items = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
];

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.65</span>
      </div>
      <div className={classes.actions}>
        <Button button={{ id: "btn-close", className: classes["button--alt"] }}>
          Close
        </Button>
        <Button
          button={{ id: "btn-order", className: classes.button }}
          className={classes.button}
        >
          Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
