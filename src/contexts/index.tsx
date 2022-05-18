import React from "react";
import { CartProvider } from "./cart";
import { ProductsContextProvider } from "./productsContext";

interface IHooksProps {
  children: React.ReactNode;
}

const Hooks: React.FunctionComponent<IHooksProps> = ({ children }) => {
  return (
    <ProductsContextProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsContextProvider>
  );
};

export default Hooks;
