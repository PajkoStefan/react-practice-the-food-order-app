import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

// import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
