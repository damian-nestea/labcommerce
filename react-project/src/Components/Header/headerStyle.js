import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-height: 15vh;
  width: 100vw;
  max-width: 100%;
  padding: 0 5rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Sono", sans-serif;
  @media screen and (max-width: 1100px) {
    height: 15rem;
    padding: 1rem;

    display: grid;
    grid-template-areas: "login login" "logo logo" "menu menu";
  }
`;
export const MainNavBar = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1100px) {
    grid-area: menu;
    margin: 0 auto 1rem;
  }
`;
export const MenuItem = styled.a`
  :link,
  :visited {
    text-decoration: none;
    color: #009a87;
    text-transform: uppercase;
    transition: 0.5s;
  }
  :hover {
    color: #f68a53;
  }
`;
export const Logo = styled.img`
  margin-right: 10vw;
  height: 9rem;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 1100px) {
    grid-area: logo;
    margin: 0 auto;
  }
`;
export const AreaUsuario = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  max-height: 80%;

  @media screen and (max-width: 1100px) {
    grid-area: login;
    margin-inline: auto 4rem;
  }
`;
export const Login = styled.a`
  :link,
  :visited {
    text-decoration: none;
    text-transform: uppercase;
    color: #ccc;
    background-color: #00665e;
    padding: 0.5rem 1.2rem;
    border-radius: 0.25rem;
    transition: 0.5s;
  }
  :hover {
    color: #f68a53;
  }
`;
export const Register = styled.a`
  :link,
  :visited {
    text-decoration: none;
    text-transform: uppercase;
    color: #ccc;
    background-color: #00665e;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    transition: 0.5s;
  }
  :hover {
    color: #f68a53;
  }
`;
