import classes from "./AvailableMeals.module.css";

import Card from "../../UI/Card/Card";

import { DUMMY_MEALS } from "../../../data/dummy-meals";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem key={meal.id} meal={meal}>
        {meal.name} - {meal.description} - {meal.price}
      </MealItem>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
