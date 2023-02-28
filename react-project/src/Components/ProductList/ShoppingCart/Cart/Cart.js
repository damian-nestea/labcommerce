import React from 'react';
import { Items } from '../Items/Items';
import { CartContainer , ItemsContainer, CartTitle, ValorTotal} from './cartStyle'
import { FormatPrice } from '../../FormatPrice/FormatPrice';

export const Cart = ({car,amount,removeFromCart}) => {
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <ItemsContainer>
        <Items 
          car = {car}
          removeFromCart = {removeFromCart}
        />
      </ItemsContainer>
      <ValorTotal>Valor Total: <FormatPrice price ={amount}/></ValorTotal>
    </CartContainer>
  )
}
