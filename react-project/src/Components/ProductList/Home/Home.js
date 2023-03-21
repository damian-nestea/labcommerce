import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard'
import { Items } from '../ShoppingCart/Items/Items';
import { HomeContainer , HomeTopContainer , QtdeProdutos , LabelListOrdenacao , DropDownListOrdenacao , HomeProductList } from './homeStyle'

export const Home = ({ItemsList, car, setCar,amount,setAmount,addToCart , searchFilter, minFilter, maxFilter}) => {
  /* Declaração de estado para ordenar produtos */
  const listaOrdination = ["Ordenar","Menor preço", "Maior preço"]
  const [ordination, setOrdination] = React.useState(listaOrdination[0]);
  const Add = listaOrdination.map(Add => Add
    )

  /* Mudança de estado do select de ordenação */
  const onChangeOrdination = (e) =>{
    setOrdination(e.target.value)
  }

  /* Variável contendo filtro e ordenação para renderização de lista de produtos */
  const ItensFiltrados = ItemsList
    .filter((product)=>{
      return product.name.toLowerCase().includes(searchFilter.toLowerCase());
    })
    .filter((product)=>{
      return product.price >= minFilter || minFilter === "";
    })
    .filter((product)=>{
      return product.price <= maxFilter || maxFilter === "";
    })
    .sort((a,b) =>{
      if(ordination ==="Menor preço"){
        return a.price - b.price;
      }else if(ordination === "Maior preço"){
        return b.price - a.price
      }
    })
    .map((product) =>{
      return <ProductCard key={product.id} product = {product} addToCart = {addToCart}/>
    })

  let ItemsCount = ItensFiltrados.length;

  return (
      <HomeContainer>
        <HomeTopContainer>
          <QtdeProdutos>Quantidade de produtos: {ItemsCount}</QtdeProdutos>
          <LabelListOrdenacao htmlFor='ordenacao'>
            Ordenaçao:
            <DropDownListOrdenacao onChange={onChangeOrdination} id='ordenacao'>
            {
              Add.map((address,index) => <option key={index} value={address}>{address}</option>)
            }
            </DropDownListOrdenacao>
          </LabelListOrdenacao>          
        </HomeTopContainer>
        {/* Renderização de lista de Produtos */}
        <HomeProductList>
          {ItensFiltrados}
        </HomeProductList>
      </HomeContainer>
  )
}
