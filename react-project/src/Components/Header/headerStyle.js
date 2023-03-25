import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height:15vh;
  width:100vw;
  max-width:100%;
  padding: 0 5rem;
  background-color:#FFF;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-family:'Sono', sans-serif;
`
export const MainNavBar = styled.ul`
  display:flex;
  gap:1.5rem;
  list-style:none;
  margin:0;
  padding:0;
`
export const MenuItem = styled.a`
  :link , :visited{
    text-decoration:none;
    color:#009A87;
    text-transform:uppercase;
    transition: 0.5s;
  }
  :hover{
    color:#F68A53
  }
`
export const Logo = styled.img`
margin-right:10vw;
  height:9rem;
  transition: 0.5s;
  :hover{
    height:11rem;
  }
`
export const AreaUsuario = styled.div`
  display:flex;
  gap: 1.5rem;
`
export const Login = styled.a`
  :link , :visited{
    text-decoration:none;
    text-transform:uppercase;
    color: #ccc;
    background-color:#00665e; 
    padding:0.5rem 1.2rem;
    border-radius:0.25rem;
    transition: 0.5s;
  }
  :hover{
    color: #f68a53;
  }
`
export const Register = styled.a`
  :link , :visited{
    text-decoration:none;
    text-transform:uppercase;
    color: #ccc;
    background-color:#00665e;
    padding:0.5rem 1.5rem;
    border-radius:0.25rem;
    transition: 0.5s;
  }
  :hover{
    color:#F68A53;
  }
`