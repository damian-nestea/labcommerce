import React from "react";
import { Items } from "../Items/Items";
import {
  CartContainer,
  ItemsContainer,
  CartTitle,
  ValorTotal,
  FinalizarCompra,
  CartMobileContainer,
} from "./cartStyle";
import { FormatPrice } from "../../FormatPrice/FormatPrice";
import { useMedia } from "../../../../Hooks/useMedia";
import CartBtn from "../../../CartBtn/CartBtn";

export const Cart = ({ car, amount, removeFromCart, addToCart }) => {
  const mobile = useMedia("(max-width:1400px)");
  const [mobileCart, setMobileCart] = React.useState(false);

  React.useEffect(() => {}, [mobileCart]);

  const mobileCartItems = mobileCart && (
    <CartMobileContainer>
      <CartTitle>Cart</CartTitle>
      <ItemsContainer>
        <Items
          car={car}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </ItemsContainer>
      <ValorTotal>
        Valor Total: <FormatPrice price={amount} />
      </ValorTotal>
      {amount !== 0 ? (
        <FinalizarCompra>Finalizar compra</FinalizarCompra>
      ) : null}
    </CartMobileContainer>
  );

  const cart = mobile ? (
    <>
      <CartBtn setMobileCart={setMobileCart} mobileCart={mobileCart} />
      {mobileCartItems}
    </>
  ) : (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <ItemsContainer>
        <Items
          car={car}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </ItemsContainer>
      <ValorTotal>
        Valor Total: <FormatPrice price={amount} />
      </ValorTotal>
      {amount !== 0 ? (
        <FinalizarCompra>Finalizar compra</FinalizarCompra>
      ) : null}
    </CartContainer>
  );
  return <>{cart}</>;
};
