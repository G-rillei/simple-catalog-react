import React, { useCallback, useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { convertToBRL } from "../../helpers/indext";
import { ButtonView, Flex, TextView } from "../../styles";
import "../Home.css";

interface IConfirmOrderProps {}

const ConfirmOrder: React.FC<IConfirmOrderProps> = (props) => {
  const handleConfirm = () => {};

  const { cart } = useContext(CartContext);

  const text = useCallback(() => {
    let primaryText = "";

    cart.map((product) => {
      primaryText += `${product.name} - ${product.quantity} x ${convertToBRL(product.price)}\n`;
    });

    const total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    primaryText = window.encodeURI(primaryText);

    return `${primaryText}\n\n\n\nTotal: ${convertToBRL(total)}`;
  }, [cart]);

  console.log(text());

  return (
    <Flex className="confirmOrderButton">
      <a href={`https://api.whatsapp.com/send?phone=5599981944660&text=${text()}`}>
      <ButtonView
        onClick={handleConfirm}
        width="100%"
        alignCenter
        justifyCenter
        height="100%"
      >
        <TextView textAlign="center" color="#000">
          Confirmar pedido
        </TextView>
      </ButtonView>
      </a>
    </Flex>
  );
};

export default ConfirmOrder;
