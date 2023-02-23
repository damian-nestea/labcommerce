import React from 'react'
import { CardContainer,Card , ImagemProduto ,NomeProduto , ValorProduto , AddToCartButton} from './productCardStyle'

export const ProductCard = ({ItemsList,addToCart}) => {
  return (
    <CardContainer>
      {ItemsList.map((produto) => (
        <Card>
          <ImagemProduto src={produto.imageUrl}/>
          <NomeProduto key={produto.name}>{produto.name}</NomeProduto>
          <ValorProduto key={produto.price}>R$ {produto.price}</ValorProduto>
          <AddToCartButton onClick={()=>addToCart(produto)}>Adicionar ao Carrinho</AddToCartButton>
        </Card>
      ))}
    </CardContainer>
  )
}