import mealsImg from "../../../../assets/images/meals.jpg";

import classes from "./HeaderImg.module.css";

const HeaderImg = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImg} alt="A table full of delicious food!" />
    </div>
  );
};

export default HeaderImg;
