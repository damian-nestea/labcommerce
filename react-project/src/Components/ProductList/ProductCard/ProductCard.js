import React from 'react'
import { Card , ContainerImagemProduto , ImagemProduto , NomeProduto , DescricaoProduto , ValorProduto , AddToCartButton} from './productCardStyle'
import { FormatPrice } from '../FormatPrice/FormatPrice'

export const ProductCard = ({product, addToCart}) => {
  return (
        <Card>
          <ContainerImagemProduto> 
            <ImagemProduto src={product.imageUrl}/> 
          </ContainerImagemProduto>
          <NomeProduto key={product.name}>{product.name}</NomeProduto>
          <DescricaoProduto key={product.description}>{product.description}</DescricaoProduto>
          <ValorProduto key={product.price}><FormatPrice price = {product.price} /> </ValorProduto>
          <AddToCartButton onClick={()=>addToCart(product)}>Adicionar ao Carrinho</AddToCartButton>
        </Card>
  )
}