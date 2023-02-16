import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard'
import { HomeContainer , HomeTopContainer , QtdeProdutos , LabelListOrdenacao , DropDownListOrdenacao , DropDownOptions } from './homeStyle'

export const Home = () => {
  return (
      <HomeContainer>
        <HomeTopContainer>
          <QtdeProdutos>Quantidade de produtos:</QtdeProdutos>
          <LabelListOrdenacao htmlFor='ordenacao'>
            Ordenaçao:
            <DropDownListOrdenacao id='ordenacao'>
              <DropDownOptions value="crescente">Crescente</DropDownOptions>
              <DropDownOptions value="decrescente">Decrescente</DropDownOptions>
            </DropDownListOrdenacao>
          </LabelListOrdenacao>

          
        </HomeTopContainer>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </HomeContainer>
  )
}
