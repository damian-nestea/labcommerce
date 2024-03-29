import React from 'react'
import { FiltersContainer , FiltersTitle , Form , StyledLabel , Input , LimparFiltros } from './filtersStyle'

export const Filters = ({minFilter, onChangeMinFilter, maxFilter, onChangeMaxFilter, searchFilter, onChangeSearchFilter, limparFiltros}) => {
  return (
    <FiltersContainer>
      <FiltersTitle>Filters</FiltersTitle>
      <Form>
        <StyledLabel htmlFor='valorMinimo'>
          Valor mínimo:
          <Input value={minFilter} onChange={onChangeMinFilter} id="valorMinimo" type={"number"}/>
        </StyledLabel>
        <StyledLabel htmlFor='valorMaximo'>
          Valor máximo:
          <Input value={maxFilter} onChange={onChangeMaxFilter} id="valorMaximo" type={"number"} />
        </StyledLabel>
        <StyledLabel htmlFor='buscaPorNome'>
          Busca por nome:
          <Input value={searchFilter} onChange={onChangeSearchFilter} id="buscaPorNome" type={"text"} />
        </StyledLabel>
        <LimparFiltros onClick={limparFiltros}>Limpar Filtros</LimparFiltros>
      </Form>
    </FiltersContainer>
  )
}
