import styled from 'styled-components'

export const FooterMainContainer = styled.footer`
  min-height:30vh;
  background-color:#00665e;
  font-family:'Sono', sans-serif;
  display:flex;
  flex-direction:column;
  gap:5rem;
  padding: 5rem 10rem;
`
export const FooterTopContainer = styled.section`
  display:flex;
  justify-content:space-between;
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
export const Underline = styled.span`
  text-decoration:underline;
  text-decoration-color:#F68A53;
`
export const FooterBottomContainer = styled.section`
  min-height:3rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const DireitosReservados = styled.p`
  font-size:0.8rem;
  color:#A2A2A2;
`
export const AstroDevRedesSociais = styled.ul`
  list-style-type:none;
  display:flex;
  gap:0.5rem;
`
export const LinksRedesSociais = styled.a`
  img{
    width:2rem;
    border-radius:0.5rem;
    :hover{
      width:2.2rem;
    }
  }
`