import React from 'react'
import { HeaderContainer , MainNavBar , MenuItem } from './headerStyle'

export const Header = () => {
  return (
    <HeaderContainer>
      <MainNavBar>
        <li><MenuItem href='./'>Início</MenuItem></li>
        <li><MenuItem href='./'>Comprar</MenuItem></li>
        <li><MenuItem href='./'>Sobre nós</MenuItem></li>
        <li><MenuItem href='./'>Contato</MenuItem></li>
      </MainNavBar>


    </HeaderContainer>
  )
}