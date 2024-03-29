import styled from "styled-components";

export const FiltersContainer = styled.section`
  width: 20vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  grid-area: filtros;

  @media screen and (max-width: 1400px) {
    min-width: 15rem;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    min-height: 0px;
    padding-bottom: 2rem;
  }
`;
export const FiltersTitle = styled.h2`
  color: #00665e;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  color: #00665e;
`;
export const Input = styled.input`
  :focus {
    outline: none;
  }
  font-family: "Sono", sans-serif;
  color: #009a87;
  font-size: 1rem;
  height: 2rem;
  padding: 0.2rem;
  border: 0;
  border-bottom: 0.05rem solid #009a87;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type="number"] {
    -moz-appearance: textfield;
  }
`;
export const LimparFiltros = styled.button`
  margin-top: 2rem;
  background-color: #f68a53;
  color: #fff;
  text-transform: uppercase;
  font-family: "Sono", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  :hover {
    filter: brightness(110%);
  }
`;
