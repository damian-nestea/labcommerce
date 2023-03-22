import styled from 'styled-components'

export const CartContainer = styled.section`
  width:20vw;
  min-height:80vh;
  display:flex;
  flex-direction:column;
  padding:1rem;
`

export const ItemsContainer = styled.article`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:0.5rem;
  margin:2rem 0;
  padding:1rem;
  color:#00665e;
  font-size:1rem;
`

export const CartTitle = styled.h2`
  color:#00665e;
`

export const ValorTotal = styled.p`
  font-size:0.8rem;
  color:#009A87;
`