import styled from 'styled-components'

export const FiltersContainer = styled.section`
  width:20vw;
  min-height:80vh;
  display:flex;
  flex-direction:column;
  padding:1rem;
`

export const FiltersTitle = styled.h2`
color:#00665e;

`

export const Form = styled.form`
  display:flex;
  flex-direction:column;
  margin-top:2rem;
  gap:1rem;

`

export const StyledLabel = styled.label`
  display:flex;
  flex-direction:column;
  gap:0.1rem;
  color:#00665e;
`

export const Input = styled.input`
  :focus{
    outline:none;
  }
  font-family:'Sono', sans-serif;
  color:#009A87;
  font-size:1rem;
  height:2rem;
  padding:0.2rem;
  border:0;
  border-bottom:0.05rem solid #009A87;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  } 
  [type=number] {
    -moz-appearance:textfield;
  }

`






