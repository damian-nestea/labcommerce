import styled from 'styled-components'

export const HeaderContainer = styled.section`
  height:10vh;
  width:100vw;
  max-width:100%;
  padding: 0 5rem;
  background-color:lightcoral;
  display:flex;
  align-items:center;
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
    color:#000;
    text-transform:uppercase;
  }

`