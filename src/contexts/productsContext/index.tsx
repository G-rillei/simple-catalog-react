import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import productsService from "../../services/api/products";

interface IProductsContext {
  products: Array<{
    name: string;
    price: number;
    isActive: boolean;
    id: number;
  }>;
  setProducts: Dispatch<SetStateAction<IProductsContext["products"]>>;
}

const ProductsContext = createContext({} as IProductsContext);

const ProductsContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getProducts = async () => {
    const result = await productsService.getProducts();
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState<IProductsContext["products"]>([]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };
