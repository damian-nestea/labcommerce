import styled from 'styled-components'

export const HomeContainer = styled.main`
background-color:#D4EFDF;
  width:60vw;
  min-height:80vh;
  display:flex;
  flex-wrap:wrap;
  gap:1rem;
  align-items:flex-start;
  justify-content:space-evenly;
  padding:1rem 2rem; 
  margin-bottom:2rem;
  border-radius:1rem;
`
export const HomeTopContainer = styled.div`
  flex:0 0 100%;
  display:flex;
  justify-content:space-between;
  color:#00665e;
`
export const HomeProductList = styled.section `
  display:flex;
  flex-wrap:wrap;
  gap:1.5rem;
  justify-content:space-evenly;
`
export const QtdeProdutos = styled.p``
export const LabelListOrdenacao = styled.label``
export const DropDownListOrdenacao = styled.select`
  height:2rem;
  padding:0.2rem;
  border:0;
  border-bottom:0.05rem solid #009A87;
  font-family:'Sono' , sans-serif;
  color:#009A87;
`