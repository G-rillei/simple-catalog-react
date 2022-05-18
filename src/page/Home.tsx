import React, { useContext } from "react";
import "./Home.css";
import { Flex, TextView } from "../styles";
import ProductSample from "./components/ProductSample";
import { ProductsContext } from "../contexts/productsContext";
import { CartContext } from "../contexts/cart";
import ConfirmOrder from "./components/ConfirmOrder";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  const { products } = useContext(ProductsContext);
  const { cart } = useContext(CartContext);

  return (
    <Flex justifyCenter flex={1}>
      <Flex className="BlurredImage" />
      <Flex px={20} className="TableContainer">
        <TextView fontWeight={700} mt={20} fontSize={20}>
          Mercadorias disponíveis
        </TextView>
        {products?.map((product) => {
          return <ProductSample key={product.id} product={product} />;
        })}
      </Flex>

      {
        cart.length > 0 && 
          <ConfirmOrder />
        
      }

    </Flex>
  );
};

export default Home;
