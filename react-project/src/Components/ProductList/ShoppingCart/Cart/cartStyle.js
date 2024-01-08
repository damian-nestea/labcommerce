import styled, { keyframes } from "styled-components";

const fade = keyframes`
    0%{
      opacity: 0;
      transform: scale(0.5) translateX(30%);
    }
    100% {
      opacity: 0.8;
      transform: scale(1) translateX(0%);
    }
`;

export const CartContainer = styled.section`
  width: 20vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
export const ItemsContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
  padding: 1rem;
  color: #00665e;
  font-size: 1rem;
  animation: ${fade} 0.6s ease-in-out backwards;
`;
export const CartTitle = styled.h2`
  color: #00665e;
`;
export const ValorTotal = styled.p`
  font-size: 0.8rem;
  color: #009a87;
`;
export const FinalizarCompra = styled.button`
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
`;

export const CartMobileContainer = styled.section`
  background-color: #eee;
  opacity: 0.9;
  border-bottom: 1px solid #a2a2a2;
  border-radius: 0.3rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  width: 18rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  position: absolute;
  top: 6rem;
  right: 2rem;

  animation: ${fade} 0.6s ease-in-out backwards;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
`;
