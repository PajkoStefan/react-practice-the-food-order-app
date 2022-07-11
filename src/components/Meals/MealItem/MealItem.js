import MealItemForm from "./MealItemForm/MealItemForm";

import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context.js/cart-context";

const MealItem = ({ meal: { id, name, description, price } }) => {
  const cartContext = useContext(CartContext);

  const mealPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      description: description,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.price}>
          <p>{mealPrice}</p>
        </div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
