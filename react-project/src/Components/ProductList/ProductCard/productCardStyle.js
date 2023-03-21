import styled from 'styled-components'

export const CardContainer =  styled.section`
  display:flex;
  flex-wrap:wrap;
  gap:1.5rem;
  justify-content:space-evenly;
`

export const Card = styled.article`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:15vw;
  padding:1rem;
  gap:0.5rem;
  border:0.1rem solid #000;
  border-radius:0.3rem;
`

export const ImagemProduto = styled.img`
  width:100%;
  height:10rem;
  border-radius:0.5rem;
`

export const NomeProduto = styled.h3`
  font-weight:500;
  font-size:1.5rem;
  color: #00665e;
`

export const DescricaoProduto = styled.p`
  font-size:0.8rem;
  text-align:center;
  text-transform:uppercase;
  color: #00665e;
`

export const ValorProduto = styled.p`
  border-bottom: 0.15rem solid #f68a53;
  padding-bottom: 0.10rem;
  color: #00665e;
  font-weight:500;
  font-size:0.8rem;
`

export const AddToCartButton = styled.button`

`

