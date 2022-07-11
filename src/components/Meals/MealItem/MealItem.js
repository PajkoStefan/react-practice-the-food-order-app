import MealItemForm from "./MealItemForm/MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = ({ meal: { id, name, description, price } }) => {
  const mealPrice = `$${price.toFixed(2)}`;

  return (
    <li key={id} className={classes.meal}>
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
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
