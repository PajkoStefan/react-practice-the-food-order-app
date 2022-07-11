import { Fragment } from "react";

import HeaderImg from "./HeaderImg/HeaderImg";
import NavigationMenu from "./NavigationMenu/NavigationMenu";

const Header = ({onShowCart}) => {
  return (
    <Fragment>
      <NavigationMenu onShowCart={onShowCart}/>
      <HeaderImg />
    </Fragment>
  );
};

export default Header;
