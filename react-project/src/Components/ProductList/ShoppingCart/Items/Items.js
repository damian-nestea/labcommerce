import React from 'react'
import { Price } from '../../FormatPrice/formatPriceStyle'
import { ItemListContainer, ItemContainer , PriceItem ,QuantidadeItem , NomeItem, AddRemoveContainer , RemoverButton , AddButton} from './itemsStyle'
import { FormatPrice } from '../../FormatPrice/FormatPrice'

export const Items = ({ car , removeFromCart , addToCart}) => {
  return (
    <ItemListContainer>
      {car.map((item) =>
      <ItemContainer>
        <NomeItem key={item.name}>{item.name}</NomeItem>
        <PriceItem key={item.id}><FormatPrice price = {item.quantity * item.price}/></PriceItem>
        <AddRemoveContainer>
          <RemoverButton onClick={()=>removeFromCart(item)}>−</RemoverButton>
          <QuantidadeItem key={item.quantity}>{item.quantity}</QuantidadeItem>
          <AddButton onClick={()=>addToCart(item)}>+</AddButton>
        </AddRemoveContainer>
      </ItemContainer>
      )}
    </ItemListContainer>
  )
}
