import classes from "./AvailableMeals.module.css";

import { DUMMY_MEALS } from "../../../data/dummy-meals";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <li key={meal.id}>
        {meal.name} - {meal.description} - {meal.price}
      </li>
    );
  });

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
