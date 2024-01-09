import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    0%{
      opacity: 0;
      transform: scale(0.5) translateX(30%);
    }
    100% {
      opacity: 0.8;
      transform: scale(1) translateX(0%);
    }
`;

const fadeOut = keyframes`
    0%{
      opacity: 1;
      transform: scale(1) translateX(0%);
    }
    100% {
      opacity: 0;
      transform: scale(0) translateX(30%) translateY(-50%);
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
  animation: ${fadeIn} 0.6s ease-in-out backwards;
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
  opacity: 0;
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

  transition: 2.6s ease-in-out;

  @media screen and (max-width: 1100px) {
    top: 3.5rem;
  }

  animation: ${fadeIn} 0.6s ease-in-out forwards;
  &.hidden {
    animation: ${fadeOut} 0.6s linear forwards;
  }
`;
