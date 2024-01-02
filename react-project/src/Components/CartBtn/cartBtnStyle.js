import styled from "styled-components";

export const CartIconContainer = styled.div`
  display: none;
  @media screen and (max-width: 1400px) {
    display: flex;
    align-items: center;
  }
`;

export const CartImgSrc = styled.img`
  width: 2rem;

  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
