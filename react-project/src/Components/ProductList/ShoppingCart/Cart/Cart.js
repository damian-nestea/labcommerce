import React from 'react';
import { Items } from '../Items/Items';
import { CartContainer , ItemsContainer, CartTitle, ValorTotal} from './cartStyle'

export const Cart = ({car,setCar,amount,setAmount, removeFromCart}) => {
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <ItemsContainer>
        <Items 
          car = {car}
          removeFromCart = {removeFromCart}
        />
      </ItemsContainer>
      <ValorTotal>Valor Total: {amount}</ValorTotal>
    </CartContainer>
  )
}
