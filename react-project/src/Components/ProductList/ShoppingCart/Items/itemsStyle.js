import styled from 'styled-components'

export const ItemListContainer = styled.section`
  display:flex;
  flex-direction:column;
  gap:2rem;
`

export const ItemContainer = styled.article`
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows:repeat(2,1fr);
  align-items:center;
  gap:1rem;
  padding:1rem 0;
  border-bottom:0.05rem solid #00665e;
`

export const QuantidadeItem = styled.p`
  display:flex;
  align-items:center;
  justify-content:center;
  width:1.5rem;
  border: 0.17rem solid #00665e;
  border-radius:40%;
  font-size:0.7rem;
`

export const NomeItem = styled.p`
  font-weight:bold;
  grid-column:1/3;
  grid-row:1/2;
`

export const PriceItem = styled.span`
  font-size:0.7rem;
  grid-column:3/4;
  grid-row:1/2;
`

export const AddRemoveContainer = styled.div`
  padding:0.2rem 0;
  display:flex;
  gap:1rem;
  grid-row:2/3;
  grid-column:1/4;
  justify-content:center;
  align-items:center;
`

export const RemoverButton = styled.button`
  background-color:#FFF;
  color:#00665e;
  font-size:1.3rem;
  font-weight:500;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  cursor:pointer;
`

export const AddButton = styled.button`
  background-color:#FFF;
  color:#00665e;
  font-size:1.3rem;
  font-weight:500;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  cursor:pointer;
`