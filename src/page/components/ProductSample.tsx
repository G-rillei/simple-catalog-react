import React, { useContext, useState } from "react";
import { ButtonView, Flex, TextView } from "../../styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "../Home.css";
import { CartContext } from "../../contexts/cart";
import { convertToBRL } from "../../helpers/indext";

interface IProductSampleProps {
  product: {
    id: number;
    name: string;
    price: number;
    isActive: boolean;
  };
}

const ProductSample: React.FC<IProductSampleProps> = ({
  product: { id, name, price },
}) => {
  const { dispatchCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    if(quantity === 0){
      setQuantity(1);
      dispatchCart({type: "ADD", payload: {id, name, price, quantity: 1}});
      return 
    } 
    
    dispatchCart({ type: "INCREMENT", payload: { id, name, price, quantity: quantity + 1 } });
    setQuantity(prev => prev + 1);
  };

  const handleRemove = () => {
    if(quantity === 0) return

    dispatchCart({ type: "DECREMENT", payload: id });
    setQuantity(prev => prev - 1);
  }

  return (
    <Flex
      justifyBetween
      alignCenter
      p={20}
      mt={20}
      borderRadius="15px"
      backgroundColor="#f2f2f2"
      width="100%"
    >
      <Flex column>
        <TextView fontWeight={600}>{name}</TextView>
        <TextView>{convertToBRL(price)}</TextView>
      </Flex>
      <Flex alignCenter>
        <ButtonView onClick={handleRemove} className="Button" backgroundColor={quantity === 0 ? "#b3b3b3" : "crimson"}>
          <AiOutlineMinus color="#fff" size={20} />
        </ButtonView>
        <TextView ml={10}>{quantity}</TextView>
        <ButtonView onClick={handleAdd} className="Button" backgroundColor="royalblue">
          <AiOutlinePlus color="#fff" size={20} />
        </ButtonView>
      </Flex>
    </Flex>
  );
};

export default ProductSample;
