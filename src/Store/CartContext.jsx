import React, { useState } from "react";
import { useReducer } from "react";

export const CartContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  const itemPrice = parseFloat(action.item.price);
  const itemQuantity = parseInt(action.item.quantity);
  if (action.type === "ADD") {
    const existingItemsIndex = state.items.findIndex(
      (item) => item.id == action.item.id
    );
    console.log(existingItemsIndex);
    let existingItems = state.items[existingItemsIndex];
    console.log(existingItems);
    let updatedItems;
    if (existingItems) {
      const updatedItem = {
        ...existingItems,
        quantity: existingItems.quantity + action.item.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemsIndex] = updatedItem;
      console.log(updatedItem);
      console.log(updatedItems);
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount = state.totalAmount + itemPrice * itemQuantity;
    console.log("Price:", action.item.price);
    console.log("Quantity:", action.item.quantity);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
export default function CartContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  function AddCartItem(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function RemoveCartItem(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const values = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddCartItem,
    removeItem: RemoveCartItem,
  };
  return (
    <div>
      <CartContext.Provider value={values}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
}
