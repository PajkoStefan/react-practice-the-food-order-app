import classes from "./MealItem.module.css";

const MealItem = ({ key, meal: { name, description, price } }) => {
  const mealPrice = `$${price.toFixed(2)}`;

  return (
    <li key={key} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.price}>
          <p>{mealPrice}</p>
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
