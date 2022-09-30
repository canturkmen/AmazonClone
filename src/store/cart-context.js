import React, { useReducer } from "react";

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const item = {
          ...action.item,
          amount: 1,
        };
        updatedItems = state.items.concat(item);
      }
      return {
        totalAmount: updatedTotalAmount,
        items: updatedItems,
      };
    case "REMOVE":
      const existingRemoveItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingRemoveItem = state.items[existingRemoveItemIndex];
      const updatedRemoveTotalAmount =
        state.totalAmount - existingRemoveItem.price;
      let updatedRemoveItems;

      if (existingRemoveItem.amount === 1) {
        updatedRemoveItems = state.items.filter(
          (item) => item.id !== action.id
        );
      } else {
        let updatedRemoveItem = { 
          ...existingRemoveItem,
          amount: existingRemoveItem.amount - 1,
        };
        updatedRemoveItems = [...state.items];
        updatedRemoveItems[existingRemoveItemIndex] = updatedRemoveItem;
      }
      return {
        items: updatedRemoveItems,
        totalAmount: updatedRemoveTotalAmount,
      };
    default:
      return defaultCartState;
  }
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
