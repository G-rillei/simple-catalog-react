import produce from "immer";
import React, { useEffect, useReducer } from "react";
import { createContext } from "react";

interface ICartContext {
  cart: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  dispatchCart: any;
}

interface CartActions {
  type: "ADD" | "INCREMENT" | "DECREMENT" | "REMOVE";
  payload: any;
}

const CartContext = createContext({} as ICartContext);

const initialValue: any = [];

const reducer = (state: ICartContext["cart"], action: CartActions) => {
  return produce(state, (draft: ICartContext["cart"]) => {
    switch (action.type) {
      case "ADD":
        draft.push(action.payload);

        break;
      case "INCREMENT":
        const index = draft.findIndex(
          (item: any) => item.id === action.payload.id
        );
        draft[index].quantity += 1;
        break;

      case "DECREMENT":
        const product = draft.find((item: any) => item.id === action.payload);
            if(!product) return;

            product.quantity -= 1;

        if (product.quantity === 0) {
            draft.splice(draft.indexOf(product), 1);
        }

        break;
      case "REMOVE":
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  });
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatchCart] = useReducer(reducer, initialValue);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
