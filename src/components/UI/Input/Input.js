import classes from "./Input.module.css";

const Input = ({ input: { id }, label, input }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...input} />
    </div>
  );
};

export default Input;
