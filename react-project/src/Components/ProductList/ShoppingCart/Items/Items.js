import React from 'react'
import { Price } from '../../FormatPrice/formatPriceStyle'
import { ItemListContainer, ItemContainer , PriceItem,QuantidadeItem , NomeItem, RemoverButton} from './itemsStyle'
import { FormatPrice } from '../../FormatPrice/FormatPrice'

export const Items = ({car,removeFromCart}) => {
  return (
    <ItemListContainer>
      {car.map((item) =>
      <ItemContainer>
        <NomeItem key={item.name}>{item.name}</NomeItem>
        <PriceItem key={item.id}><FormatPrice price = {item.quantity * item.price}/></PriceItem>
        <QuantidadeItem key={item.quantity}>{item.quantity}</QuantidadeItem>
        <RemoverButton onClick={()=>removeFromCart(item)}>-</RemoverButton>
      </ItemContainer>
      )}
    </ItemListContainer>
  )
}
