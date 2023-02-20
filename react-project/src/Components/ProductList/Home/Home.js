import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard'
import { Items } from '../ShoppingCart/Items/Items';
import { HomeContainer , HomeTopContainer , QtdeProdutos , LabelListOrdenacao , DropDownListOrdenacao , DropDownOptions } from './homeStyle'

export const Home = ({ItemsList}) => {
  /* Declaração de estado para ordenar produtos */
  const [ordination, setOrdination] = React.useState(["Crescente","Descrescente"]);
  const Add = ordination.map(Add => Add
    )

  const onChangeOrdination = (e) =>{
    console.log(ordination)
    console.log(ordination[e.target.value]);
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
              Add.map((address, key) => <option value={key}>{address}</option>)
            }
              {/* <DropDownOptions value={ordination}></DropDownOptions>
              <DropDownOptions value="decrescente">Decrescente</DropDownOptions> */}
            </DropDownListOrdenacao>
          </LabelListOrdenacao>          
        </HomeTopContainer>
        <ProductCard
          ItemsList = {ItemsList}
        />
        
      </HomeContainer>
  )
}
