import React from 'react'
import './App.css';
import { GlobalStyle } from './GlobalStyle'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ProductList/ShoppingCart/Cart/Cart';
import { ItemsList } from './Components/assets/productList';

function App() {
  /* Criação de estados para filtros dos produtos e dados do carrinho de compras */
  const [minFilter, setMinFilter] = React.useState("1");
  const [maxFilter, setMaxFilter] = React.useState("2");
  const [searchFilter, setSearchFilter] = React.useState("C");
  const [car, setCar] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const onChangeMinFilter = (e) =>{
    setMinFilter(e.target.value);
  }
  const onChangeMaxFilter = (e) =>{
    setMaxFilter(e.target.value);
  }

  const onChangeSearchFilter = (e) =>{
    setSearchFilter(e.target.value);
  }


  return (
    <div className="App">
      <GlobalStyle />
      <Filters
        minFilter = {minFilter}
        onChangeMinFilter ={onChangeMinFilter}
        maxFilter = {maxFilter}
        onChangeMaxFilter ={onChangeMaxFilter}
        searchFilter = {searchFilter}
        onChangeSearchFilter ={onChangeSearchFilter}
      />
      <Home
        ItemsList = {ItemsList}
      />
      <Cart />
    </div>
  );
}

export default App;
