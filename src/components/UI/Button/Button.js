// import classes from "./Button.module.css";

const Button = ({ children, button: { id }, button }) => {
  return (
    <button id={id} {...button}>
      {children}
    </button>
  );
};

export default Button;
