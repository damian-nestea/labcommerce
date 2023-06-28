import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14rem;
  padding: 1rem;
`;
export const ContainerImagemProduto = styled.div`
  background-color: #d5d5d5;
  width: 13rem;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.1rem;
`;
export const ImagemProduto = styled.img`
  display: flex;
  align-items: center;
  max-height: 80%;
  max-width: 90%;
  border-radius: 0.5rem;
  transition: 1s;
  :hover {
    max-height: 90%;
    max-width: 95%;
  }
`;
export const NomeProduto = styled.h3`
  display: flex;
  align-items: center;
  min-height: 5.6rem;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  color: #00665e;
`;
export const DescricaoProduto = styled.p`
  min-height: 4rem;
  max-width: 100%;
  font-size: 0.8rem;
  text-align: center;
  text-transform: uppercase;
  color: #00665e;
  margin-bottom: 0.2rem;
`;
export const ValorProduto = styled.p`
  border-bottom: 0.15rem solid #f68a53;
  padding-bottom: 0.1rem;
  color: #00665e;
  font-weight: 500;
  font-size: 0.8rem;
`;
export const AddToCartButton = styled.button`
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #00665e;
  border: none;
  border-radius: 0.3rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: #f68a53;
  }
`;
export const ImgCart = styled.img`
  fill: #fff;
  stroke: #fff;
`;
