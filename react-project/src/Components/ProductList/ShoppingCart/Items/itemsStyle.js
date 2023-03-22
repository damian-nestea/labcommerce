import styled from 'styled-components'

export const ItemListContainer = styled.section`
  display:flex;
  flex-direction:column;
  gap:1.5rem;
`

export const ItemContainer = styled.article`
  display:flex;
  align-items:center;
  gap:1rem;
`

export const QuantidadeItem = styled.p`
  width:1.5rem;
`

export const NomeItem = styled.p`
  font-weight:bold;
`

export const RemoverButton = styled.button`
  background-color:#FFF;
  color:#00665e;
  font-size:2.3rem;
  font-weight:500;
  height:0.1rem;
  line-height:0.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  cursor:pointer;
`