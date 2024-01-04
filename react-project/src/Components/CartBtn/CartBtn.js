import React from "react";
import { CartIconContainer, CartImgSrc } from "./cartBtnStyle";
import { ShoppingCartSVG } from "../shoppingCartSVG/ShoppingCartSVG";

const CartBtn = ({ setMobileCart, mobileCart }) => {
  const color = mobileCart ? "#f68a53" : "#009a87";
  return (
    <CartIconContainer>
      <CartImgSrc
        onClick={() => {
          setMobileCart(!mobileCart);
        }}
        mobileActive={mobileCart}
      >
        <ShoppingCartSVG color={color} />
      </CartImgSrc>
    </CartIconContainer>
  );
};

export default CartBtn;
