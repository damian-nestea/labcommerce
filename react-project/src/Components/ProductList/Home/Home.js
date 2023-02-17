import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard'
import { Items } from '../ShoppingCart/Items/Items';
import { HomeContainer , HomeTopContainer , QtdeProdutos , LabelListOrdenacao , DropDownListOrdenacao , DropDownOptions } from './homeStyle'

export const Home = ({ItemsList}) => {
  const ItemsCount = ItemsList.length;
  return (
      <HomeContainer>
        <HomeTopContainer>
          <QtdeProdutos>Quantidade de produtos: {ItemsCount}</QtdeProdutos>
          <LabelListOrdenacao htmlFor='ordenacao'>
            Ordenaçao:
            <DropDownListOrdenacao id='ordenacao'>
              <DropDownOptions value="crescente">Crescente</DropDownOptions>
              <DropDownOptions value="decrescente">Decrescente</DropDownOptions>
            </DropDownListOrdenacao>
          </LabelListOrdenacao>          
        </HomeTopContainer>
        <ProductCard
          ItemsList = {ItemsList}
        />
        
      </HomeContainer>
  )
}
