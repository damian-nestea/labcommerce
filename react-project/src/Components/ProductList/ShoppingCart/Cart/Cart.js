import React from 'react';
import { Items } from '../Items/Items';
import { CartContainer , ItemsContainer , CartTitle , ValorTotal , FinalizarCompra } from './cartStyle'
import { FormatPrice } from '../../FormatPrice/FormatPrice';

export const Cart = ({ car , amount , removeFromCart , addToCart}) => {
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <ItemsContainer>
        <Items 
          car = {car}
          removeFromCart = {removeFromCart}
          addToCart = {addToCart}
        />
      </ItemsContainer>
      <ValorTotal>Valor Total: <FormatPrice price ={amount}/></ValorTotal>
      {amount !== 0 ? <FinalizarCompra>Finalizar compra</FinalizarCompra> : null}
    </CartContainer>
  )
}
