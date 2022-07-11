import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
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
      <Button button={{ id: "add-to-cart" }}>Add to Cart</Button>
    </form>
  );
};

export default MealItemForm;
