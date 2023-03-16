import React from 'react'
import { FooterContainer , AstroDevLinks , Links , ContatoLinks} from './footerStyle'

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
      <AstroDevLinks>
        LINKS ÚTEIS
        <li><Links href="./">Localizador de  lojas</Links></li>
        <li><Links href="./">Perguntas frequentes</Links></li>
        <li><Links href="./">Área do cliente</Links></li>
        <li><Links href="./">Política de privacidade</Links></li>
        <li><Links href="./">Termos e condições</Links></li>
      </AstroDevLinks>
      <AstroDevLinks>
        CONTATO
        <li><ContatoLinks href="./">SHOP: hello@astrodevshop.com</ContatoLinks></li>
        <li><ContatoLinks href="./">IMPRENSA: press@astrodevshop.com</ContatoLinks></li>
        <li><ContatoLinks href="./">LOJA MATRIZ: Rua Marte 12, Poços de Caldas - MG</ContatoLinks></li>
        <li><ContatoLinks href="./">+55(35)2222-0000</ContatoLinks></li>
      </AstroDevLinks>
    </FooterContainer>
  )
}