import React from 'react'
import {ProductCardContainer , ImagemProduto ,NomeProduto , ValorProduto , AddToCartButton} from './productCardStyle'

export const ProductCard = () => {
  return (
    <ProductCardContainer>
      <ImagemProduto src="https://static.vecteezy.com/ti/fotos-gratis/t2/2098203-gato-malhado-prateado-sentado-no-fundo-verde-gratis-foto.jpg" alt="Foto Produto"/>
      <NomeProduto>Nome do Produto</NomeProduto>
      <ValorProduto>R$ 000,00</ValorProduto>
      <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
    </ProductCardContainer>
  )
}