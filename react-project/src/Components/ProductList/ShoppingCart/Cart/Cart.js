import React from 'react';
import { Items } from '../Items/Items';
import { CartContainer , ItemsContainer, CartTitle, ValorTotal} from './cartStyle'

export const Cart = () => {
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <ItemsContainer>
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </ItemsContainer>
      <ValorTotal>Valor Total: 0</ValorTotal>
    </CartContainer>
  )
}
