import styled from "styled-components";

export const CartIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: none;

  position: absolute;
  top: 3.5rem;
  right: 2rem;

  @media screen and (max-width: 1100px) {
    top: 1.1rem;
  }
`;

export const CartImgSrc = styled.div`
  width: 2rem;
  background-color: #fff;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
