import styled from "styled-components";

export const FooterMainContainer = styled.footer`
  min-height: 30vh;
  background-color: #00665e;
  font-family: "Sono", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5rem 10rem;

  @media screen and (max-width: 800px) {
    padding: 2rem;
  }
`;
export const FooterTopContainer = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 800px) {
    gap: 2rem;
    flex-direction: column;
  }
`;
export const AstroDevLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: #fff;
  font-weight: 700;
`;
export const Links = styled.a`
  :link,
  :visited {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 200;
    color: #fff;
    transition: 0.5s;
  }
  ::before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    width: 0.5rem;
    height: 0.4rem;
    background-color: #f68a53;
    margin-right: 0.5rem;
    border-radius: 100%;
  }
  :hover {
    color: #f68a53;
  }
`;
export const ContatoLinks = styled.a`
  :link,
  :visited {
    text-decoration: none;
    font-weight: 200;
    color: #fff;
    transition: 0.5s;
  }
  ::before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    width: 0.5rem;
    height: 0.4rem;
    background-color: #f68a53;
    margin-right: 0.5rem;
    border-radius: 100%;
  }
  :hover {
    color: #f68a53;
  }
`;
export const Underline = styled.span`
  text-decoration: underline;
  text-decoration-color: #f68a53;
`;
export const FooterBottomContainer = styled.section`
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    gap: 2rem;
    flex-direction: column;
  }
`;
export const DireitosReservados = styled.p`
  font-size: 0.8rem;
  color: #a2a2a2;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
export const AstroDevRedesSociais = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 0.5rem;
`;
export const LinksRedesSociais = styled.a`
  img {
    width: 2rem;
    border-radius: 0.5rem;
    transition: 0.3s;
    :hover {
      width: 2.2rem;
    }
  }
`;
