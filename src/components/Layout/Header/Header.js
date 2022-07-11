import { Fragment } from "react";

import HeaderImg from "./HeaderImg/HeaderImg";
import NavigationMenu from "./NavigationMenu/NavigationMenu";

const Header = () => {
  return (
    <Fragment>
      <NavigationMenu />
      <HeaderImg />
    </Fragment>
  );
};

export default Header;
