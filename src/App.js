import { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "../resources/extra-files/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
