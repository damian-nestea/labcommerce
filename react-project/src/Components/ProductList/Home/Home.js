import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard'
import {HomeContainer} from './homeStyle'

export const Home = () => {
  return (
    <div>
      <HomeContainer>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </HomeContainer>
    </div>
  )
}
