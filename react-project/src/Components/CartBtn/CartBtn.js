import React from "react";
import { CartIconContainer, CartImgSrc } from "./cartBtnStyle";
import cartImg from "../assets/img/shopping-cart.png";

const CartBtn = () => {
  return (
    <CartIconContainer>
      <CartImgSrc src={cartImg} />
    </CartIconContainer>
  );
};

export default CartBtn;
