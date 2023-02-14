import React from 'react'
import { FiltersContainer , FiltersTitle , Form , StyledLabel , Input} from './filtersStyle'

export const Filters = () => {
  return (
    <FiltersContainer>
      <FiltersTitle>Filters</FiltersTitle>
      <Form>
        <StyledLabel htmlFor='valorMinimo'>
          Valor mínimo:
          <Input id="valorMinimo"/>
        </StyledLabel>
        <StyledLabel htmlFor='valorMaximo'>
          Valor máximo:
          <Input id="valorMaximo"/>
        </StyledLabel>
        <StyledLabel htmlFor='buscaPorNome'>
          Busca por nome:
          <Input id="buscaPorNome"/>
        </StyledLabel>
      </Form>
    </FiltersContainer>
  )
}
