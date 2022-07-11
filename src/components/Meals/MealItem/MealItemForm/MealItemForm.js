import { useRef, useState } from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amoundIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <Button button={{ id: "add-to-cart", type: "submit" }}>
        Add to Cart
      </Button>

      {!amoundIsValid && <p>Please enter a valid amount(1-5)!</p>}
    </form>
  );
};

export default MealItemForm;
