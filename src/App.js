import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Paragraph from "./components/Paragraph/Paragraph";
import CartProvider from "./store/cart-context.js/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const paragraphContent = {
    title: "Order From Us",
    content: (
      <>
        Surprise! Use <strong>"ORDER10"</strong> coupon code to save 10%!
      </>
    ),
  };

  const buttonContent = { content: "Click And Be Surprised" };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
        <Paragraph content={paragraphContent} button={buttonContent} />
      </main>
    </CartProvider>
  );
};

export default App;
