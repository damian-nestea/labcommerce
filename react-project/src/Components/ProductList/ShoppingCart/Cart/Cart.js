import React from 'react';
import { Items } from '../Items/Items';
import { CartContainer , ItemsContainer, CartTitle, ValorTotal} from './cartStyle'

export const Cart = ({car,setCar,amount,setAmount}) => {
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <ItemsContainer>
        <Items 
          car = {car}
        />
      </ItemsContainer>
      <ValorTotal>Valor Total: {amount}</ValorTotal>
    </CartContainer>
  )
}
