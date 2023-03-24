import React from 'react'
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import whatsapp from '../assets/img/whatsapp.svg'
import twitter from '../assets/img/twitter.svg'
import { FooterMainContainer , FooterTopContainer , FooterBottomContainer , AstroDevLinks , Links , ContatoLinks , Underline ,  DireitosReservados, AstroDevRedesSociais , LinksRedesSociais} from './footerStyle'

export const Footer = () => {
  return (
    <FooterMainContainer>
    <FooterTopContainer>
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
        <li><ContatoLinks href="./">SHOP: <Underline>hello@astrodevshop.com</Underline></ContatoLinks></li>
        <li><ContatoLinks href="./">IMPRENSA: <Underline>press@astrodevshop.com</Underline></ContatoLinks></li>
        <li><ContatoLinks href="./">MATRIZ: R. Marte 12, Poços de Caldas - MG</ContatoLinks></li>
        <li><ContatoLinks href="./">+55(35)2222-0000</ContatoLinks></li>
      </AstroDevLinks>
    </FooterTopContainer>
    <FooterBottomContainer>
      <DireitosReservados>© 2023 AstroDev Shop All Rights Reserved</DireitosReservados>
      <AstroDevRedesSociais>
        <li><LinksRedesSociais><img src={facebook} alt="icone do facebook" /></LinksRedesSociais></li>
        <li><LinksRedesSociais><img src={instagram} alt="icone do facebook" /></LinksRedesSociais></li>
        <li><LinksRedesSociais><img src={whatsapp} alt="icone do facebook" /></LinksRedesSociais></li>
        <li><LinksRedesSociais><img src={twitter} alt="icone do facebook" /></LinksRedesSociais></li>
      </AstroDevRedesSociais>
    </FooterBottomContainer>
    </FooterMainContainer>
  )
}