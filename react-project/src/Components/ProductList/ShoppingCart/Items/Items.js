import React from 'react'
import { ItemContainer ,QuantidadeItem , NomeItem, RemoverButton} from './itemsStyle'

export const Items = () => {
  return (
    <ItemContainer>
      <QuantidadeItem>x0</QuantidadeItem>
      <NomeItem>Nome do Item</NomeItem>
      <RemoverButton>Remover</RemoverButton>
    </ItemContainer>
  )
}
