import React from 'react'
import { ItemListContainer, ItemContainer ,QuantidadeItem , NomeItem, RemoverButton} from './itemsStyle'

export const Items = ({car,removeFromCart}) => {
  return (
    <ItemListContainer>
      {car.map((item) =>
      <ItemContainer>
        <QuantidadeItem key={item.quantity}>{item.quantity}</QuantidadeItem>
        <NomeItem key={item.name}>{item.name}</NomeItem>
        <RemoverButton onClick={()=>removeFromCart(item)}>-</RemoverButton>
      </ItemContainer>
      )}
    </ItemListContainer>
  )
}
