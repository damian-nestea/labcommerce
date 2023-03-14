import React from 'react'
import { FooterContainer , AstroDevLinks , Links} from './footerStyle'

export const Footer = () => {
  return (
    <FooterContainer>
      <AstroDevLinks>
        ASTRODEV LINKS
        <li><Links href="./">Início</Links></li>
        <li><Links href="./">Shop</Links></li>
        <li><Links href="./">Sobre nós</Links></li>
        <li><Links href="./">Trabalhe conosco</Links></li>
        
      </AstroDevLinks>
    </FooterContainer>
  )
}