import styled from 'styled-components'

export const FooterContainer = styled.footer`
  min-height:30vh;
  background-color:#00665e;
  font-family:'Sono', sans-serif;
  display:flex;
  justify-content:space-between;
  padding: 5rem 10rem;
`

export const AstroDevLinks = styled.ul`
  list-style-type:none;
  display:flex;
  flex-direction:column;
  gap:0.2rem;
  color:#FFF;
  font-weight:700;
`
export const Links = styled.a`
  :link , :visited{
    text-decoration:none;
    text-transform:uppercase;
    font-weight:200;
    color:#FFF;
  }
  ::before{
    content:" ";
    display:inline-block;
    vertical-align:middle;
    width:0.5rem;
    height:0.4rem;
    background-color:#F68A53;
    margin-right:0.5rem;
    border-radius:100%;
  }
  :hover{
    color:#F68A53
  }
`

export const ContatoLinks = styled.a`
  :link , :visited{
    text-decoration:none;
    font-weight:200;
    color:#FFF;
  }
  ::before{
    content:" ";
    display:inline-block;
    vertical-align:middle;
    width:0.5rem;
    height:0.4rem;
    background-color:#F68A53;
    margin-right:0.5rem;
    border-radius:100%;
  }
  :hover{
    color:#F68A53
  }
`