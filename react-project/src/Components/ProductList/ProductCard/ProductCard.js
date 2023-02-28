import React from 'react'
import { CardContainer,Card , ImagemProduto ,NomeProduto , ValorProduto , AddToCartButton} from './productCardStyle'
import { FormatPrice } from '../FormatPrice/FormatPrice'

export const ProductCard = ({ItemsList, addToCart}) => {
  return (
    <CardContainer>
      {ItemsList.map((produto) => (
        <Card>
          <ImagemProduto src={produto.imageUrl}/>
          <NomeProduto key={produto.name}>{produto.name}</NomeProduto>
          <ValorProduto key={produto.price}><FormatPrice price = {produto.price} /> </ValorProduto>
          <AddToCartButton onClick={()=>addToCart(produto)}>Adicionar ao Carrinho</AddToCartButton>
        </Card>
      ))}
    </CardContainer>
  )
}