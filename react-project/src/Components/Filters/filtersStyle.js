import styled from 'styled-components'

export const FiltersContainer = styled.section`
  width:20vw;
  min-height:80vh;
  display:flex;
  flex-direction:column;
  padding:1rem;
  border:0.05rem solid #000;
`

export const FiltersTitle = styled.h2`

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
`

export const Input = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  } 
  [type=number] {
    -moz-appearance:textfield;
  }

`






