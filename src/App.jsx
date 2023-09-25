import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meal/Meal";
import React, { Fragment, useState } from "react";
import CartContextProvider from "./Store/CartContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const CardIsOpen = () => {
    setIsOpen(true);
  };
  const CardIsClosed = () => {
    setIsOpen(false);
  };
  return (
    <CartContextProvider>
      {isOpen && <Cart CardIsClosed={CardIsClosed} />}
      <Header CardIsOpen={CardIsOpen} />
      <main>
        <Meal />
      </main>
    </CartContextProvider>
  );
}

export default App;
