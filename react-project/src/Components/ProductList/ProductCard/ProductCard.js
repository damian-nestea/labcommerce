import React from 'react'
import {Card , ImagemProduto ,NomeProduto , ValorProduto , AddToCartButton} from './productCardStyle'
import { FormatPrice } from '../FormatPrice/FormatPrice'

export const ProductCard = ({product, addToCart}) => {
  return (
        <Card>
          <ImagemProduto src={product.imageUrl}/>
          <NomeProduto key={product.name}>{product.name}</NomeProduto>
          <ValorProduto key={product.price}><FormatPrice price = {product.price} /> </ValorProduto>
          <AddToCartButton onClick={()=>addToCart(product)}>Adicionar ao Carrinho</AddToCartButton>
        </Card>
  )
}