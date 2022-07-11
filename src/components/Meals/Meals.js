import { Fragment } from "react";
import Cart from "../Cart/Cart/Cart";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

// import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
      <Cart />
    </Fragment>
  );
};

export default Meals;
