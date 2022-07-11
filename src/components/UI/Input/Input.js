import { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = ({ input: { id }, label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} {...input} />
    </div>
  );
};

export default forwardRef(Input);
