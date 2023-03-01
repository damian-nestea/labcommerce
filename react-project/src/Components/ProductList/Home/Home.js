import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard'
import { Items } from '../ShoppingCart/Items/Items';
import { HomeContainer , HomeTopContainer , QtdeProdutos , LabelListOrdenacao , DropDownListOrdenacao , HomeProductList } from './homeStyle'

export const Home = ({ItemsList, car, setCar,amount,setAmount,addToCart}) => {
  /* Declaração de estado para ordenar produtos */
  const listaOrdination = ["Crescente", "Decrescente"]
  const [ordination, setOrdination] = React.useState(listaOrdination[0]);
  const Add = listaOrdination.map(Add => Add
    )

  const onChangeOrdination = (e) =>{
    console.log(ordination)
    setOrdination(e.target.value)
  }

  let ItemsCount = ItemsList.length;

  return (
      <HomeContainer>
        <HomeTopContainer>
          <QtdeProdutos>Quantidade de produtos: {ItemsCount}</QtdeProdutos>
          <LabelListOrdenacao htmlFor='ordenacao'>
            Ordenaçao:
            <DropDownListOrdenacao onChange={onChangeOrdination} id='ordenacao'>
            {
              Add.map((address) => <option value={address}>{address}</option>)
            }
            </DropDownListOrdenacao>
          </LabelListOrdenacao>          
        </HomeTopContainer>
        
        {/* Renderização de lista de Produtos */}
        <HomeProductList>
          {ItemsList.map((product) =>{
            return <ProductCard key={product.id} product = {product} addToCart = {addToCart}/>
          })}
        </HomeProductList>
      </HomeContainer>
  )
}
